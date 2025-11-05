import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [farmers, setFarmers] = useState(0);
  const [collection, setCollection] = useState(0);
  const [quality, setQuality] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [galleryImage, setGalleryImage] = useState<string | null>(null);

  // Function to generate random avatar URLs
  const generateAvatar = (seed: string, style: string = 'avataaars') => {
    const backgrounds = ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf', 'e8f5e8', 'f4e4d6'];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=${randomBg}`;
  };

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
          animateCount(0, 300, setFarmers);
          animateCount(0, 450, setCollection);
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

  const leadership = [
    {
      name: 'Anil Kumar Singh',
      details: 'S/o Shiv Mangle Singh',
      position: 'Secretary',
      image: 'https://i.postimg.cc/LXbnMNt5/Gemini-Generated-Image-oienxxoienxxoien.png'
    },
    {
      name: 'Arun Singh',
      position: 'Chairman',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arun&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
    },
    {
      name: 'Shyam Narayan Singh',
      position: 'Previous Chairman',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shyam&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
    }
  ];

  const openGallery = (image: string) => {
    setGalleryImage(image);
  };

  const closeGallery = () => {
    setGalleryImage(null);
  };

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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {leadership.map((leader, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div
                      className="relative w-32 h-32 mb-4 cursor-pointer hover-lift  rounded-full"
                      onClick={() => openGallery(leader.image)}
                    >
                      <img
                        src={leader.image}
                        alt={`${leader.name} profile`}
                        className="w-full h-full object-cover rounded-full border-2 border-primary/20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                        <span className="text-white text-sm font-semibold">View Gallery</span>
                      </div>
                    </div>
                    <p className="font-semibold text-primary">{leader.name}</p>
                    <p className="text-sm text-muted-foreground">{leader.position}</p>
                    {leader.details && (
                      <p className="text-sm text-muted-foreground">{leader.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon
                      className="h-8 w-8 text-primary transform transition-transform duration-500 ease-in-out group-hover:translate-y-[10px]"
                      aria-hidden="true"
                    />
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
            <div className="text-3xl font-bold text-primary mb-2" aria-live="polite">{farmers}+</div>
            <p className="text-muted-foreground">Farmers Served</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm hover-lift">
            <div className="text-3xl font-bold text-accent-dark mb-2" aria-live="polite">{collection}L</div>
            <p className="text-muted-foreground">Daily Collection</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Animal Care</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm hover-lift">
            <div className="text-3xl font-bold text-accent-dark mb-2" aria-live="polite">{quality}%</div>
            <p className="text-muted-foreground">Quality Assured</p>
          </div>
        </div>

        {/* Gallery Modal */}
        {galleryImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeGallery}>
            <div className="relative max-w-3xl w-full p-4">
              <img
                src={galleryImage}
                alt="Leadership profile gallery"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-2 right-2 bg-white/90 text-black rounded-full w-8 h-8 flex items-center justify-center"
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;