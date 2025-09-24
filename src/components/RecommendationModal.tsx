import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientName: string;
  imageSrc: string;
}

export const RecommendationModal = ({ isOpen, onClose, clientName, imageSrc }: RecommendationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-mocha">
              Letter of Recommendation - {clientName}
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Scrollable content */}
        <div className="p-6 overflow-auto max-h-[calc(90vh-80px)]">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img 
              src={imageSrc} 
              alt={`Letter of recommendation from ${clientName}`}
              className="w-full h-auto rounded border shadow-sm"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
import { useRef, useState } from "react";