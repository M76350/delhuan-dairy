import React, { useState } from 'react';
import { X, ShoppingCart, Plus, Minus, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useClickOutside } from '@/hooks/use-click-outside';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const OrderPopup = ({ isOpen, onClose, product }: OrderPopupProps) => {
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });
  
  const { toast } = useToast();
  const popupRef = useClickOutside({ isOpen, onClose });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleOrder = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!product) return;

    // Calculate total price (remove ₹ symbol and convert to number)
    const unitPrice = parseInt(product.price.replace('₹', '').replace(/[^0-9]/g, ''));
    const totalPrice = unitPrice * quantity;

    // Create WhatsApp order message
    const orderMessage = `🛒 *New Order - Delhuan Dairy*

📦 *Product:* ${product.name}
💰 *Unit Price:* ${product.price}
🔢 *Quantity:* ${quantity}
💵 *Total Amount:* ₹${totalPrice}

👤 *Customer Details:*
📝 *Name:* ${customerInfo.name}
📱 *Phone:* ${customerInfo.phone}
🏠 *Address:* ${customerInfo.address}

📍 *Delivery Address:* Village Delhuan, Post Indour, P.S Dinara, Rohtas, Bihar - 802213

*Order placed via:* Delhuan Dairy Website`;

    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappUrl = `https://wa.me/917635065908?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Order Placed!",
      description: "Your order has been sent via WhatsApp. We'll confirm shortly!",
    });

    // Reset form and close popup
    setQuantity(1);
    setCustomerInfo({ name: '', phone: '', address: '' });
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card ref={popupRef} className="w-full max-w-md mx-auto animate-scale-in">
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
            <ShoppingCart className="mr-2 h-5 w-5" />
            Place Order
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-6">
          {/* Product Details */}
          <div className="mb-6 p-4 bg-secondary/20 rounded-lg">
            <div className="flex items-center space-x-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <h3 className="font-semibold text-primary">{product.name}</h3>
                <p className="text-accent-dark font-bold">{product.price}</p>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-2 block">Quantity</Label>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange('decrease')}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-semibold px-4">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange('increase')}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerPhone">Phone Number *</Label>
              <Input
                id="customerPhone"
                name="phone"
                type="tel"
                value={customerInfo.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerAddress">Delivery Address *</Label>
              <Input
                id="customerAddress"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                placeholder="Enter your complete address"
                required
              />
            </div>
          </div>

          <Button 
            onClick={handleOrder}
            className="w-full mt-6 premium-gradient text-white"
            size="lg"
          >
            <Send className="mr-2 h-4 w-4" />
            Place Order via WhatsApp
          </Button>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>📱 Order support: +91 7635065908</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderPopup;