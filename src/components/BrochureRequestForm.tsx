import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mail } from "lucide-react";

interface BrochureRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
}

const BrochureRequestForm = ({ isOpen, onClose, productTitle }: BrochureRequestFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background p-0 overflow-hidden border-none shadow-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            Request Brochure
          </DialogTitle>
          <DialogDescription>
            {productTitle ? `Get detailed information about ${productTitle}` : "Get detailed information about our properties"}
          </DialogDescription>
        </DialogHeader>
        
        <div className="w-full h-[700px]">
          <iframe
            src="https://avera-deal-flow.base44.app/forms/brochure-request"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full"
            title="Brochure Request Form"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureRequestForm;