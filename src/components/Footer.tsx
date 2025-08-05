import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Milk, Award } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Milk Rate', href: '#milk-rate' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Digital Milk Collection',
    'Animal Health Check',
    'Sudha Dana Supply',
    'Calcium Powder',
    'Premium Ghee',
    'Fresh Dairy Products'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Delhuan Dairy" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-poppins font-bold">Delhuan Dairy</h3>
                <p className="text-sm opacity-90">& Animal Care</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Premier dairy cooperative serving Delhuan village with fresh milk collection, 
              animal healthcare, and quality dairy products. Connected to Sudha Plant Kochas 
              network for reliable service.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-sm opacity-90">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <div className="text-sm opacity-90">
                  <p>Delhuan Village</p>
                  <p>Dinara Thana, Bihar</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div className="text-sm opacity-90">
                  <p>+91 XXXXXXXXXX</p>
                  <p>+91 XXXXXXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div className="text-sm opacity-90">
                  <p>info@delhuandairy.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-accent" />
                <div className="text-sm opacity-90">
                  <p>WhatsApp: +91 XXXXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sudha Plant Connection */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h5 className="font-semibold">Connected to Sudha Plant Kochas</h5>
                <p className="text-sm opacity-80">Head Center Araa, Bihar</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Milk className="h-4 w-4 text-accent" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-accent" />
                <span>Licensed Dairy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
            <p>&copy; 2024 Delhuan Dairy & Animal Care. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;