"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Building, ChevronsLeftRightEllipsis, Trees, LandPlotIcon, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectSlider from "./ProjectSlider";
import BrochureRequestForm from "./BrochureRequestForm";
import SiteVisitForm from "./SiteVisitForm";
import VideoOverlay from "./VideoOverlay";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isSiteVisitFormOpen, setIsSiteVisitFormOpen] = useState(false);

  const stats = [
    { icon: Building, value: "8+", label: "Project Site in Abuja" },
    { icon: Workflow, value: "8000+", label: "Jobs Oppourtunities to be created" },
    { icon: Users, value: "5000+", label: "Family to be Sheltered" },
    { icon: LandPlotIcon, value: "800", label: "Hectares combined developments in the next 7 years" },
    { icon: Trees, value: "100,000", label: "Trees to be planted in Idu HOF City" },
    { icon: ChevronsLeftRightEllipsis, value: "45%", label: "Female Representation" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-10">
            <h1 className="text-6xl lg:text-7xl font-light leading-tight">
              <span className="block text-foreground">The Art of</span>
              <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-bold">
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

          {/* Right content */}
          <div className="relative">
            <ProjectSlider />
          </div>
        </div>

        {/* Stats */}
        <div className="w-full flex justify-center mx-auto pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4  gap-6 w-full max-w-5xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-center rounded-2xl p-6 shadow-sm"
              >
                <div className="p-3 bg-primary/10 rounded-xl mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
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
