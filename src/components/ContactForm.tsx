import { Card } from "@/components/ui/card";

interface ContactFormProps {
  type?: "general" | "property-inquiry" | "newsletter";
  title?: string;
  description?: string;
}

const ContactForm = ({
  title = "Get in Touch",
  description = "Let's discuss your dream home"
}: ContactFormProps) => {
  return (
    <Card className="card-luxury overflow-hidden">
      <div className="p-8 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="w-full h-[700px] rounded-xl overflow-hidden">
          <iframe
            src="https://avera-deal-flow.base44.app/forms/contact-us"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full"
            title="Contact Us Form"
          ></iframe>
        </div>
      </div>
    </Card>
  );
};

export default ContactForm;
