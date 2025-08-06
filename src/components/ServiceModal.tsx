import React from 'react';
import { X, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    bookingInfo: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const handleBookService = () => {
    const message = `🔥 *Premium Service Booking*

🏥 *Service:* ${service?.title}
📋 *Details:* ${service?.description}

👤 *Customer:* [Your Name]
📱 *Contact:* [Your Number]
📍 *Location:* Village Delhuan, Post Indour, P.S Dinara, Rohtas, Bihar - 802213

⏰ *Preferred Time:* [Your Preference]

*Booking via:* Delhuan Dairy Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917635065908?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg mx-auto animate-scale-in max-h-[90vh] overflow-y-auto">
        <CardHeader className="premium-gradient text-white relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl font-poppins">{service.title}</CardTitle>
          <p className="text-white/90">{service.description}</p>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {/* Service Features */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Service Features</h3>
            <div className="space-y-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent-dark mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div className="bg-secondary/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-3">Service Center Details</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-dark mt-0.5" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-sm text-muted-foreground">
                    Village Delhuan, Post Indour<br />
                    P.S Dinara, Rohtas, Bihar - 802213
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-dark" />
                <div>
                  <p className="font-medium">Contact:</p>
                  <p className="text-sm text-muted-foreground">+91 7635065908</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent-dark" />
                <div>
                  <p className="font-medium">Service Hours:</p>
                  <p className="text-sm text-muted-foreground">6:00 AM - 8:30 PM (Mon-Sat)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Booking Information</h3>
            <p className="text-sm text-muted-foreground mb-4">{service.bookingInfo}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-3">
            <Button 
              onClick={handleBookService}
              className="w-full premium-gradient text-white"
              size="lg"
            >
              Book This Service
            </Button>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open('tel:+917635065908', '_self')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open('https://wa.me/917635065908', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceModal;