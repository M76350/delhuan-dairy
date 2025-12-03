import React, { useState } from 'react';
import { ShoppingCart, Star, Truck, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// import dairyProducts from '@/assets/dairy-products.jpg';
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
      id: 'pure-cow-milk',
      name: 'Pure Cow milk',
      price: '₹50 / Liter',
      originalPrice: '₹60 / Liter',
      image: 'https://i.postimg.cc/7LKZ22cP/delhuan-dairy-cow-milk.png',
      rating: 4.8,
      reviews: 156,
      features: ['100% Pure', 'Traditional Method', 'No Chemicals'],
      bestseller: true,
    },
    {
      id: 'pure-buffalo-Milk',
      name: 'Pure Buffalo Milk',
      price: '₹70 / Liter',
      originalPrice: '₹80 / Liter',
      image: 'https://i.postimg.cc/QMfdTTPh/delhuan-dairy-buffalo-milk.png',
      rating: 4.8,
      reviews: 156,
      features: ['100% Pure', 'Traditional Method', 'No Chemicals'],
      bestseller: true,
    },
    {
      id: 'sudha-dana-cattle-feed',
      name: 'sudha dana cattle feed',
      price: '₹1350 / 50 kg',
      originalPrice: '₹1400 / 50 kg',
      image: 'https://i.postimg.cc/2SF6CJ7y/sudah_dana_daelhuan_dairy.png',
      rating: 4.7,
      reviews: 89,
      features: ['High Nutrition', 'Quality Assured', 'Bulk Available'],
      new: true,
    },
    {
      id: 'cow ghee',
      name: 'Premium cow ghee',
      price: '₹320/500g',
      originalPrice: '₹360/500g',
      image: 'https://i.postimg.cc/nVwrsQ5M/Gemini-Generated-Image-i63dp1i63dp1i63d.png',
      rating: 4.6,
      reviews: 67,
      features: ['Creamy', 'Unsalted', 'Fresh Daily'],
    },
    {
      id: 'flavoured-curd',
      name: 'Cultured Dahi (Curd)',
      price: '₹70/500g',
      originalPrice: '₹80',
      image: 'https://i.postimg.cc/3x9xT42P/delhuandairy-curd-dahi-image.png',
      rating: 4.7,
      reviews: 112,
      features: ['Thick Set', 'Probiotic Rich', 'Perfect for Meals'],
      popular: true,
    },
    {
      id: 'sudha-dana',
      name: 'Sudha Dana (Cattle Feed)',
      price: '₹45/kg',
      originalPrice: '₹50',
      image: 'https://i.postimg.cc/RZzh59KC/delhuandairyproduct.png',
      rating: 4.9,
      reviews: 234,
      features: ['High Nutrition', 'Quality Assured', 'Bulk Available'],
      popular: true,
    },
    {
      id: 'calcium-powder',
      name: 'Calcium & Mineral Mix',
      price: '₹120/kg',
      originalPrice: '₹140',
      image: 'https://i.postimg.cc/4d3nL5t1/delhuan_dairy_farm.png',
      rating: 4.8,
      reviews: 45,
      features: ['Veterinary Grade', 'Pure Calcium', 'Easy Dosage'],
    },
    {
      id: 'fresh-milk',
      name: 'Farm Fresh Milk',
      price: '₹50/L',
      originalPrice: '₹60/L',
      image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.9,
      reviews: 567,
      features: ['Farm Fresh', 'Quality Tested', 'Home Delivery'],
      bestseller: true,
    },
    {
      id: 'lassi',
      name: 'Sweet Lassi',
      price: '₹35/500ml',
      originalPrice: '₹40/500ml',
      image: 'https://www.sudha.coop/wp-content/uploads/2020/11/MANGO-LASSI-200-ML-1.png',
      rating: 4.5,
      reviews: 62,
      features: ['Chilled', 'Perfect for Summer', 'Made from Fresh Curd'],
    },
    {
      id: 'khoa',
      name: 'Traditional Khoa',
      price: '₹360/kg',
      originalPrice: '₹400',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinXDJ3gKijcwb7rIeRrYcNNYIw5q9sXfkiluL-lbnV1Nq5Oq9o7pucrBr1S0Mn9XUAkbvHbStLWW-7JSpgf6Y5bOF0r8SRw80SJKosyc8mTStg-WhU12FlAOv5TVVEbn_CR6BjTJcIxkdQ/s400/IMG_20170221_181830.jpg',
      rating: 4.6,
      reviews: 74,
      features: ['Slow Cooked', 'Ideal for Sweets', 'Rich Taste'],
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes pulse-scale-x {
            0%, 100% { transform: scaleX(1); }
            50% { transform: scaleX(1.2); }
          }
          .animate-pulse-scale-x {
            animation: pulse-scale-x 3s ease-in-out infinite;
          }
          @keyframes wobble {
            0%, 100% { transform: translateX(0) translateY(0) rotate(0); }
            25% { transform: translateX(2px) translateY(-2px) rotate(90deg); }
            50% { transform: translateX(-2px) translateY(2px) rotate(-200deg); }
            75% { transform: translateX(2px) translateY(2px) rotate(50deg); }
          }
          .animate-wobble {
            animation: wobble 0.5s ease-in-out 2;
          }
        `}
      </style>
      <section id="products" data-animate="left" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-layout="left-text">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
              Premium Dairy Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fresh, high-quality dairy products and cattle feed delivered right to your doorstep 
              with the guarantee of purity and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-layout="right-text">
            {products.map((product, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover object-center  group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.bestseller && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Award className="w-3 h-3 mr-1" aria-hidden="true" />
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
                      <Star className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
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
                    <Star className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
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
                      className="flex-1 premium-gradient text-white group"
                      size="sm"
                      onClick={() => handleOrderClick(product)}
                    >
                      <ShoppingCart 
                        className="w-4 h-4 mr-2 group-hover:animate-wobble" 
                        aria-hidden="true"
                      />
                      Order Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="px-3 group"
                    >
                      <Truck 
                        className="w-4 h-4 group-hover:animate-wobble" 
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm group hover:bg-accent/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300 ">
              <Truck 
                className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-wobble animate-pulse-scale-x" 
                aria-hidden="true"
              />
              <h4 className="font-semibold text-primary mb-2 group-hover:text-accent-dark transition-colors duration-300">
                Free Delivery
              </h4>
              <p className="text-sm text-muted-foreground">On orders above ₹500</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm group hover:bg-accent/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300 ">
              <Award 
                className="w-12 h-12 text-accent-dark mx-auto mb-4 group-hover:animate-wobble animate-pulse-scale-x" 
                aria-hidden="true"
              />
              <h4 className="font-semibold text-primary mb-2 group-hover:text-accent-dark transition-colors duration-300">
                Quality Assured
              </h4>
              <p className="text-sm text-muted-foreground">100% pure products</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm group hover:bg-accent/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300 ">
              <Star 
                className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-wobble animate-pulse-scale-x" 
                aria-hidden="true"
              />
              <h4 className="font-semibold text-primary mb-2 group-hover:text-accent-dark transition-colors duration-300">
                Customer Rated
              </h4>
              <p className="text-sm text-muted-foreground">4.8+ average rating</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm group hover:bg-accent/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300 ">
              <ShoppingCart 
                className="w-12 h-12 text-accent-dark mx-auto mb-4 group-hover:animate-wobble animate-pulse-scale-x" 
                aria-hidden="true"
              />
              <h4 className="font-semibold text-primary mb-2 group-hover:text-accent-dark transition-colors duration-300">
                Easy Ordering
              </h4>
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
    </>
  );
};

export default ProductsSection;