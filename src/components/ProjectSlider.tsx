import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Home, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectsWithIcons = products.map(product => ({
    ...product,
    rating: product.id === 1 ? 4.8 : product.id === 2 ? 4.9 : 5.0,
    reviews: product.id === 1 ? 124 : product.id === 2 ? 89 : 156,
    iconComponent: product.icon === "Building" ? Building : product.icon === "Home" ? Home : Shield
  }));

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsWithIcons.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsWithIcons.length) % projectsWithIcons.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProject, 5000);
    return () => clearInterval(interval);
  }, []);

  const project = projectsWithIcons[currentIndex];

  return (
    <div className="relative">
      <Card className="card-luxury p-6 group cursor-pointer overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm opacity-90">{project.specifications.location}</p>
          </div>
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {project.price}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <Button variant="outline" className="group w-full">
          View Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Card>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {projectsWithIcons.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;