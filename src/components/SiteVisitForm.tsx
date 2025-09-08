import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MapPin, User, Target } from "lucide-react";

interface SiteVisitFormProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
}

const SiteVisitForm = ({ isOpen, onClose, productTitle }: SiteVisitFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    locationOfInterest: productTitle || "",
    preferredDate: "",
    preferredTime: "",
    purpose: "",
    buyingTimeline: "",
    additionalNotes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Site Visit Scheduled!",
      description: `Thank you ${formData.name}! We'll contact you shortly to confirm your visit to ${formData.locationOfInterest}.`,
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      locationOfInterest: productTitle || "",
      preferredDate: "",
      preferredTime: "",
      purpose: "",
      buyingTimeline: "",
      additionalNotes: ""
    });
    setIsSubmitting(false);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-lg border border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Schedule Site Visit
          </DialogTitle>
          <DialogDescription>
            Book a personalized tour of our premium properties
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location" className="text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location of Interest *
              </Label>
              <Select value={formData.locationOfInterest} onValueChange={(value) => handleInputChange("locationOfInterest", value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Select a property" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Z-Korting Apartments">Z-Korting Apartments</SelectItem>
                  <SelectItem value="Hof City Luxury Homes">Hof City Luxury Homes</SelectItem>
                  <SelectItem value="Hof Court Premium">Hof Court Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Preferred Date *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                required
                className="bg-background/50"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time" className="text-foreground flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Preferred Time *
              </Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose" className="text-foreground flex items-center gap-2">
              <Target className="h-4 w-4" />
              Purpose of Visit *
            </Label>
            <Select value={formData.purpose} onValueChange={(value) => handleInputChange("purpose", value)}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="investment">Investment Opportunity</SelectItem>
                <SelectItem value="personal-residence">Personal Residence</SelectItem>
                <SelectItem value="rental-property">Rental Property</SelectItem>
                <SelectItem value="research">Research Purpose</SelectItem>
                <SelectItem value="sight-seeing">Sight Seeing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline" className="text-foreground">
              Buying Timeline *
            </Label>
            <Select value={formData.buyingTimeline} onValueChange={(value) => handleInputChange("buyingTimeline", value)}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="When are you looking to buy?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediately">Immediately</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
                <SelectItem value="6-12-months">6-12 months</SelectItem>
                <SelectItem value="research-only">Research only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-foreground">
              Additional Notes (Optional)
            </Label>
            <Textarea
              id="notes"
              placeholder="Any specific requirements or questions?"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
              className="bg-background/50"
              rows={3}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              type="submit" 
              variant="luxury" 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Scheduling..." : "Schedule Visit"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="px-6"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SiteVisitForm;