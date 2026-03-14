import React, { ReactNode, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage1 from '@/assets/hero-dairy-1.jpg';
import heroImage2 from '@/assets/hero-dairy-2.jpg';
import heroImage3 from '@/assets/hero-dairy-3.jpg';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

type HeroSectionProps = {
  id?: string;
  slides?: Slide[];
  supportingText?: string;
  eyebrow?: string;
  actions?: ReactNode;
  heightClass?: string;
  showScrollIndicator?: boolean;
  overlayClassName?: string;
  autoPlayDelay?: number;
};

const defaultSlides: Slide[] = [
  {
    image: heroImage1,
    title: 'Delhuan dairy farm',
    subtitle: 'Delhuan dairy farm & milk collection center',
  },
  {
    image: heroImage2,
    title: 'Top dairy farm in Rohtas',
    subtitle: 'Global member of Sudha dairy plant apart from Ara',
  },
  {
    image: heroImage3,
    title: 'Expert animal care',
    subtitle: 'Professional semen processing & veterinary services',
  },
];

const defaultSupportingText =
  'Connected to Sudha Plant Kochas, Head Center Araa, Bihar - Serving Delhuan village with best dairy services and animal care.';

const HeroSection: React.FC<HeroSectionProps> = ({
  id = 'hero',
  slides = defaultSlides,
  supportingText = defaultSupportingText,
  eyebrow,
  actions,
  heightClass = 'min-h-[80vh]',
  showScrollIndicator = false,
  overlayClassName = 'hero-gradient',
  autoPlayDelay = 5000,
}) => {
  const slideData = slides.length ? slides : defaultSlides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slideData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [slideCount, autoPlayDelay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  return (
    <section id={id} className={`relative flex items-center justify-center overflow-hidden ${heightClass}`}>
      {slideData.map((slide, index) => (
        <div
          key={`${slide.title}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${overlayClassName}`}></div>
        </div>
      ))}

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {eyebrow && (
          <p className="uppercase tracking-[0.6em] text-xs mb-5 text-white/80 animate-fade-up">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 animate-fade-up">{slideData[currentSlide].title}</h1>
        <p className="text-xl md:text-2xl mb-6 opacity-90 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          {slideData[currentSlide].subtitle}
        </p>
        {supportingText && (
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {supportingText}
          </p>
        )}

        {actions && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {actions}
          </div>
        )}
      </div>

      {slideCount > 1 && (
        <>
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
        </>
      )}

      {slideCount > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-accent scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {showScrollIndicator && (
        <div className="absolute bottom-8 right-8 text-white/80 animate-bounce">
          <div className="text-sm">Scroll Down</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mt-2 relative">
            <div className="w-1 h-3 bg-white/80 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;