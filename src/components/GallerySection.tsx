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
    // Product Category
    { src: dairyProducts, title: 'Fresh Dairy Products', category: 'Product' },
    { src: heroImage1, title: 'Premium Ghee', category: 'Product' },
    { src: heroImage2, title: 'Fresh Paneer', category: 'Product' },
    { src: heroImage3, title: 'Pure Butter', category: 'Product' },
    
    // Machine Category
    { src: heroImage2, title: 'Milking Machine', category: 'Machine' },
    { src: heroImage1, title: 'Pasteurizer', category: 'Machine' },
    { src: heroImage3, title: 'Packaging Equipment', category: 'Machine' },
    
    // Milk Product Category
    { src: heroImage3, title: 'Fresh Milk', category: 'Milk Product' },
    { src: dairyProducts, title: 'Flavored Milk', category: 'Milk Product' },
    { src: heroImage1, title: 'Yogurt', category: 'Milk Product' },
    
    // Custome Category
    { src: heroImage2, title: 'Custom Packaging', category: 'Custome' },
    { src: heroImage1, title: 'Bulk Orders', category: 'Custome' }, 
    { src: heroImage3, title: 'Special Requests', category: 'Custome' },
  ];

  const categories = ['Product', 'Machine', 'Milk Product', 'Custome', 'All'];
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
            Browse our dairy categories
          </p>
        </div>

        {/* Category Filter - All tab moved to end */}
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
                  loading="lazy"
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
              aria-label="Close lightbox"
            >
              <X className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigateImage('prev')}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigateImage('next')}
              aria-label="Next image"
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
