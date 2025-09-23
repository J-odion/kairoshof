import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Building, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import VideoOverlay from "./VideoOverlay";
import ProjectSlider from "./ProjectSlider";
import BrochureRequestForm from "./BrochureRequestForm";
import SiteVisitForm from "./SiteVisitForm";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  img: string;
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isSiteVisitFormOpen, setIsSiteVisitFormOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Init bouncing objects
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    const imgs = [
      "/favicon-1.png",
      "/favicon-1.png",
      "/favicon-1.png"
    ];

    const initialParticles: Particle[] = Array.from({ length: 5 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5, // subtle velocity
      vy: (Math.random() - 0.5) * 0.5,
      size: 60 + Math.random() * 40,
      img: imgs[Math.floor(Math.random() * imgs.length)],
    }));

    setParticles(initialParticles);
  }, []);

  // Animate physics
  useEffect(() => {
    let animationFrame: number;

    const tick = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;

      setParticles((prev) => {
        const next = [...prev];

        for (let i = 0; i < next.length; i++) {
          let p = next[i];
          p.x += p.vx;
          p.y += p.vy;

          // Wall collision
          if (p.x <= 0 || p.x + p.size >= width) p.vx *= -1;
          if (p.y <= 0 || p.y + p.size >= height) p.vy *= -1;

          // Particle collision (basic elastic)
          for (let j = i + 1; j < next.length; j++) {
            let q = next[j];
            const dx = q.x - p.x;
            const dy = q.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < (p.size + q.size) / 2) {
              // swap velocities
              [p.vx, q.vx] = [q.vx, p.vx];
              [p.vy, q.vy] = [q.vy, p.vy];
            }
          }
        }

        return next.map((p) => ({ ...p }));
      });

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Track mouse for gradient background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { icon: Building, value: "50+", label: "Properties Developed" },
    { icon: Users, value: "1000+", label: "Happy Families" },
    { icon: Award, value: "5+", label: "Awards Won" },
    { icon: Star, value: "4.9", label: "Client Rating" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Subtle animated radial gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
          transition: "background 0.3s ease",
        }}
      />

      {/* Physics bouncing images */}
      {particles.map((p, i) => (
        <img
          key={i}
          src={p.img}
          alt="decorative"
          className="absolute pointer-events-none opacity-20 blur-sm"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            transition: "transform 0.1s linear",
          }}
        />
      ))}

      {/* Existing content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
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
                Watch  Story
              </Button>
            </div>


          </div>

          {/* Right */}
          <div className="relative">
            <ProjectSlider />
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
                    <div className="p-3 bg-primary/10 rounded-xl transition-colors duration-300 group-hover:bg-primary/20">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
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
