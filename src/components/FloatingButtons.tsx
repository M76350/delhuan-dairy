import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  // Animation styles (can also be placed in your CSS file)
  const animationStyles = `
    @keyframes vibrate {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, -2px); }
      40% { transform: translate(2px, -2px); }
      60% { transform: translate(-2px, 2px); }
      80% { transform: translate(2px, 2px); }
      100% { transform: translate(0); }
    }
    .vibrate-infinite {
      animation: vibrate 0.4s linear infinite;
    }
    .ring-shadow {
      box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
      }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* WhatsApp Button - Continuous vibration with ring effect */}
        <Button
          size="lg"
          className={`w-14 h-14 rounded-full vibrate-infinite ring-shadow bg-green-500 hover:bg-green-600 text-white p-0 relative`}
          onClick={() => window.open('https://wa.me/917635065908', '_blank')}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        {/* Call Button - More intense vibration */}
        <Button
          size="lg"
          className={`w-14 h-14 rounded-full vibrate-infinite premium-gradient text-white p-0 relative`}
          onClick={() => window.open('tel:+917635065908', '_self')}
          aria-label="Call Now"
          style={{
            animation: 'vibrate 0.3s linear infinite',
            boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.7)',
            animationName: 'vibrate, pulse',
            animationDuration: '0.3s, 1.5s',
            animationIterationCount: 'infinite',
          }}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
};

export default FloatingButtons;
