import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CustomerTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const loyalCustomers = [
    {
      id: 1,
      name: 'राम प्रकाश सिंह',
      gender: 'Male',
      village: 'Delhuan',
      image: '/api/placeholder/60/60',
      rating: 5,
      testimonial: 'डेल्हुआन डेयरी से जुड़कर मेरी आर्थिक स्थिति में काफी सुधार हुआ है। दूध की उचित दर और समय पर पेमेंट मिलता है।',
      memberSince: '2019',
      milkQuantity: '25 लीटर/दिन'
    },
    {
      id: 2,
      name: 'सुनीता देवी',
      gender: 'Female',
      village: 'Indour',
      image: '/api/placeholder/60/60',
      rating: 5,
      testimonial: 'पशुओं की देखभाल और टीकाकरण सेवा बहुत अच्छी है। डॉक्टर समय पर आते हैं और सही इलाज करते हैं।',
      memberSince: '2020',
      milkQuantity: '18 लीटर/दिन'
    },
    {
      id: 3,
      name: 'मनोज कुमार',
      gender: 'Male',
      village: 'Delhuan',
      image: '/api/placeholder/60/60',
      rating: 5,
      testimonial: 'डिजिटल सिस्टम से सब कुछ पारदर्शी है। FAT टेस्ट और वजन सब सही होता है। किसी प्रकार की कोई परेशानी नहीं।',
      memberSince: '2018',
      milkQuantity: '30 लीटर/दिन'
    },
    {
      id: 4,
      name: 'गीता देवी',
      gender: 'Female',
      village: 'Kochas',
      image: '/api/placeholder/60/60',
      rating: 5,
      testimonial: 'सुधा डाना और कैल्शियम पाउडर की गुणवत्ता बहुत अच्छी है। पशु स्वस्थ रहते हैं और दूध उत्पादन भी बढ़ा है।',
      memberSince: '2021',
      milkQuantity: '22 लीटर/दिन'
    },
    {
      id: 5,
      name: 'राजेश यादव',
      gender: 'Male',
      village: 'Dinara',
      image: '/api/placeholder/60/60',
      rating: 5,
      testimonial: 'इमरजेंसी सर्विस 24 घंटे उपलब्ध है। जब भी पशु बीमार हुआ, तुरंत डॉक्टर आ गए। बहुत अच्छी सेवा।',
      memberSince: '2020',
      milkQuantity: '28 लीटर/दिन'
    },
    {
      id: 6,
      name: 'प्रिया सिंह',
      gender: 'Female',
      village: 'Delhuan',
      image: '/api/placeholder/60/60',
      rating: 5,
      testimonial: 'घी और अन्य डेयरी प्रोडक्ट्स की गुणवत्ता शानदार है। पूरे गाँव में हमारे प्रोडक्ट्स की अच्छी डिमांड है।',
      memberSince: '2019',
      milkQuantity: '20 लीटर/दिन'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % loyalCustomers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + loyalCustomers.length) % loyalCustomers.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <section id="testimonials" data-animate="right" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up" data-layout="left-text">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            हमारे वफादार ग्राहक
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            देखिए हमारे संतुष्ट किसान भाइयों और बहनों की राय, जो डेल्हुआन डेयरी के साथ 
            अपनी सफलता की कहानी साझा कर रहे हैं।
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto mb-16" data-layout="right-text">
          <Card className="shadow-xl border-0 overflow-hidden animate-fade-left">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Avatar className="w-24 h-24 border-4 border-primary/20">
                      <AvatarImage src={loyalCustomers[currentSlide].image} alt={loyalCustomers[currentSlide].name} />
                      <AvatarFallback className="text-xl font-bold bg-primary text-white">
                        {getInitials(loyalCustomers[currentSlide].name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 bg-accent rounded-full p-1">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(loyalCustomers[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-foreground mb-4 leading-relaxed italic">
                    "{loyalCustomers[currentSlide].testimonial}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-poppins font-semibold text-primary">
                      {loyalCustomers[currentSlide].name}
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><span className="font-medium">गाँव:</span> {loyalCustomers[currentSlide].village}</p>
                      <p><span className="font-medium">सदस्य:</span> {loyalCustomers[currentSlide].memberSince} से</p>
                      <p><span className="font-medium">दैनिक दूध:</span> {loyalCustomers[currentSlide].milkQuantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Customer Grid Preview */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 animate-fade-right">
          {loyalCustomers.map((customer, index) => (
            <Card 
              key={customer.id}
              className={`cursor-pointer transition-all duration-300 hover-lift ${
                index === currentSlide ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <CardContent className="p-4 text-center">
                <Avatar className="w-12 h-12 mx-auto mb-2">
                  <AvatarImage src={customer.image} alt={customer.name} />
                  <AvatarFallback className="text-sm bg-primary text-white">
                    {getInitials(customer.name)}
                  </AvatarFallback>
                </Avatar>
                <h5 className="font-medium text-sm text-primary truncate">
                  {customer.name}
                </h5>
                <p className="text-xs text-muted-foreground">{customer.village}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent-dark px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-medium">4.9/5 संतुष्टि रेटिंग • 200+ खुश किसान</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;