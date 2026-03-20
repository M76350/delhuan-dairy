import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Milk, Award, ShieldCheck, Truck } from 'lucide-react';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Milk Rate', href: '/milk-rate' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Delivery Policy', href: '/delivery-policy' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  const services = [
    'Digital Milk Collection',
    'Animal Health Check',
    'Sudha Dana Supply',
    'Calcium Powder',
    'Premium Ghee',
    'Fresh Dairy Products',
  ];

  const trustBadges = [
    { icon: ShieldCheck, label: '100% Pure & Fresh' },
    { icon: Award, label: 'Licensed Dairy' },
    { icon: Milk, label: 'Quality Tested' },
    { icon: Truck, label: 'Daily Delivery' },
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

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                  <Icon className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/delhuandairy" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/delhuandairy" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/917635065908" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center text-sm opacity-90">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
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
                <MapPin className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <address className="text-sm opacity-90 not-italic">
                  <p>Delhuan Village, Dinara Thana</p>
                  <p>Rohtas, Bihar – 821307</p>
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+917635065908" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  +91-7635065908
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:delhuandairy@gmail.com" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  delhuandairy@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="https://wa.me/917635065908" target="_blank" rel="noopener noreferrer"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  WhatsApp: +91-7635065908
                </a>
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

        {/* Legal Links */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start mb-6">
            {legalLinks.map((link) => (
              <Link key={link.href} to={link.href}
                className="text-xs opacity-70 hover:opacity-100 hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
            <div>
              <p>&copy; {new Date().getFullYear()} Delhuan Dairy & Animal Care. All rights reserved.</p>
              <p className="copyright-text underline">
                &copy; Designed and Developed by{' '}
                <a className="underline text-md copyright-text"
                  href="https://www.linkedin.com/in/manish-kumar0911/"
                  target="_blank" rel="noopener noreferrer">
                  Manish Kumar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
