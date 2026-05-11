import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface SiteVisitFormProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
}

const SiteVisitForm = ({ isOpen, onClose, productTitle }: SiteVisitFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background p-0 overflow-hidden border-none shadow-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Schedule Site Visit
          </DialogTitle>
          <DialogDescription>
            {productTitle ? `Book a personalized tour of ${productTitle}` : "Book a personalized tour of our premium properties"}
          </DialogDescription>
        </DialogHeader>

        <div className="w-full h-[700px]">
          <iframe
            src="https://preview--avera-deal-flow.base44.app/forms/site-visit"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full"
            title="Site Visit Form"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SiteVisitForm;