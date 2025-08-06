import React, { useState } from 'react';
import { Milk, Stethoscope, Package, Pill, Droplets, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServiceModal from '@/components/ServiceModal';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: any) => {
    setSelectedService({
      title: service.title,
      description: service.description,
      features: service.features,
      bookingInfo: `Book ${service.title} service with our expert team. Available 6 days a week with emergency support 24/7.`
    });
    setIsModalOpen(true);
  };

  const services = [
    {
      icon: Milk,
      title: 'Digital Milk Collection',
      description: 'Advanced digital system for accurate milk collection with real-time fat content testing and transparent pricing.',
      features: ['Digital weighing systems', 'Fat content analysis', 'Transparent pricing', 'Digital receipts'],
      color: 'primary'
    },
    {
      icon: Stethoscope,
      title: 'Animal Health Check',
      description: 'Comprehensive veterinary services including regular health checkups, vaccinations, and emergency care.',
      features: ['Regular health checkups', 'Vaccination programs', 'Emergency treatment', 'Health monitoring'],
      color: 'accent'
    },
    {
      icon: Package,
      title: 'Sudha Dana Supply',
      description: 'High-quality cattle feed (Sudha Dana) supply to ensure optimal nutrition for livestock.',
      features: ['Premium quality feed', 'Nutritional supplements', 'Bulk supply options', 'Home delivery'],
      color: 'primary'
    },
    {
      icon: Pill,
      title: 'Calcium Powder',
      description: 'Specialized calcium supplements for livestock to maintain bone health and milk production.',
      features: ['Pure calcium powder', 'Veterinary approved', 'Dosage guidance', 'Bulk packages'],
      color: 'accent'
    },
    {
      icon: Droplets,
      title: 'Premium Ghee',
      description: 'Traditional cow ghee made from pure milk with traditional methods for authentic taste and quality.',
      features: ['100% pure cow ghee', 'Traditional methods', 'Chemical-free', 'Home delivery'],
      color: 'primary'
    },
    {
      icon: ShoppingBag,
      title: 'Dairy Products',
      description: 'Fresh dairy products including milk, paneer, butter, and other traditional dairy items.',
      features: ['Fresh daily products', 'Quality assurance', 'Hygienic packaging', 'Quick delivery'],
      color: 'accent'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dairy and animal care services designed to support farmers and deliver 
            the highest quality products to our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover-lift border-0 shadow-lg overflow-hidden">
              <CardHeader className={`${service.color === 'primary' ? 'premium-gradient' : 'accent-gradient'} text-white relative`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <service.icon className="h-12 w-12 mb-4" />
                  <CardTitle className="text-xl font-poppins font-semibold">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-accent-dark'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  onClick={() => handleServiceClick(service)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
              Need Expert Consultation?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team of dairy and veterinary experts is ready to help you with personalized advice 
              and solutions for your livestock and dairy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="premium-gradient text-white px-8"
                onClick={() => handleServiceClick({
                  title: 'Premium Consultation Service',
                  description: 'Get expert consultation for dairy management and animal care',
                  features: ['One-on-one consultation', 'Customized solutions', 'Follow-up support', 'Expert guidance'],
                })}
              >
                Book Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8"
                onClick={() => window.open('tel:+917635065908', '_self')}
              >
                Emergency Support
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default ServicesSection;