import React, { useState } from 'react';
import { ShoppingCart, Star, Truck, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import dairyProducts from '@/assets/dairy-products.jpg';
import OrderPopup from '@/components/OrderPopup';

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);

  const handleOrderClick = (product: any) => {
    setSelectedProduct({
      id: product.name.toLowerCase().replace(/\s+/g, '-'),
      name: product.name,
      price: product.price,
      image: product.image
    });
    setIsOrderPopupOpen(true);
  };

  const products = [
    {
      id: 'pure-cow-ghee',
      name: 'Pure Cow Ghee',
      price: '₹480/500g',
      originalPrice: '₹520',
      image: dairyProducts,
      rating: 4.8,
      reviews: 156,
      features: ['100% Pure', 'Traditional Method', 'No Chemicals'],
      bestseller: true
    },
    {
      name: 'Fresh Paneer',
      price: '₹280/kg',
      originalPrice: '₹320',
      image: dairyProducts,
      rating: 4.7,
      reviews: 89,
      features: ['Daily Fresh', 'High Protein', 'Soft Texture'],
      new: true
    },
    {
      name: 'Premium Butter',
      price: '₹160/250g',
      originalPrice: '₹180',
      image: dairyProducts,
      rating: 4.6,
      reviews: 67,
      features: ['Creamy', 'Unsalted', 'Fresh Daily']
    },
    {
      name: 'Sudha Dana (Cattle Feed)',
      price: '₹45/kg',
      originalPrice: '₹50',
      image: dairyProducts,
      rating: 4.9,
      reviews: 234,
      features: ['High Nutrition', 'Quality Assured', 'Bulk Available'],
      popular: true
    },
    {
      name: 'Calcium Powder',
      price: '₹120/kg',
      originalPrice: '₹140',
      image: dairyProducts,
      rating: 4.8,
      reviews: 45,
      features: ['Veterinary Grade', 'Pure Calcium', 'Easy Dosage']
    },
    {
      name: 'Fresh Milk',
      price: '₹38/L',
      originalPrice: '₹42',
      image: dairyProducts,
      rating: 4.9,
      reviews: 567,
      features: ['Farm Fresh', 'Quality Tested', 'Home Delivery'],
      bestseller: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Premium Dairy Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fresh, high-quality dairy products and cattle feed delivered right to your doorstep 
            with the guarantee of purity and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover-lift border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.bestseller && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      Bestseller
                    </Badge>
                  )}
                  {product.new && (
                    <Badge className="bg-primary text-primary-foreground">New</Badge>
                  )}
                  {product.popular && (
                    <Badge variant="outline" className="bg-white">Popular</Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-primary mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-2xl font-bold text-accent-dark">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>

                <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span>{product.rating}</span>
                  <span>({product.reviews} reviews)</span>
                </div>

                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 premium-gradient text-white"
                    size="sm"
                    onClick={() => handleOrderClick(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="px-3"
                  >
                    <Truck className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg shadow-sm">
            <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">Free Delivery</h4>
            <p className="text-sm text-muted-foreground">On orders above ₹500</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-sm">
            <Award className="w-12 h-12 text-accent-dark mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">Quality Assured</h4>
            <p className="text-sm text-muted-foreground">100% pure products</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-sm">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">Customer Rated</h4>
            <p className="text-sm text-muted-foreground">4.8+ average rating</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-sm">
            <ShoppingCart className="w-12 h-12 text-accent-dark mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">Easy Ordering</h4>
            <p className="text-sm text-muted-foreground">Quick & simple process</p>
          </div>
        </div>
      </div>

      <OrderPopup
        isOpen={isOrderPopupOpen}
        onClose={() => setIsOrderPopupOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};

export default ProductsSection;