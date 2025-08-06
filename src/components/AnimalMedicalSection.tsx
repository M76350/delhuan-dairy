import React, { useState } from 'react';
import { 
  Stethoscope, 
  Shield, 
  Heart, 
  Zap, 
  Plus, 
  CalendarCheck,
  AlertTriangle,
  Award
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ServiceModal from '@/components/ServiceModal';

const AnimalMedicalSection = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: any) => {
    setSelectedService({
      title: service.title,
      description: service.description,
      features: service.features,
      bookingInfo: `Book ${service.title} service with our expert veterinary team. Available 6 days a week with emergency support.`
    });
    setIsModalOpen(true);
  };

  const medicalServices = [
    {
      icon: Stethoscope,
      title: 'Comprehensive Health Checkup',
      description: 'Complete veterinary examination including vital signs, physical assessment, and preventive care recommendations.',
      features: [
        'Full body examination',
        'Temperature and pulse check',
        'Respiratory assessment', 
        'Dental and eye examination',
        'Health report generation'
      ],
      emergency: false
    },
    {
      icon: Shield,
      title: 'Vaccination Programs',
      description: 'Scheduled immunization programs to protect livestock from common diseases and maintain herd immunity.',
      features: [
        'FMD vaccination',
        'HS (Hemorrhagic Septicemia)',
        'BQ (Black Quarter)',
        'Brucellosis prevention',
        'Vaccination schedule planning'
      ],
      emergency: false
    },
    {
      icon: Plus,
      title: 'Medical Injections',
      description: 'Professional administration of medicines, vitamins, and treatment injections by qualified veterinarians.',
      features: [
        'Antibiotic injections',
        'Vitamin supplements',
        'Pain management',
        'Anti-inflammatory treatment',
        'Proper dosage calculation'
      ],
      emergency: true
    },
    {
      icon: Heart,
      title: 'Calcium Provider Treatment',
      description: 'Specialized calcium supplementation therapy for preventing milk fever and maintaining bone health.',
      features: [
        'Calcium deficiency diagnosis',
        'IV calcium therapy',
        'Oral calcium supplements',
        'Milk fever prevention',
        'Post-calving care'
      ],
      emergency: true
    },
    {
      icon: Zap,
      title: 'Tag Lagan (Animal Tagging)',
      description: 'Professional animal identification and tagging services for better livestock management and tracking.',
      features: [
        'Ear tag placement',
        'Unique ID generation',
        'Digital record creation',
        'Breeding history tracking',
        'Government compliance'
      ],
      emergency: false
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Treatment',
      description: '24/7 emergency veterinary care for critical conditions, injuries, and urgent medical situations.',
      features: [
        '24/7 emergency response',
        'Critical care management',
        'Injury treatment',
        'Emergency surgery',
        'On-site treatment available'
      ],
      emergency: true
    }
  ];

  return (
    <section id="medical-services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
            Animal Medical Treatment Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional veterinary care with qualified doctors providing comprehensive medical 
            treatment, emergency services, and preventive healthcare for your livestock.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="bg-accent-dark/10 border border-accent-dark/20 rounded-xl p-6 mb-12 text-center animate-fade-left">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <AlertTriangle className="h-6 w-6 text-accent-dark" />
            <h3 className="text-xl font-poppins font-semibold text-accent-dark">24/7 Emergency Service</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Immediate veterinary response for critical animal health emergencies
          </p>
          <Button 
            className="premium-gradient text-white"
            onClick={() => window.open('https://wa.me/917635065908?text=🚨 EMERGENCY VETERINARY SERVICE NEEDED%0A%0AAnimal: [Type]%0ACondition: [Describe emergency]%0ALocation: Village Delhuan%0AContact: [Your number]%0A%0APlease respond immediately!', '_blank')}
          >
            Emergency WhatsApp
          </Button>
        </div>

        {/* Medical Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalServices.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover-lift border-0 shadow-lg overflow-hidden ${
                index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right'
              }`}
            >
              <CardHeader className="premium-gradient text-white relative">
                {service.emergency && (
                  <Badge className="absolute top-4 right-4 bg-accent text-black">
                    Emergency
                  </Badge>
                )}
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
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full mr-3 bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-muted-foreground">
                      +{service.features.length - 3} more services
                    </li>
                  )}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  onClick={() => handleServiceClick(service)}
                >
                  Book Treatment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="bg-card rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-accent-dark mr-3" />
              <h3 className="text-3xl font-poppins font-bold text-primary">
                Expert Veterinary Consultation
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Get professional advice from our qualified veterinarians for any animal health concerns.
              Our team provides personalized treatment plans and ongoing care support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="premium-gradient text-white px-8"
                onClick={() => handleServiceClick({
                  title: 'Veterinary Consultation',
                  description: 'Professional consultation with qualified veterinary doctors',
                  features: [
                    'One-on-one consultation',
                    'Health assessment',
                    'Treatment planning',
                    'Follow-up support',
                    'Emergency guidance'
                  ],
                })}
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8"
                onClick={() => window.open('https://wa.me/917635065908', '_blank')}
              >
                WhatsApp Support
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

export default AnimalMedicalSection;