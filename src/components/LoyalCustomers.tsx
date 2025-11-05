import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users } from 'lucide-react';
import sonuimage from '@/assets/sonukrafigung.jpg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const LoyalCustomers = () => {
  const customers = [
    {
      name: "Shivmangle singh",
      gender: "male",
      village: "Delhuan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      years: "16+ Years",
      feedback: "Quality products and fair prices. Very happy with their service.",
      rating: 5
    },
    {
      name: "Ramesh pandey",
      gender: "Male",
      village: "Delhuan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      years: "14+ Years",
      feedback: "Excellent quality milk and timely delivery. Very satisfied with services.",
      rating: 5
    },
    {
      name: "sonu kumar",
      gender: "Male", 
      village: "Rafigunj",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      years: "12+ Years",
      feedback: "Best dairy service in our area. Pure and fresh milk always.",
      rating: 5
    },
    {
      name: "Satendra  Singh",
      gender: "Male",
      village: "Delhuan", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      years: "8+ Years",
      feedback: "Trusted dairy for our family. Great animal care services too.",
      rating: 5
    },
    {
      name: "Pradeep ran",
      gender: "Male",
      village: "Delhuan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      years: "10+ Years", 
      feedback: "Professional service and good rates. Highly recommended.",
      rating: 5
    },
    {
      name: "sahendra yadav",
      gender: "Male",
      village: "Delhuan",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face", 
      years: "16+ Years",
      feedback: "Reliable dairy service with excellent customer support.",
      rating: 5
    },
    {
      name: "sushil singh",
      gender: "Male",
      village: "Delhuan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      years: "12+ Years",
      feedback: "Quality products and fair prices. Very happy with their service.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-accent" />
            <h2 className="text-4xl font-poppins font-bold text-primary">
              Our Loyal Customers
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by families in Delhuan village for years - hear what our customers say
          </p>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {customers.map((customer, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-1 animate-fade-in-up">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-32 h-32 border-2 border-green-400 mx-auto rounded-full overflow-hidden border-3 border-accent/30 group-hover:border-accent transition-all duration-300 mb-4">
                        <img 
                          src={customer.image} 
                          alt={customer.name}
                          className="w-full h-full object-cover object-left-top group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      <h3 className="text-lg font-poppins font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {customer.name}
                      </h3>
                      
                      <div className="flex items-center justify-center space-x-4 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {customer.gender}
                        </Badge>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span className="text-xs">{customer.village}</span>
                        </div>
                      </div>

                      <Badge className="bg-accent/20 text-accent hover:bg-accent hover:text-black transition-all duration-300">
                        {customer.years} Customer
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-center space-x-1">
                        {[...Array(customer.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      
                      <p className="text-sm text-muted-foreground text-center leading-relaxed italic group-hover:text-foreground transition-colors duration-300">
                        "{customer.feedback}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 hover:bg-accent hover:text-black transition-all duration-300" />
          <CarouselNext className="hidden md:flex -right-4 hover:bg-accent hover:text-black transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  );
};

export default LoyalCustomers;