import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Play, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Home,
  Star,
  CheckCircle
} from "lucide-react";
import { products } from "@/data/products";
import BrochureRequestForm from "@/components/BrochureRequestForm";
import SiteVisitForm from "@/components/SiteVisitForm";
import VideoOverlay from "@/components/VideoOverlay";
import FloatingWidgets from "@/components/FloatingWidgets";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { slug } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [isSiteVisitFormOpen, setIsSiteVisitFormOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="fade-in-up">
                {product.highlight && (
                  <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                    {product.highlight}
                  </Badge>
                )}
                <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                  <span className="block text-foreground">{product.title}</span>
                  <span className="block text-lg text-muted-foreground font-normal mt-2">
                    {product.subtitle}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>
              
              <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>
                
                <div className="flex flex-col sm:flex-row gap-4">
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
                    Request Brochure
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image Gallery */}
            <div className="fade-in-right">
              <Card className="card-luxury overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={product.gallery[activeImageIndex]} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <Button 
                    variant="luxury" 
                    size="lg" 
                    className="absolute inset-0 m-auto w-auto h-auto rounded-full"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="p-4 grid grid-cols-4 gap-2">
                  {product.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Specifications Card */}
            <Card className="card-luxury p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Specifications</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Bed className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Bedrooms:</span>
                  <span className="font-medium text-foreground">{product.specifications.bedrooms}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Bathrooms:</span>
                  <span className="font-medium text-foreground">{product.specifications.bathrooms}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Square className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Area:</span>
                  <span className="font-medium text-foreground">{product.specifications.area}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium text-foreground">{product.specifications.type}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium text-foreground">{product.specifications.location}</span>
                </div>
              </div>
            </Card>

            {/* Features Card */}
            <Card className="card-luxury p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location Details */}
            <Card className="card-luxury p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Location Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground text-sm">{product.locationDetails.address}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Nearby Landmarks</h4>
                  <ul className="space-y-1">
                    {product.locationDetails.nearbyLandmarks.map((landmark, index) => (
                      <li key={index} className="text-muted-foreground text-sm flex items-center gap-2">
                        <Star className="h-3 w-3 text-primary flex-shrink-0" />
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Premium Amenities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience luxury living with world-class amenities designed for your comfort and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.amenities.map((amenity, index) => (
              <Card 
                key={index} 
                className="card-luxury p-4 text-center fade-in-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground font-medium">{amenity}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Floor Plans</h2>
            <p className="text-xl text-muted-foreground">
              Explore our thoughtfully designed floor plans that maximize space and functionality.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {product.floorPlans.map((plan, index) => (
              <Card key={index} className="card-luxury overflow-hidden fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-square bg-muted">
                  <img 
                    src={plan} 
                    alt={`Floor Plan ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">Plan {index + 1}</h3>
                  <p className="text-muted-foreground text-sm">Architectural blueprint</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="card-luxury p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Make This Your Home?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Don't miss this opportunity to own a piece of luxury sustainable living. Contact us today!
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

      {/* Modals */}
      <BrochureRequestForm 
        isOpen={isBrochureFormOpen}
        onClose={() => setIsBrochureFormOpen(false)}
        productTitle={product.title}
      />
      
      <SiteVisitForm 
        isOpen={isSiteVisitFormOpen}
        onClose={() => setIsSiteVisitFormOpen(false)}
        productTitle={product.title}
      />

      <VideoOverlay 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={product.videoId}
        title={`${product.title} Virtual Tour`}
      />
    </div>
  );
};

export default ProductDetail;