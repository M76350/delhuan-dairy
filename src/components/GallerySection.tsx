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

  // Separate arrays for each category
  const productImages = [
    { 
      src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&h=600&fit=crop&q=80', 
      title: 'Fresh Dairy Products', 
      description: 'Premium quality dairy products from our farm',
      price: '₹50-200',
      category: 'Product' 
    },
    { 
      src: 'https://img.forestessentialsindia.com/blog/wp-content/uploads/2020/01/720_404_1-1.jpg', 
      title: 'Premium Ghee', 
      description: 'Pure clarified butter made from fresh cream',
      price: '₹500/kg',
      category: 'Product' 
    },
    { 
      src: 'https://tiimg.tistatic.com/fp/1/007/524/100-fresh-natural-amul-frozen-paneer-made-with-evaporated-milk-weight-1kg-546.jpg', 
      title: 'Fresh Paneer', 
      description: 'Homemade cottage cheese from pure milk',
      price: '₹300/kg',
      category: 'Product' 
    },
    { 
      src: 'https://i.ytimg.com/vi/KudvZkaKX2w/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgVihWMA8=&rs=AOn4CLCNpa9_fJWn7Ozv_dGBUWnt6QmMKA', 
      title: 'Pure Butter', 
      description: 'Fresh butter made from cow milk',
      price: '₹400/kg',
      category: 'Product' 
    },
    { 
      src: 'https://www.seriouseats.com/thmb/0LrG8tB4BkzQarr2fqrpykcaDBg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__10__20151017-pies-vicky-wasik-2-6f491edb6065485a86d6af639a592298.jpg', 
      title: 'Fresh Cheese', 
      description: 'Traditional cheese varieties',
      price: '₹350/kg',
      category: 'Product' 
    },
    { 
      src: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1024x683.jpeg", 
      title: 'pure milk', 
      description: 'Natural milk',
      price: '₹60/kg',
      category: 'Product' 
    }
  ];

  const machineImages = [
    { 
      src: 'https://i.ytimg.com/vi/KVqtmUjuTxM/maxresdefault.jpg', 
      title: 'Modern Milking Machine', 
      description: 'Automated milking equipment for efficiency',
      capacity: '100L/hour',
      category: 'Machine' 
    },
    { 
      src: 'https://5.imimg.com/data5/SELLER/Default/2023/10/349971297/BT/YG/MT/78427390/milk-weighing-scale.jpg', 
      title: 'milk weight parameters ', 
      description: 'High-capacity milk weight controll',
      capacity: '200kg',
      category: 'Machine' 
    },
    { 
      src: 'https://4.imimg.com/data4/TS/GB/IMOB-20904243/jasvinderp-b20180223_082128-500x500.jpg', 
      title: 'automated milk preduction machine', 
      description: 'Automated packaging and sealing machines',
      capacity: '200 units/TubePipe',
      category: 'Machine' 
    },
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbycuAcU7hZ_pqzGBLnkDWGRsHOU6iAMkUcg&s', 
      title: 'Milk Storage Tanks', 
      description: 'temprory store for  dairy  collection',
      capacity: '40/45 liter',
      category: 'Machine' 
    },
    { 
      src: 'https://media.licdn.com/dms/image/v2/D4D22AQGgLemx6cAhpQ/feedshare-shrink_800/feedshare-shrink_800/0/1731809943915?e=2147483647&v=beta&t=8pmCMdXd5UWajeRgH3D9APhOnxYafNNRV3qIxpzsnzc', 
      title: 'Quality Testing Lab', 
      description: 'Complete quality control laboratory',
      tests: 'Fat, Protein, SNF',
      category: 'Machine' 
    },
    { 
      src: 'https://5.imimg.com/data5/SELLER/Default/2021/3/OB/ZD/YO/67087090/ms-milk-fat-testing-machine.jpg', 
      title: 'Automated Processing Line', 
      description: 'End-to-end dairy processing automation',
      capacity: '1000L/hour',
      category: 'Machine' 
    }
  ];

  const milkProductImages = [
    { 
      src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&h=600&fit=crop&q=80', 
      title: 'Fresh Cow Milk', 
      description: 'Pure and fresh cow milk daily',
      fat: '3.5%',
      category: 'Milk Product' 
    },
    { 
      src: 'https://www.bbassets.com/media/uploads/p/xl/40218606_1-sudha-cow-milk-pasteurised.jpg', 
      title: 'Flavored Milk', 
      description: 'Delicious flavored milk varieties',
      flavors: 'Chocolate, Strawberry, Vanilla',
      category: 'Milk Product' 
    },
    { 
      src: 'https://www.sudha.coop/wp-content/uploads/2020/11/Chhach-Butter-milk-400ml.png', 
      title: 'Sudha Chaach / Mattha',

      description: ' natural chach packet sudha',
      protein: '4.5g/100g',
      category: 'Milk Product' 
    },
    { 
      src: 'https://5.imimg.com/data5/DJ/OA/JR/SELLER-23947743/pure-curd-village-curd-no-artificial-only-natural.jpg', 
      title: 'Curd & Lassi', 
      description: 'Traditional curd and refreshing lassi',
      types: 'Sweet, Salty, Mango',
      category: 'Milk Product' 
    },
    { 
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2M0l2HP5xfcsLFNSV85wQpipQSxcKruBAw&s', 
      title: 'Milk Powder', 
      description: 'Long-lasting milk powder for storage',
      shelfLife: '24 months',
      category: 'Milk Product' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&h=600&fit=crop&q=80', 
      title: 'Condensed Milk', 
      description: 'Sweetened condensed milk for desserts',
      sugar: '45%',
      category: 'Milk Product' 
    }
  ];

  const customeImages = [
    { 
      src: 'https://www.shutterstock.com/image-photo/rural-scene-indian-farmer-standing-260nw-2224990567.jpg', 
      title: 'Sahendra Yadav', 
      description: 'Regular customer for fresh milk and ghee', 
      areas: 'Delhuan village and nearby areas', 
      category: 'Custome' 
    },
    { 
      src: 'https://www.nestle.lk/sites/g/files/pydnoa551/files/styles/webp_image/public/midim_banner-image-2022.jpg.webp?itok=PsFXJi3g', 
      title: 'Sita Devi', 
      description: 'Bulk buyer for family and neighbors', 
      areas: 'Dinara and Dehri regions', 
      category: 'Custome' 
    },
    { 
      src: 'https://www.shutterstock.com/image-photo/young-indian-farmer-dairy-farm-260nw-1836177133.jpg', 
      title: 'Mahendra Singh', 
      description: 'Corporate order client for milk packets', 
      areas: 'Rohtas and industrial zone', 
      category: 'Custome' 
    },
    { 
      src: 'https://media.assettype.com/newslaundry%2F2021-06%2Fa376fad8-c8e0-4a3d-b1bb-df224b8e19b3%2FAI_image.jpg?auto=format%2Ccompress&fit=max&dpr=1.0&format=webp&w=480', 
      title: 'Karan Kumar', 
      description: 'Event-based dairy orders for village functions', 
      areas: 'Delhuan and Kochas areas', 
      category: 'Custome' 
    },
    { 
      src: 'https://img.freepik.com/premium-photo/rural-scene-indian-milkman-showing-money-his-farm_75648-7558.jpg', 
      title: 'Shyam Prasad', 
      description: 'Special request for buffalo milk daily', 
      areas: 'Delhuan and Sasaram outskirts', 
      category: 'Custome' 
    },
    { 
      src: 'https://mla20yrfoj5x.i.optimole.com/cb:CQ-e.5ba07/w:1800/h:1200/q:90/f:best/sm:0/ig:avif/https://weanimals.org/wp-content/uploads/2024/01/WAM34881.jpg', 
      title: 'Manish kumar', 
      description: 'Home delivery customer since 2021', 
      areas: 'Nearby villages – Dinara block', 
      category: 'Custome' 
    }
  ];
  

  // Combined array for "All" category
  const allImages = [...productImages, ...machineImages, ...milkProductImages, ...customeImages];

  const categories = ['Product', 'Machine', 'Milk Product', 'Customers', 'All'];
  const [activeCategory, setActiveCategory] = useState('All');

  const getFilteredImages = () => {
    switch (activeCategory) {
      case 'Product':
        return productImages;
      case 'Machine':
        return machineImages;
      case 'Milk Product':
        return milkProductImages;
      case 'Customers':
        return customeImages;
      case 'All':
      default:
        return allImages;
    }
  };

  const filteredImages = getFilteredImages();

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
                   <p className="text-white/80 text-sm">{image.description}</p>
                   {'price' in image && image.price && (
                     <p className="text-white/90 text-xs font-medium mt-1">{image.price}</p>
                   )}
                   {'capacity' in image && image.capacity && (
                     <p className="text-white/90 text-xs font-medium mt-1">Capacity: {image.capacity}</p>
                   )}
                   {'fat' in image && image.fat && (
                     <p className="text-white/90 text-xs font-medium mt-1">Fat: {image.fat}</p>
                   )}
                   {'minOrder' in image && image.minOrder ? (
                     <p className="text-white/90 text-xs font-medium mt-1">Min Order: {String(image.minOrder)}</p>
                   ) : null}
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
