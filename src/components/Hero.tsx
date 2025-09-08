import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Building, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import VideoOverlay from "./VideoOverlay";
import ProjectSlider from "./ProjectSlider";
import BrochureRequestForm from "./BrochureRequestForm";
import SiteVisitForm from "./SiteVisitForm";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isSiteVisitFormOpen, setIsSiteVisitFormOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Building, value: "50+", label: "Properties Developed" },
    { icon: Users, value: "1000+", label: "Happy Families" },
    { icon: Award, value: "5+", label: "Awards Won" },
    { icon: Star, value: "4.9", label: "Client Rating" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
          transition: 'background 0.3s ease'
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full floating" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full floating" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary/20 rounded-full floating" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="fade-in-up">
                <h1 className="text-6xl lg:text-7xl font-light leading-tight">
                  <span className="block text-foreground">The Art of</span>
                  <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-bold">
                    Living
                  </span>
                </h1>
              </div>
              
              <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Experience luxury sustainable living with Kairos Hof. We create extraordinary 
                  residential environments that harmoniously align with your dreams and the future of our planet.
                </p>
              </div>

              <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="luxury" size="lg" className="group" asChild>
                    <Link to="/products">
                      Explore Projects
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    variant="elegant" 
                    size="lg" 
                    className="group"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Watch Story
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left group">
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Project Slider */}
          <div className="fade-in-right relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Featured Project Slider */}
              <ProjectSlider />

              {/* Dream Design Build Card */}
              <Card className="card-luxury p-6 bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-accent">DREAM.DESIGN.BUILD</h3>
                  <p className="text-muted-foreground">
                    We transform visions into reality with sustainable development solutions 
                    that align with SDG 11 for sustainable cities and communities.
                  </p>
                  <Button 
                    variant="outline" 
                    className="group"
                    onClick={() => setIsBrochureFormOpen(true)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Video Overlay */}
      <VideoOverlay 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="dQw4w9WgXcQ" // Replace with actual Kairos Hof video ID
        title="Kairos Hof Story"
      />

      {/* Forms */}
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