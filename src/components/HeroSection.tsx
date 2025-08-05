import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-dairy-1.jpg';
import heroImage2 from '@/assets/hero-dairy-2.jpg';
import heroImage3 from '@/assets/hero-dairy-3.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      title: 'Premium Dairy Farm',
      subtitle: 'Fresh Milk & Animal Care at Your Service'
    },
    {
      image: heroImage2,
      title: 'Modern Milk Collection',
      subtitle: 'Digital Technology for Quality Assurance'
    },
    {
      image: heroImage3,
      title: 'Expert Animal Care',
      subtitle: 'Professional Health Services for Your Livestock'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 animate-fade-up">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{animationDelay: '0.2s'}}>
          {slides[currentSlide].subtitle}
        </p>
        <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.4s'}}>
          Connected to Sudha Plant Kochas, Head Center Araa, Bihar - Serving Delhuan village with premium dairy services and animal care.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="premium-gradient text-white font-semibold px-8 py-4 text-lg hover-lift"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: +91 XXXXXXXXXX
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg hover-lift"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Us
          </Button>
          
          <Button 
            size="lg" 
            className="accent-gradient text-black font-semibold px-8 py-4 text-lg hover-lift"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Check Milk Rate
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/80 animate-bounce">
        <div className="text-sm">Scroll Down</div>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mt-2 relative">
          <div className="w-1 h-3 bg-white/80 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;