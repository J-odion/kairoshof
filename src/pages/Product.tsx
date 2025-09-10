import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building, Users, Leaf, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWidgets from "@/components/FloatingWidgets";
import Footer from "@/components/Footer";
import BrochureRequestForm from "@/components/BrochureRequestForm";
import SiteVisitForm from "@/components/SiteVisitForm";
import { products } from "@/data/products";

const Product = () => {
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isSiteVisitFormOpen, setIsSiteVisitFormOpen] = useState(false);

  const productsWithIcons = products.map(product => ({
    ...product,
    iconComponent: product.icon === "Building" ? Building : product.icon === "Home" ? Home : Shield
  }));

  const sustainability = [
    {
      icon: Leaf,
      title: "Eco-Friendly Design",
      description: "All our products incorporate sustainable materials and energy-efficient systems"
    },
    {
      icon: Zap,
      title: "Off-Grid Technology",
      description: "Advanced renewable energy systems for sustainable independent living"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Designed to foster community living and social sustainability"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="top-0">
        <Navigation />
      </div>
      
      {/* Hero Section */}
      <section className="pt-56 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                <span className="block text-foreground">Our</span>
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-bold">
                  Products
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our range of sustainable housing solutions designed to meet diverse needs 
                while maintaining our commitment to luxury and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12">
            {productsWithIcons.map((product, index) => (
              <Card 
                key={product.id} 
                className={`card-luxury overflow-hidden bg-gradient-to-br ${product.gradient} fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <product.iconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-foreground">{product.title}</h2>
                            <p className="text-lg text-muted-foreground">{product.subtitle}</p>
                          </div>
                        </div>
                        {product.highlight && (
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {product.highlight}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="text-2xl font-bold text-primary">{product.price}</div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="luxury" size="lg" className="group" asChild>
                          <Link to={`/products/${product.slug}`}>
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        <Button 
                          variant="elegant" 
                          size="lg"
                          onClick={() => setIsBrochureFormOpen(true)}
                        >
                          Request Brochure
                        </Button>
                      </div>
                    </div>
                    
                    {/* Right Content - Features */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Sustainability at Core</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every product we create is built with sustainability in mind, aligning with 
              SDG 11 for sustainable cities and communities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sustainability.map((item, index) => (
              <Card key={index} className="card-luxury p-6 text-center fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="card-luxury p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Explore our range of sustainable housing solutions and find the perfect fit for your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="luxury" 
                size="lg" 
                className="group"
                onClick={() => setIsSiteVisitFormOpen(true)}
              >
                Schedule Site Visit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="elegant" 
                size="lg"
                onClick={() => setIsBrochureFormOpen(true)}
              >
                Download Brochure
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />

      {/* Forms */}
      <BrochureRequestForm 
        isOpen={isBrochureFormOpen}
        onClose={() => setIsBrochureFormOpen(false)}
      />
      
      <SiteVisitForm 
        isOpen={isSiteVisitFormOpen}
        onClose={() => setIsSiteVisitFormOpen(false)}
      />
    </div>
  );
};

export default Product;