import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock, ExternalLink } from "lucide-react";
import FloatingWidgets from "@/components/FloatingWidgets";
import Footer from "@/components/Footer";

const Contact = () => {
  const offices = [
    {
      country: "Nigeria",
      address: "Suite 409 Nawa Complex, Jahi, Abuja.",
      email: "hello@kairoshof.com",
      phone: "02013309460",
      hours: "Monday – Friday 9:00 AM – 5:00 PM"
    },
    {
      country: "Netherlands",
      address: "De Ruijterstraat 38, 2518 AS, Den Haag, Netherlands.",
      email: "hello@kairoshof.com",
      phone: "+316 1309 8978",
      hours: "Monday – Friday 9:00 AM – 5:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                <span className="block text-foreground">Get In</span>
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-bold">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Helping you find the property of your dreams. Creating real value in property and places.
              </p>
            </div>
            
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="luxury" size="lg" className="group">
                <ExternalLink className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="fade-in-up">
                <h2 className="text-3xl font-bold text-foreground mb-8">Our Offices</h2>
              </div>
              
              {offices.map((office, index) => (
                <Card key={index} className="card-luxury p-6 fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="text-2xl font-bold text-foreground mb-6">{office.country}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                        <p className="text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <a 
                          href={`mailto:${office.email}`}
                          className="text-primary hover:text-primary-glow transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <a 
                          href={`tel:${office.phone}`}
                          className="text-primary hover:text-primary-glow transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                        <p className="text-muted-foreground">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Contact Form */}
            <div className="fade-in-right">
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default Contact;