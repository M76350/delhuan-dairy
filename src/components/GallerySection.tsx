import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-dairy-1.jpg';
import heroImage2 from '@/assets/hero-dairy-2.jpg';
import heroImage3 from '@/assets/hero-dairy-3.jpg';
import dairyProducts from '@/assets/dairy-products.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    // Farm Category
    { src: heroImage1, title: 'Premium Dairy Farm', category: 'Farm' },
    { src: heroImage2, title: 'Modern Farm Infrastructure', category: 'Farm' },
    { src: heroImage3, title: 'Healthy Livestock', category: 'Farm' },
    { src: dairyProducts, title: 'Farm Operations', category: 'Farm' },
    { src: heroImage1, title: 'Cattle Management', category: 'Farm' },
    { src: heroImage2, title: 'Feeding Systems', category: 'Farm' },
    { src: heroImage3, title: 'Grazing Areas', category: 'Farm' },
    { src: dairyProducts, title: 'Farm Hygiene', category: 'Farm' },
    { src: heroImage1, title: 'Milking Stations', category: 'Farm' },
    { src: heroImage2, title: 'Quality Control', category: 'Farm' },
    
    // Operations Category
    { src: heroImage2, title: 'Modern Milk Collection', category: 'Operations' },
    { src: heroImage1, title: 'Digital Weighing', category: 'Operations' },
    { src: heroImage3, title: 'Fat Testing Lab', category: 'Operations' },
    { src: dairyProducts, title: 'Processing Unit', category: 'Operations' },
    { src: heroImage2, title: 'Storage Facilities', category: 'Operations' },
    { src: heroImage1, title: 'Transport System', category: 'Operations' },
    { src: heroImage3, title: 'Quality Testing', category: 'Operations' },
    { src: dairyProducts, title: 'Collection Centers', category: 'Operations' },
    { src: heroImage2, title: 'Documentation Process', category: 'Operations' },
    { src: heroImage1, title: 'Payment System', category: 'Operations' },
    
    // Services Category
    { src: heroImage3, title: 'Animal Healthcare', category: 'Services' },
    { src: heroImage1, title: 'Veterinary Care', category: 'Services' },
    { src: heroImage2, title: 'Vaccination Programs', category: 'Services' },
    { src: dairyProducts, title: 'Health Checkups', category: 'Services' },
    { src: heroImage3, title: 'Emergency Treatment', category: 'Services' },
    { src: heroImage1, title: 'Medicine Supply', category: 'Services' },
    { src: heroImage2, title: 'Consultation Services', category: 'Services' },
    { src: dairyProducts, title: 'Animal Tagging', category: 'Services' },
    { src: heroImage3, title: 'Calcium Treatment', category: 'Services' },
    { src: heroImage1, title: 'Feed Supplements', category: 'Services' },
    
    // Products Category
    { src: dairyProducts, title: 'Fresh Dairy Products', category: 'Products' },
    { src: heroImage1, title: 'Premium Ghee', category: 'Products' },
    { src: heroImage2, title: 'Fresh Paneer', category: 'Products' },
    { src: heroImage3, title: 'Pure Butter', category: 'Products' },
    { src: dairyProducts, title: 'Sudha Dana Feed', category: 'Products' },
    { src: heroImage1, title: 'Calcium Powder', category: 'Products' },
    { src: heroImage2, title: 'Organic Milk', category: 'Products' },
    { src: heroImage3, title: 'Traditional Curd', category: 'Products' },
    { src: dairyProducts, title: 'Health Supplements', category: 'Products' },
    { src: heroImage1, title: 'Nutritional Feed', category: 'Products' },
    
    // Quality Category
    { src: heroImage1, title: 'Quality Assurance', category: 'Quality' },
    { src: heroImage2, title: 'Laboratory Testing', category: 'Quality' },
    { src: heroImage3, title: 'Hygiene Standards', category: 'Quality' },
    { src: dairyProducts, title: 'Safety Protocols', category: 'Quality' },
    { src: heroImage1, title: 'Purity Testing', category: 'Quality' },
    { src: heroImage2, title: 'Chemical Analysis', category: 'Quality' },
    { src: heroImage3, title: 'Contamination Check', category: 'Quality' },
    { src: dairyProducts, title: 'Standard Compliance', category: 'Quality' },
    { src: heroImage1, title: 'Quality Certification', category: 'Quality' },
    { src: heroImage2, title: 'Regular Audits', category: 'Quality' },
    
    // Technology Category
    { src: heroImage2, title: 'Digital Technology', category: 'Technology' },
    { src: heroImage1, title: 'Automated Systems', category: 'Technology' },
    { src: heroImage3, title: 'Digital Records', category: 'Technology' },
    { src: dairyProducts, title: 'Smart Monitoring', category: 'Technology' },
    { src: heroImage2, title: 'Electronic Weighing', category: 'Technology' },
    { src: heroImage1, title: 'Data Management', category: 'Technology' },
    { src: heroImage3, title: 'Mobile App Interface', category: 'Technology' },
    { src: dairyProducts, title: 'Cloud Storage', category: 'Technology' },
    { src: heroImage2, title: 'Real-time Tracking', category: 'Technology' },
    { src: heroImage1, title: 'Digital Payments', category: 'Technology' }
  ];

  const categories = ['All', 'Farm', 'Operations', 'Services', 'Products', 'Quality', 'Technology'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const totalImages = filteredImages.length;
    
    if (direction === 'next') {
      setSelectedImage((currentIndex + 1) % totalImages);
    } else {
      setSelectedImage((currentIndex - 1 + totalImages) % totalImages);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through our modern dairy facilities, healthy livestock, 
            and premium products that define our commitment to excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              className={`px-6 py-2 ${
                activeCategory === category 
                  ? 'premium-gradient text-white' 
                  : 'hover:border-primary hover:text-primary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-lg hover-lift cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {filteredImages[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;