import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";

const AnniversaryBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className=" left-0 right-0 z-40 bg-gradient-to-r bg-primary via-gold-600 to-gold-500 text-white overflow-hidden">
      <div className="relative h-12">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">🎉 5th Anniversary Sale - Up to 30% OFF All Properties! 🎉</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✨ Limited Time Offer - September to December 2024 ✨</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🏠🏠 Dream Home Deals - Exclusive Savings on Premium Properties</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">🎉 5th Anniversary Sale - Up to 30% OFF All Properties! 🎉</span>
            </div>
          </div>
        </div>
        
        <div className="absolute right-4 top-1/2 bg-black transform -translate-y-1/2 flex items-center space-x-2">
          <Link to="/anniversary">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8">
              Learn More
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-white/20 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryBanner;