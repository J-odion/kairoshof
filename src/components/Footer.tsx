import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  const products = [
    { label: "Z-Korting Apartments", href: "/products/z-korting-apartments" },
    { label: "Hof City Luxury Homes", href: "/products/hof-city-luxury-homes" },
    { label: "Hof Court Premium", href: "/products/hof-court-premium" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/kairoshof", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/kairoshof", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/kairoshof/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/kairos-hof-consultants", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-muted/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Kairos Hof</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating extraordinary residential environments that harmoniously align with your dreams and the future of our planet.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  Suit 409, Nawa complex, jahi, Abuja, Nigeria
                </p>
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  De Ruijterstrait, 38, 2518 AS Den Haag, The Netherlands
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+234 707 474 2522</p>
                <p className="text-muted-foreground text-sm">+234 707 474 2538</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">info@kairoshof.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link 
                    to={product.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Kairos Hof Consultants Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;