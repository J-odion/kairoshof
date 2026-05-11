import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Globe, 
  CreditCard, 
  Heart, 
  Users, 
  Home, 
  Search,
  Signature,
  FileText,
  Fingerprint,
  Image as ImageIcon
} from "lucide-react";

const ClientRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    surname: "",
    firstname: "",
    otherName: "",
    phone: "",
    email: "",
    address: "",
    dob: "",
    nationality: "",
    idType: "",
    idNumber: "",
    nin: "",
    maritalStatus: "",
    nokName: "",
    nokPhone: "",
    nokEmail: "",
    nokAddress: "",
    locationPreference: "",
    propertyType: "",
    source: "",
    sourceName: "",
    date: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.base44.com/api/apps/683ffe0b40d860bd7d8d2c79/functions/websiteLeadWebhook", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          secret: import.meta.env.VITE_WEBHOOK_SECRET || "YOUR_WEBHOOK_SECRET",
          form_type: "client_registration",
          ...formData
        })
      });

      if (response.ok) {
        toast({
          title: "Registration Submitted!",
          description: "Your client registration has been received and is being processed.",
        });
        // Reset form
        setFormData({
          surname: "",
          firstname: "",
          otherName: "",
          phone: "",
          email: "",
          address: "",
          dob: "",
          nationality: "",
          idType: "",
          idNumber: "",
          nin: "",
          maritalStatus: "",
          nokName: "",
          nokPhone: "",
          nokEmail: "",
          nokAddress: "",
          locationPreference: "",
          propertyType: "",
          source: "",
          sourceName: "",
          date: new Date().toISOString().split('T')[0]
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-40 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl lg:text-5xl font-light leading-tight">
              Client <span className="font-bold text-primary">Registration</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Official registration for Kairos Hof property acquisition.
            </p>
          </div>

          <Card className="card-luxury p-8 shadow-2xl border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 border-b pb-2 text-primary">
                  <User className="h-5 w-5" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="surname">Surname</Label>
                    <Input id="surname" required value={formData.surname} onChange={(e) => handleInputChange("surname", e.target.value)} placeholder="Enter surname" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input id="firstname" required value={formData.firstname} onChange={(e) => handleInputChange("firstname", e.target.value)} placeholder="Enter first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otherName">Other Name(s)</Label>
                    <Input id="otherName" value={formData.otherName} onChange={(e) => handleInputChange("otherName", e.target.value)} placeholder="Optional" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" required value={formData.dob} onChange={(e) => handleInputChange("dob", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="e.g. 08012345678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="e.g. name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input id="nationality" required value={formData.nationality} onChange={(e) => handleInputChange("nationality", e.target.value)} placeholder="e.g. Nigerian" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maritalStatus">Marital Status</Label>
                    <Select onValueChange={(value) => handleInputChange("maritalStatus", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Residential Address</Label>
                  <Textarea id="address" required value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} placeholder="Full street address" />
                </div>
              </div>

              {/* Enhanced Identification Section */}
              <div className="space-y-6 bg-primary/5 p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold flex items-center gap-2 border-b border-primary/20 pb-2 text-primary">
                  <CreditCard className="h-5 w-5" />
                  Identification & KYC
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="idType">Means of Identification</Label>
                    <Select onValueChange={(value) => handleInputChange("idType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ID type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drivers_license">Driver's License</SelectItem>
                        <SelectItem value="international_passport">International Passport</SelectItem>
                        <SelectItem value="voters_card">Voter's ID Card</SelectItem>
                        <SelectItem value="national_id">National ID Card</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idNumber">Identification Number</Label>
                    <Input id="idNumber" required value={formData.idNumber} onChange={(e) => handleInputChange("idNumber", e.target.value)} placeholder="Enter ID Number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nin">NIN (National Identification Number)</Label>
                    <div className="relative">
                      <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="nin" required className="pl-10" value={formData.nin} onChange={(e) => handleInputChange("nin", e.target.value)} placeholder="Enter 11-digit NIN" maxLength={11} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idImage">Upload Identification (Front View)</Label>
                    <Input id="idImage" type="file" accept="image/*" required className="cursor-pointer" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="utilityBill">Proof of Address (Utility Bill)</Label>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <Input id="utilityBill" type="file" accept="image/*,.pdf" required className="cursor-pointer" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Recent utility bill (Electricity, Water, etc.) not older than 3 months.</p>
                  </div>
                </div>
              </div>

              {/* Next of Kin */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 border-b pb-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Next of Kin Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nokName">Full Name</Label>
                    <Input id="nokName" required value={formData.nokName} onChange={(e) => handleInputChange("nokName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nokPhone">Phone Number</Label>
                    <Input id="nokPhone" required value={formData.nokPhone} onChange={(e) => handleInputChange("nokPhone", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nokEmail">Email Address</Label>
                    <Input id="nokEmail" type="email" value={formData.nokEmail} onChange={(e) => handleInputChange("nokEmail", e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nokAddress">Address</Label>
                  <Textarea id="nokAddress" value={formData.nokAddress} onChange={(e) => handleInputChange("nokAddress", e.target.value)} />
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 border-b pb-2">
                  <Home className="h-5 w-5 text-primary" />
                  Project Selection
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="locationPreference">Location Preference</Label>
                    <Select onValueChange={(value) => handleInputChange("locationPreference", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idu">Idu</SelectItem>
                        <SelectItem value="karimo">Karimo</SelectItem>
                        <SelectItem value="jahi">Jahi</SelectItem>
                        <SelectItem value="jabi">Jabi</SelectItem>
                        <SelectItem value="karasana">Karasana</SelectItem>
                        <SelectItem value="karshi">Karshi</SelectItem>
                        <SelectItem value="life_camp">Life Camp</SelectItem>
                        <SelectItem value="guzape">Guzape</SelectItem>
                        <SelectItem value="kafe">Kafe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select onValueChange={(value) => handleInputChange("propertyType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="land">Land</SelectItem>
                        <SelectItem value="shell">Shell (Carcase)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Signature & Date */}
              <div className="space-y-6 border-t pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="signature" className="flex items-center gap-2">
                      <Signature className="h-4 w-4 text-primary" />
                      Applicant Signature (Upload Image)
                    </Label>
                    <Input id="signature" type="file" accept="image/*" className="cursor-pointer" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Registration Date</Label>
                    <Input id="date" type="date" value={formData.date} readOnly className="bg-muted" />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button type="submit" variant="luxury" size="lg" className="w-full text-lg h-14" disabled={isSubmitting}>
                  {isSubmitting ? "Processing Registration..." : "Complete Registration"}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  By completing this registration, you agree to our terms and conditions and privacy policy.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default ClientRegistration;
