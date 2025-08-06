import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [farmers, setFarmers] = useState(0);
  const [collection, setCollection] = useState(0);
  const [quality, setQuality] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCount = (start: number, end: number, setter: (value: number) => void, duration: number = 2000) => {
    const startTime = Date.now();
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(start + (end - start) * progress);
      setter(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    updateCount();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount(0, 500, setFarmers);
          animateCount(0, 5000, setCollection);
          animateCount(0, 100, setQuality);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const features = [
    {
      icon: Users,
      title: 'Expert Leadership',
      description: 'Led by experienced professionals with deep knowledge in dairy farming'
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      description: 'Modern digital milk collection system for accuracy and transparency'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Strict quality control measures ensuring premium dairy products'
    },
    {
      icon: Award,
      title: 'Trusted Partner',
      description: 'Connected to Sudha Plant Kochas network for reliable distribution'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            About Delhuan Dairy & Animal Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A premier dairy cooperative serving Delhuan village in Dinara Thana, committed to delivering 
            fresh milk and comprehensive animal healthcare services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-poppins font-semibold text-primary">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Established in Delhuan village, Dinara Thana, our dairy cooperative has been a cornerstone 
              of the local agricultural community. We are proud to be connected with Sudha Plant Kochas, 
              Head Center Araa, Bihar, ensuring the highest standards in milk collection and distribution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to excellence extends beyond milk collection to comprehensive animal health 
              services, supporting local farmers with expert care and modern technology.
            </p>
            
            {/* Leadership Team */}
            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <h4 className="text-xl font-poppins font-semibold text-primary mb-4">Leadership Team</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Anil Kumar Singh</p>
                    <p className="text-sm text-muted-foreground">Secretary (S/o Shiv Mangle Singh)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Arun Singh</p>
                    <p className="text-sm text-muted-foreground">Chairman</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  <p>Previous Chairman: Shyam Narayan Singh</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-poppins font-semibold text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-card rounded-lg p-6 shadow-sm hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">{farmers}+</div>
            <p className="text-muted-foreground">Farmers Served</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm hover-lift">
            <div className="text-3xl font-bold text-accent-dark mb-2">{collection}L</div>
            <p className="text-muted-foreground">Daily Collection</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Animal Care</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm hover-lift">
            <div className="text-3xl font-bold text-accent-dark mb-2">{quality}%</div>
            <p className="text-muted-foreground">Quality Assured</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;