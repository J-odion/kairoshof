import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  type?: "general" | "property-inquiry" | "newsletter";
  title?: string;
  description?: string;
}

const ContactForm = ({ 
  type = "general", 
  title = "Get in Touch",
  description = "Let's discuss your dream home" 
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectInterest: "",
    budget: "",
    newsletter: false,
    contactMethod: "email" // default is email
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const projects = [
    "Hof City - IDU, Abuja",
    "Hof Court - Karmo, Jahi, Kafe",
    "Hof Community - Coming Soon",
    "Hof County - Coming Soon",
    "General Inquiry"
  ];

  const budgetRanges = [
    "₦20M - ₦40M",
    "₦40M - ₦60M", 
    "₦60M - ₦80M",
    "₦80M - ₦100M",
    "₦100M+"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.contactMethod === "whatsapp") {
      // Save form to database
      await fetch("/api/saveform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Construct WhatsApp message
      const message = `
Hello, my name is ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.projectInterest || "N/A"}
Budget: ${formData.budget || "N/A"}

Message:
${formData.message}
      `.trim();

      // Open WhatsApp
      const phone = "2349133939340"; // Nigeria number format without leading 0
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");

      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Redirecting to WhatsApp",
        description: "We’ve also saved your inquiry in our system.",
      });
    } else {
      // Email API (normal behavior)
      await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    }

    // Reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        projectInterest: "",
        budget: "",
        newsletter: false,
        contactMethod: "email",
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="card-luxury text-center p-8">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
          <p className="text-muted-foreground">
            Your message has been processed. If WhatsApp was selected, a chat window should be open now.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="card-luxury">
      <div className="p-8 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                required
                className="h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+234 xxx xxx xxxx"
              className="h-12"
            />
          </div>

          {/* Property-specific fields */}
          {type === "property-inquiry" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project">Project Interest</Label>
                <Select value={formData.projectInterest} onValueChange={(value) => handleInputChange("projectInterest", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project} value={project}>
                        {project}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your requirements or questions..."
              required
              rows={4}
              className="resize-none"
            />
          </div>

          {/* Newsletter subscription */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our newsletter for updates on new projects and exclusive offers
            </Label>
          </div>

          {/* Contact method selection */}
          <div className="space-y-2">
            <Label htmlFor="contactMethod">Preferred Contact Method</Label>
            <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange("contactMethod", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Choose contact method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">
                  <Mail className="h-4 w-4 inline mr-2" /> Email
                </SelectItem>
                <SelectItem value="whatsapp">
                  <MessageSquare className="h-4 w-4 inline mr-2" /> WhatsApp
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            variant="luxury"
            className="w-full h-12"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                Sending...
              </>
            ) : (
              <>
                {formData.contactMethod === "whatsapp" ? "Send via WhatsApp" : "Send via Email"}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {/* Contact Information */}
        <div className="border-t border-border/50 pt-6">
          <div className="text-center space-y-4">
            <h4 className="font-semibold text-foreground">Or contact us directly</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>02013309460</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>info@kairoshof.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactForm;
