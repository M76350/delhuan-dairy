import React, { useState } from 'react';
import { X, Send, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useClickOutside } from '@/hooks/use-click-outside';

interface InquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryPopup = ({ isOpen, onClose }: InquiryPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry: '',
    orderType: ''
  });
  
  const { toast } = useToast();
  const popupRef = useClickOutside({ isOpen, onClose });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.inquiry) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `🐄 *Delhuan Dairy Inquiry*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'Not provided'}
📝 *Inquiry Type:* ${formData.orderType || 'General'}
💬 *Message:* ${formData.inquiry}

*Sent from:* Delhuan Dairy Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917635065908?text=${encodedMessage}`;
    
    // Send email data (in real implementation, this would be sent to a backend)
    console.log('Sending inquiry to email:', {
      to: 'manishkumar09112002@gmail.com',
      subject: 'New Inquiry from Delhuan Dairy Website',
      data: formData
    });

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Inquiry Sent!",
      description: "Your inquiry has been sent via WhatsApp. We'll contact you soon!",
    });

    // Reset form and close popup
    setFormData({ name: '', phone: '', email: '', inquiry: '', orderType: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 border-4">
      <Card ref={popupRef} className="w-full max-w-md mx-auto animate-scale-in h-[90vh] overflow-y-auto">
        <CardHeader className="premium-gradient text-white relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl font-poppins flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Quick Inquiry
          </CardTitle>
          <p className="text-white/90 text-sm">Get instant support for orders & queries</p>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email (optional)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="orderType">Inquiry Type</Label>
              <select
                id="orderType"
                name="orderType"
                value={formData.orderType}
                onChange={handleInputChange}
                className="w-full p-2 border border-border rounded-md bg-background"
              >
                <option value="">Select inquiry type</option>
                <option value="Milk Order">Milk Order</option>
                <option value="Dairy Products">Dairy Products</option>
                <option value="Animal Care">Animal Care Services</option>
                <option value="Sudha Dana">Sudha Dana Supply</option>
                <option value="General Query">General Query</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiry">Your Message *</Label>
              <Textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleInputChange}
                placeholder="Tell us about your requirements..."
                rows={4}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full premium-gradient text-white"
              size="lg"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Inquiry via WhatsApp
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>📱 Direct contact: +91 7635065908</p>
            <p>📧 Email: manishkumar09112002@gmail.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InquiryPopup;