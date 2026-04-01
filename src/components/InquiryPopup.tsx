import React from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useClickOutside } from '@/hooks/use-click-outside';
import ContactForm from './ContactForm';

interface InquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryPopup = ({ isOpen, onClose }: InquiryPopupProps) => {
  const popupRef = useClickOutside({ isOpen, onClose });

  // ✅ Correct condition
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose} // ✅ outside click close
    >
      <Card
        ref={popupRef}
        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside
        className="w-full max-w-md mx-auto animate-scale-in overflow-y-auto"
      >
        <CardContent className="p-0 relative">

          {/* ❌ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-md hover:bg-muted transition z-10"
          >
            <X className="h-5 w-5" />
          </button>

          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default InquiryPopup;