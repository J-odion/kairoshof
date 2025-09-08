import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingWidgets = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "2348034309460"; // Kairos Hof WhatsApp number
    const message = "Hello! I'm interested in learning more about Kairos Hof properties.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Widget */}
      <Button
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Back to Top */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          variant="elegant"
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
          size="icon"
        >
          <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </Button>
      )}
    </div>
  );
};

export default FloatingWidgets;