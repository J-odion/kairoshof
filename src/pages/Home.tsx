import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import FloatingWidgets from "@/components/FloatingWidgets";
import SpecialOffersSlider from "@/components/SpecialOffersSlider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Leaf, Users, Globe, Heart, Star, MessageSquare, Sparkles, Calendar, Trophy, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import TestimonialCard from "@/components/TestimonialCard";

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards(prev => prev < 4 ? prev + 1 : prev);
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Hof City",
      location: "IDU - ABUJA",
      price: "Price on request",
      description: "Luxury sustainable residential development in Abuja's prime location with modern amenities and eco-friendly features.",
      status: "available" as const,
      features: ["3-5 Bedrooms", "Smart Home", "Solar Power", "24/7 Security", "Swimming Pool", "Gym"],
      image: "/8.jpg",
      slug: "hof-city-luxury-homes",
    },
    {
      title: "Hof Court",
      location: "KARMO, JAHI, KAFE",
      price: "Price on request",
      description: "Premium family homes designed with sustainable living principles and community-focused amenities.",
      status: "available" as const,
      features: ["2-4 Bedrooms", "Green Spaces", "Playground", "Community Center", "Parking", "Gardens"],
      image: "/9.jpg",
      slug: "hof-court-premium",
    },
    {
      title: "Hof Community",
      location: "COMING SOON",
      price: "PRICE ON REQUEST",
      description: "An integrated community development featuring residential, commercial, and recreational facilities.",
      status: "coming-soon" as const,
      features: ["Mixed Development", "Shopping Center", "Schools", "Hospital", "Parks", "Transport Hub"],
      image: "/10.jpg",
      slug: "hof-court-premium",
    },
    {
      title: "Hof County",
      location: "Karimo 3",
      price: "PRICE ON REQUEST",
      description: "Exclusive luxury estates with premium finishes and world-class amenities for discerning families.",
      status: "coming-soon" as const,
      features: ["Luxury Villas", "Golf Course", "Spa", "Fine Dining", "Concierge", "Private Security"],
      image: "/13.jpg",
      slug: "hof-court-premium",
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Every project aligns with SDG 11 for sustainable cities and communities"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building spaces that foster relationships and strengthen family bonds"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning designs and construction quality you can trust"
    },
    {
      icon: Heart,
      title: "Wellbeing",
      description: "Creating environments that promote health and happiness"
    }
  ];

  const testimonials = [
    {
      name: "Mrs. Lilian",
      role: "Hof City Resident",
      rating: 5,
      audio: "/audios/Lillianreview.wav"
    },
    {
      name: "Mr. Adams",
      role: "Hof Court Owner",
      rating: 5,
      audio: "/audios/Adamsreview.wav"
    },
    // {
    //   name: "Mr. John Okwu",
    //   role: "Property Investor",
    //   rating: 5,
    //   audio: "/audios/3.mp3"
    // },

  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className=" pt-[50px]">
        <Hero />
      </div>

      {/* 5 Years Anniversary Section */}
      <section className="py-20 bg-gradient-to-br from-gold-500/5 via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-gold-500/10 text-gold-600 border-gold-500/20 mb-4">
              <Sparkles className="mr-2 h-4 w-4" />
              5 Years Anniversary Celebration
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Celebrating <span className="font-bold text-primary">Five Years</span> of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Half a decade of building sustainable communities, fostering relationships,
              and making homeownership dreams come true across Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-luxury p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Families Housed</div>
                </Card>
                <Card className="card-luxury p-6 text-center bg-gradient-to-br from-green-500/5 to-emerald-500/5">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </Card>
                <Card className="card-luxury p-6 text-center bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="card-luxury p-6 text-center bg-gradient-to-br from-purple-500/5 to-violet-500/5">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Sustainable</div>
                </Card>
              </div>

              <div className="flex w-fullflex-col sm:flex-row gap-4">
                <Link to="/anniversary" className="">
                  <Button variant="luxury" size="block" className="w-full group ">
                    <Trophy className="mr-2 h-5 w-5" />
                    Anniversary Sale
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="card-luxury p-8 bg-gradient-to-br from-gold-500/10 to-yellow-500/10">
              <div className="space-y-6">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-gold-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground">2019 - 2024</h3>
                  <p className="text-muted-foreground">Building Dreams, Creating Communities</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Sustainable Homes Built</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-muted rounded-full mr-2">
                        <div className="w-20 h-2 bg-gold-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">1000+</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-muted rounded-full mr-2">
                        <div className="w-23 h-2 bg-gold-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Environmental Impact</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-muted rounded-full mr-2">
                        <div className="w-22 h-2 bg-gold-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-light">
              Our <span className="font-bold text-primary">Developments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our portfolio of sustainable residential developments designed
              to create lasting value for families and communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${index < visibleCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="elegant" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  DREAM.DESIGN.BUILD
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-light leading-tight">
                  Building <span className="font-bold text-primary">Sustainable</span> Futures
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Kairos Hof is an esteemed property development company that builds sustainable
                  residential housing options for families. Our core focus lies in providing
                  visionary real estate solutions that harmoniously align with the Sustainable
                  Development Goals 11 (SDGs).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="p-4 bg-card rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300">
                      <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="luxury" size="lg" className="group">
                <Link to="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
              {/* Image */}
              <img
                src="/Sustainable_Development_Goals.png"
                alt="SDG 11 Aligned"
                className="w-full object-cover"
              />

              {/* Card Content (transparent background, inherits wrapper bg) */}
              <div className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground">SDG 11 Aligned</h3>
                    <p className="text-muted-foreground">Sustainable Cities and Communities</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Renewable Energy</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-muted rounded-full mr-2">
                          <div className="w-20 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Green Spaces</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-muted rounded-full mr-2">
                          <div className="w-22 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Water Conservation</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-muted rounded-full mr-2">
                          <div className="w-18 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-light">
              What Our <span className="font-bold text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from families who have made Kairos Hof properties their home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Slider Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
              Limited Time Offers
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light">
              Special <span className="font-bold text-primary">Promotions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't miss out on our exclusive offers and seasonal promotions.
              Your dream home awaits with incredible savings and benefits.
            </p>
          </div>

          <SpecialOffersSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-light">
              Start Your <span className="font-bold text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to find your dream home? Let's discuss your requirements.
            </p>
          </div>

          <ContactForm
            type="property-inquiry"
            title="Property Inquiry"
            description="Tell us about your dream home and we'll help make it a reality"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                Kairos<span className="text-primary">Hof</span>
              </div>
              <p className="text-accent-foreground/80">
                Building sustainable residential housing options for families across Nigeria.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Projects</h3>
              <div className="space-y-2 text-sm text-accent-foreground/80">
                <div>Hof City</div>
                <div>Hof Court</div>
                <div>Hof Community</div>
                <div>Hof County</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm text-accent-foreground/80">
                <div>About Us</div>
                <div>News & Insights</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Connect</h3>
              <div className="space-y-2 text-sm text-accent-foreground/80">
                <div>07074742538</div>
                <div>07074742522</div>
                <div>info@kairoshof.com</div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white-foreground text-sm">
                    Suit 409, Nawa complex, jahi, Abuja, Nigeria
                  </p>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white-foreground text-sm">
                    De Ruijterstrait, 38, 2518 AS Den Haag, The Netherlands
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm text-accent-foreground/60">
            <p>&copy; 2025 Kairos Hof. All rights reserved. Building sustainable futures.</p>
          </div>
        </div>
      </footer>

      <FloatingWidgets />
    </div>
  );
};

export default Home;
