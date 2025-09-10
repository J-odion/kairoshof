import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building, Users, Award, Target, Eye, Heart } from "lucide-react";
import FloatingWidgets from "@/components/FloatingWidgets";
import VideoOverlay from "@/components/VideoOverlay";
import Footer from "@/components/Footer";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Vision",
      description: "To set the standards for ideal communal living and disrupt the housing sector with sustainable solutions."
    },
    {
      icon: Heart,
      title: "Mission", 
      description: "To build sustainable communities that are people-centred by institutionalizing sustainability, accountability and transparency within the housing sector."
    }
  ];

  const stats = [
    { icon: Building, value: "100+", label: "Hectares Developed" },
    { icon: Users, value: "3000+", label: "Families Housed" },
    { icon: Award, value: "5+", label: "Awards Won" },
    { icon: Eye, value: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-56 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                <span className="block text-foreground">Our</span>
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-bold">
                  Story
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A renowned property development company dedicated to providing exceptional 
                lifestyle solutions that prioritize sustainability and align with the SDGs for 2030.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="fade-in-up mb-16" style={{ animationDelay: '0.2s' }}>
            <Card className="card-luxury overflow-hidden max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    variant="luxury" 
                    size="lg" 
                    className="rounded-full"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    Watch Our Story
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <Card key={index} className="card-luxury p-8 fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Who We Are</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-luxury p-8 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Kairos Hof Consultants Limited is a renowned property development company based in the vibrant city of Abuja, Nigeria. 
                Our esteemed organization is dedicated to providing exceptional lifestyle solutions that prioritize sustainability and 
                align with the ambitious Sustainable Development Goals (SDGs) for the year 2030.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With our unwavering commitment to innovation, we continuously embark on transformative real estate projects embodying 
                our vision of a brighter, more sustainable future. By harmoniously blending cutting-edge design and eco-conscious practices, 
                we strive to create living spaces that elevate your quality of life and contribute to the global mission of creating a 
                better world for future generations.
              </p>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="card-luxury p-6 text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">What We Do</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-luxury p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Embracing the spirit of innovation, we construct sustainable communities and residential spaces in Nigeria. 
                We incorporate eco-friendly features and energy-efficient designs that surpass conventional norms, providing 
                our esteemed clientele with an unparalleled customer-centric experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each and every one of our meticulously crafted projects embodies this philosophy, seamlessly integrating 
                eco-friendly practices to create harmonious living spaces. Through our visionary approach, we harness the 
                power of state-of-the-art technology and avant-garde architectural designs to ensure that our developments 
                operate entirely off-grid, minimizing their ecological footprint and maximizing energy efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
      
      {/* Video Overlay */}
      <VideoOverlay 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="dQw4w9WgXcQ" // Replace with actual Kairos Hof video ID
        title="Our Story - Kairos Hof"
      />
    </div>
  );
};

export default About;