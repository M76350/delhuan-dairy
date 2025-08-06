import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showToBottom, setShowToBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setIsVisible(scrolled > 300);
      setShowToBottom(scrolled < documentHeight - windowHeight - 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-24 left-6 z-40 flex flex-col space-y-2">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="lg"
          className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 premium-gradient text-white p-0"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
      
      {showToBottom && (
        <Button
          onClick={scrollToBottom}
          size="lg"
          variant="outline"
          className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;