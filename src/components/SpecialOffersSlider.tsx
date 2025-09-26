
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Gift, Percent, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const SpecialOffersSlider = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    {
      id: 1,
      title: "KairosLove Valentine Special",
      subtitle: "A Season of Giving, A Lifetime of Living", 
      discount: "Up to 70% OFF",
      description: "Win a Dream Home Discount in One of the Biggest Real Estate Promos of the Year!",
      endDate: new Date("2025-03-14T23:59:59"),
      icon: Heart,
      gradient: "from-red-500/20 to-pink-500/20",
      link: "/kairoslove-event",
      buttonText: "Play & Win Now"
    },
    {
      id: 2,
      title: "5 Years Anniversary Sale",
      subtitle: "Biggest Real Estate Deal of the Year",
      discount: "Up to 30% OFF",
      description: "Celebrate our 5-year milestone with unprecedented discounts on all properties and premium land packages.",
      endDate: new Date("2024-12-31T23:59:59"),
      icon: Sparkles,
      gradient: "from-gold-500/20 to-yellow-500/20",
      link: "/anniversary",
      buttonText: "Claim Your Discount"
    },
  ];

  const nextOffer = () => {
    setCurrentOffer((prev) => (prev + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
  };

  useEffect(() => {
    const interval = setInterval(nextOffer, 7000);
    return () => clearInterval(interval);
  }, []);

  const offer = offers[currentOffer];
  const OfferIcon = offer.icon;

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className={`card-luxury p-6 group cursor-pointer bg-gradient-to-br ${offer.gradient} border-primary/20`}>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <OfferIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{offer.title}</h3>
                <p className="text-muted-foreground">{offer.subtitle}</p>
              </div>
            </div>
            
            <div className="text-3xl font-bold text-primary">{offer.discount}</div>
            
            <p className="text-muted-foreground">{offer.description}</p>
            
            <Link to={offer.link}>
              <Button variant="luxury" className="group">
                {offer.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Right Content - Countdown */}
          <div className="flex-shrink-0 text-center">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-foreground mb-2">Offer Ends In:</h4>
              <CountdownTimer targetDate={offer.endDate} />
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            prevOffer();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            nextOffer();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </Card>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentOffer(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentOffer ? 'bg-primary w-6' : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersSlider;
