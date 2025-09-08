
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import CountdownTimer from "@/components/CountdownTimer";
import VideoOverlay from "@/components/VideoOverlay";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  ArrowRight, 
  Gift, 
  Percent, 
  Award, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Heart,
  Sparkles
} from "lucide-react";

const Anniversary = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
    setIsVideoOpen(true);
  };

  const saleEndDate = new Date("2024-12-31T23:59:59");

  const highlights = [
    {
      title: "5 Years of Excellence",
      description: "Celebrating half a decade of building dreams and sustainable communities",
      icon: Award,
      color: "from-gold-500/20 to-yellow-500/20"
    },
    {
      title: "1000+ Families Housed",
      description: "Proud to have provided homes for over 1,000 families across Nigeria",
      icon: Heart,
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "50+ Awards Won",
      description: "Recognition for our commitment to sustainable development and excellence",
      icon: Star,
      color: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  const salesOffers = [
    {
      property: "Hof City Luxury Homes",
      discount: "30% OFF",
      originalPrice: "₦40,000,000",
      salePrice: "₦28,000,000",
      features: ["3-5 Bedrooms", "Smart Home", "Solar Power", "Gated Community"]
    },
    {
      property: "Hof Court Premium",
      discount: "25% OFF", 
      originalPrice: "₦65,000,000",
      salePrice: "₦48,750,000",
      features: ["4-6 Bedrooms", "Ultra Luxury", "Concierge", "Private Gardens"]
    },
    {
      property: "Z-Korting Apartments",
      discount: "20% OFF",
      originalPrice: "₦15,000,000", 
      salePrice: "₦12,000,000",
      features: ["1-3 Bedrooms", "Flexible Plans", "Modern Amenities", "24/7 Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-gold-500/10 text-gold-600 border-gold-500/20 text-lg px-6 py-2">
              <Sparkles className="mr-2 h-5 w-5" />
              5 Years Anniversary Celebration
            </Badge>
            
            <h1 className="text-6xl lg:text-8xl font-light leading-tight">
              <span className="block text-primary font-bold">5 Years</span>
              <span className="block">of Building Dreams</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join us in celebrating five incredible years of sustainable development, 
              community building, and making homeownership dreams come true across Nigeria.
            </p>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Anniversary Sale Ends In:</h3>
              <CountdownTimer targetDate={saleEndDate} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="luxury" 
                size="lg"
                onClick={() => openVideo("dQw4w9WgXcQ")}
                className="group text-lg px-8 py-4"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Our Journey
              </Button>
              <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
                View Sale Properties
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Our <span className="font-bold text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five years of milestones, achievements, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className={`card-luxury bg-gradient-to-br ${highlight.color} p-8 text-center`}>
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Anniversary Sale Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-red-500/10 text-red-600 border-red-500/20 mb-4">
              Limited Time Offer
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Anniversary <span className="font-bold text-primary">Sale</span>
            </h2>
            <p className="text-2xl font-semibold text-red-600 mb-4">Up to 30% OFF All Properties</p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrate with us and enjoy unprecedented discounts on our premium properties and land packages
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {salesOffers.map((offer, index) => (
              <Card key={index} className="card-luxury overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white font-semibold">
                      {offer.discount}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{offer.property}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground line-through">{offer.originalPrice}</p>
                      <p className="text-2xl font-bold text-primary">{offer.salePrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-green-600">Save</p>
                      <p className="text-lg font-bold text-green-600">
                        ₦{(parseInt(offer.originalPrice.replace(/[₦,]/g, '')) - parseInt(offer.salePrice.replace(/[₦,]/g, ''))).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="luxury" className="w-full group">
                    Claim This Offer
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Our <span className="font-bold text-primary">Story</span> in Motion
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience our journey through videos and images from the past five years
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Thumbnails */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card 
                key={index} 
                className="card-luxury overflow-hidden cursor-pointer group"
                onClick={() => openVideo("dQw4w9WgXcQ")}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Journey Highlight {index}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="card-luxury bg-gradient-to-br from-primary/5 to-accent/5 p-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light">
                Don't Miss Our <span className="font-bold text-primary">Anniversary Sale</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Limited time offer ends December 31st, 2024. Contact us today to secure your dream property.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  <span>02013309460</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <span>info@kairoshof.com</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" className="group">
                  Schedule Site Visit
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="elegant" size="lg" className="group">
                  Request Brochure
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
      
      <VideoOverlay
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={selectedVideo}
        title="Kairos Hof 5 Year Journey"
      />
    </div>
  );
};

export default Anniversary;
