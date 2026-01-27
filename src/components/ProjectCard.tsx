import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Calendar, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  price: string;
  description: string;
  status: "available" | "coming-soon" | "sold-out";
  features: string[];
  image?: string;
  className?: string;
  slug?: string;
}

const ProjectCard = ({ 
  title, 
  location, 
  price, 
  description, 
  status, 
  features,
  image,
  slug,
  className = ""
}: ProjectCardProps) => {
  const statusColors = {
    "available": "bg-green-500/10 text-green-600 border-green-500/20",
    "coming-soon": "bg-blue-500/10 text-blue-600 border-blue-500/20",
    "sold-out": "bg-red-500/10 text-red-600 border-red-500/20"
  };

  const statusText = {
    "available": "Available Now",
    "coming-soon": "Coming Soon",
    "sold-out": "Sold Out"
  };

  return (
    <Card className={`card-luxury group overflow-hidden ${className}`}>
      {/* Image Section */}
      <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl text-primary/30 font-light">{title.charAt(0)}</div>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`${statusColors[status]} border`}>
            {statusText[status]}
          </Badge>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Content */}
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex flex-wrap gap-2 mb-3">
            {features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button 
              variant="luxury" 
              size="sm" 
              className="flex-1 group"
              disabled={status === "sold-out"}
            >
              {status === "available" ? "View Details" : 
               status === "coming-soon" ? "Get Notified" : "Sold Out"}
              {status !== "sold-out" && (
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>Family Homes</span>
          </div>
          <div className="text-primary font-medium">
            SDG 11 Aligned
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;