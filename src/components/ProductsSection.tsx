import React, { useState } from 'react';
import { ShoppingCart, Star, Truck, Award, Plus, Check, Leaf, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  nameHi: string;
  price: string;
  priceNum: number;
  unit: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  rating: number;
  reviews: number;
  features: string[];
}

const products: Product[] = [
  {
    id: 'fresh-milk-1l',
    name: 'Fresh Cow Milk',
    nameHi: 'ताज़ा गाय का दूध',
    price: '₹60/litre',
    priceNum: 60,
    unit: 'litre',
    image: '/logo.png',
    badge: 'Best Seller',
    badgeColor: 'bg-green-500',
    description: 'Pure, fresh cow milk delivered daily from our farm. Rich in calcium and nutrients.',
    rating: 5,
    reviews: 248,
    features: ['Daily Fresh', 'No Preservatives', 'Farm to Door'],
  },
  {
    id: 'buffalo-milk-1l',
    name: 'Buffalo Milk',
    nameHi: 'भैंस का दूध',
    price: '₹70/litre',
    priceNum: 70,
    unit: 'litre',
    image: '/logo.png',
    badge: 'High Fat',
    badgeColor: 'bg-blue-500',
    description: 'Thick, creamy buffalo milk — perfect for making paneer, khoya, and sweets.',
    rating: 5,
    reviews: 186,
    features: ['High Fat Content', 'Ideal for Sweets', 'Pure & Natural'],
  },
  {
    id: 'desi-ghee-500g',
    name: 'Desi Ghee',
    nameHi: 'देसी घी',
    price: '₹650/500g',
    priceNum: 650,
    unit: '500g',
    image: '/logo.png',
    badge: 'Premium',
    badgeColor: 'bg-yellow-500',
    description: 'Hand-churned pure desi ghee made from cow milk. Traditional bilona method.',
    rating: 5,
    reviews: 312,
    features: ['Bilona Method', 'A2 Cow Milk', 'Pure & Aromatic'],
  },
  {
    id: 'paneer-250g',
    name: 'Fresh Paneer',
    nameHi: 'ताज़ा पनीर',
    price: '₹120/250g',
    priceNum: 120,
    unit: '250g',
    image: '/logo.png',
    badge: 'Fresh Daily',
    badgeColor: 'bg-orange-500',
    description: 'Soft, fresh paneer made from pure milk. Perfect for curries and snacks.',
    rating: 4,
    reviews: 154,
    features: ['Made Fresh Daily', 'Soft Texture', 'High Protein'],
  },
  {
    id: 'curd-500g',
    name: 'Natural Curd',
    nameHi: 'दही',
    price: '₹50/500g',
    priceNum: 50,
    unit: '500g',
    image: '/logo.png',
    description: 'Thick, creamy natural curd set from fresh milk. Great for digestion.',
    rating: 4,
    reviews: 98,
    features: ['Probiotic Rich', 'Thick & Creamy', 'Natural Culture'],
  },
  {
    id: 'lassi-250ml',
    name: 'Sweet Lassi',
    nameHi: 'मीठी लस्सी',
    price: '₹30/250ml',
    priceNum: 30,
    unit: '250ml',
    image: '/logo.png',
    badge: 'New',
    badgeColor: 'bg-purple-500',
    description: 'Refreshing sweet lassi made from fresh curd. A traditional summer drink.',
    rating: 4,
    reviews: 67,
    features: ['Refreshing', 'No Artificial Sugar', 'Traditional Recipe'],
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`h-3.5 w-3.5 ${s <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart, items } = useCart();
  const { toast } = useToast();
  const inCart = items.some((i) => i.id === product.id);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNum: product.priceNum,
      image: product.image,
      unit: product.unit,
    });
    toast({
      title: `${product.name} added!`,
      description: 'Cart mein add ho gaya. Aur products dekh sakte hain.',
    });
  };

  return (
    <Card className="group relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
      {product.badge && (
        <div className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
          {product.badge}
        </div>
      )}
      {inCart && (
        <div className="absolute top-3 right-3 z-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Check className="h-3 w-3" /> In Cart
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-44 bg-gradient-to-br from-primary/5 to-accent/10 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-poppins font-bold text-base text-primary leading-tight">{product.name}</h3>
          <p className="text-xs text-muted-foreground font-hindi">{product.nameHi}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex flex-wrap gap-1">
          {product.features.map((f) => (
            <span key={f} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {f}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-xl font-bold text-accent-dark">₹{product.priceNum}</span>
            <span className="text-xs text-muted-foreground ml-1">/{product.unit}</span>
          </div>
          <Button
            onClick={handleAdd}
            size="sm"
            className={`gap-1.5 transition-all duration-200 ${
              inCart
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'premium-gradient text-white hover:opacity-90'
            }`}
          >
            {inCart ? (
              <><Check className="h-4 w-4" /> Added</>
            ) : (
              <><Plus className="h-4 w-4" /> Add to Cart</>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductsSection: React.FC = () => {
  const { totalItems, totalPrice, openCart } = useCart();

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Leaf className="h-3 w-3 mr-1" /> 100% Pure & Natural
          </Badge>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-3">
            Our Fresh Dairy Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Delhuan Dairy ke taaze dairy products — seedha farm se aapke ghar tak. Kochas, Rohtas, Bihar mein
            daily delivery available.
          </p>
        </div>

        {/* Sticky Cart Bar */}
        {totalItems > 0 && (
          <div className="sticky top-16 z-40 mb-6">
            <div className="bg-primary text-white rounded-xl px-5 py-3 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-5 w-5" />
                <span className="font-semibold text-sm">
                  {totalItems} item{totalItems > 1 ? 's' : ''} — ₹{totalPrice}
                </span>
                {totalPrice < 500 && (
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    ₹{500 - totalPrice} more for Free Delivery
                  </span>
                )}
                {totalPrice >= 500 && (
                  <span className="text-xs bg-green-400/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Truck className="h-3 w-3" /> Free Delivery!
                  </span>
                )}
              </div>
              <Button
                onClick={openCart}
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-bold"
              >
                View Cart →
              </Button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { icon: <Truck className="h-6 w-6 text-primary" />, title: 'Free Delivery', desc: 'Orders above ₹500' },
            { icon: <Droplets className="h-6 w-6 text-blue-500" />, title: '100% Pure', desc: 'No adulteration' },
            { icon: <Award className="h-6 w-6 text-yellow-500" />, title: 'Quality Assured', desc: 'Sudha Plant certified' },
            { icon: <Leaf className="h-6 w-6 text-green-500" />, title: 'Farm Fresh', desc: 'Daily from our farm' },
          ].map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center p-4 bg-card rounded-xl border shadow-sm">
              {badge.icon}
              <p className="font-semibold text-sm mt-2 text-primary">{badge.title}</p>
              <p className="text-xs text-muted-foreground">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
