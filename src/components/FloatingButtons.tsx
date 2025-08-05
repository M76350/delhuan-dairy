import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-green-500 hover:bg-green-600 text-white p-0"
        onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Call Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 premium-gradient text-white p-0"
        onClick={() => window.open('tel:+91XXXXXXXXXX', '_self')}
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingButtons;