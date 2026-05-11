import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
  title?: string;
}

const VideoOverlay = ({ 
  isOpen, 
  onClose, 
  videoId,
  title = "Our Story" 
}: VideoOverlayProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-background/95 backdrop-blur-lg border border-border/50">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Watch our company story video</DialogDescription>
        </DialogHeader>
        
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-12 right-0 z-10 hover:bg-destructive/20 hover:text-destructive"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <div className="aspect-video rounded-xl overflow-hidden bg-muted">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoOverlay;