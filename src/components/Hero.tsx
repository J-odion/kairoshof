"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Building, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectSlider from "./ProjectSlider";
import BrochureRequestForm from "./BrochureRequestForm";
import SiteVisitForm from "./SiteVisitForm";
import VideoOverlay from "./VideoOverlay";

import Matter, { Engine, Render, Runner, World, Bodies, Body } from "matter-js";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isSiteVisitFormOpen, setIsSiteVisitFormOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const particlesRef = useRef<Matter.Body[]>([]);

  // Init Matter.js physics
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    const engine = Engine.create();
    const render = Render.create({
      canvas: canvasRef.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    const world = engine.world;

    // Walls
    const walls = [
      Bodies.rectangle(width / 2, -10, width, 20, { isStatic: false }),
      Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true }),
      Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true }),
      Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true }),
    ];
    World.add(world, walls);

    // Images as bouncing bodies
    const imgs = ["/favicon-1.png"];
    const particles = Array.from({ length: 6 }).map(() => {
      const size = 50 + Math.random() * 30;
      const body = Bodies.circle(
        Math.random() * width,
        Math.random() * height,
        size / 2,
        {
          restitution: 1,
          friction: 0,
          frictionAir: 0,
          render: {
            sprite: {
              texture: imgs[Math.floor(Math.random() * imgs.length)],
              xScale: size / 250,
              yScale: size / 250,
            },
          },
        }
      );

      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 3,
      });

      return body;
    });

    World.add(world, particles);
    particlesRef.current = particles;

    // Runner
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Keep them swirling and respond to mouse
    Matter.Events.on(runner, "tick", () => {
      particles.forEach((body) => {
        // random subtle swirl
        const forceMagnitude = 0.0003;
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * forceMagnitude,
          y: (Math.random() - 0.5) * forceMagnitude,
        });

        // gentle attraction toward mouse
        const dx = mousePosition.x - body.position.x;
        const dy = mousePosition.y - body.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 300) {
          const strength = 0.0005 * (1 - distance / 300);
          Body.applyForce(body, body.position, {
            x: dx * strength,
            y: dy * strength,
          });
        }
      });
    });

    engineRef.current = engine;

    const handleResize = () => {
      const w = containerRef.current?.offsetWidth || width;
      const h = containerRef.current?.offsetHeight || height;
      render.canvas.width = w;
      render.canvas.height = h;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [mousePosition.x, mousePosition.y]);

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Blow-up scaling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (canvasRef.current) {
        const scale = 1 + window.scrollY / 3000;
        canvasRef.current.style.transform = `scale(${scale})`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: Building, value: "50+", label: "Properties Developed" },
    { icon: Users, value: "500+", label: "Happy Families" },
    { icon: Award, value: "10+", label: "Awards Won" },
    { icon: Star, value: "4.5", label: "Client Rating" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Background gradient follows mouse */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x / window.innerWidth) * 100}% ${(mousePosition.y / window.innerHeight) * 100}%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
          transition: "background 0.3s ease",
        }}
      />

      {/* Physics bouncing canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-10">
            <h1 className="text-6xl lg:text-7xl font-light leading-tight">
              <span className="block text-foreground">The Art of</span>
              <span className="block bg-gradient-to-r from-primary via-primary-glow py-4 to-primary bg-clip-text text-transparent font-bold">
                Living
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Experience luxury sustainable living with Kairos Hof...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="luxury" size="ml" asChild>
                <Link to="/products">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="elegant"
                size="ml"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Story
              </Button>
            </div>
          </div>

          <div className="relative">
            <ProjectSlider />
          </div>
        </div>

        {/* Stats */}
        <div className="w-full flex justify-center mx-auto pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-center rounded-2xl p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlays */}
      <VideoOverlay
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="dQw4w9WgXcQ"
        title="Kairos Hof Story"
      />
      <BrochureRequestForm
        isOpen={isBrochureFormOpen}
        onClose={() => setIsBrochureFormOpen(false)}
      />
      <SiteVisitForm
        isOpen={isSiteVisitFormOpen}
        onClose={() => setIsSiteVisitFormOpen(false)}
      />
    </section>
  );
};

export default Hero;
