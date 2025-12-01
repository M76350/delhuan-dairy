import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import logo from '@/assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Milk Rate', href: '/milk-rate' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigate('/')}>
            <img 
              src={logo} 
              alt="Delhuan Dairy" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-poppins font-bold text-primary group-hover:text-accent transition-colors duration-300">
                Delhuan Dairy
              </h1>
              <p className="text-sm text-muted-foreground">& Animal Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons + Profile */}
          <div className="flex items-center space-x-3">
            {isAuthenticated && user ? (
              <button
                className="flex items-center space-x-2 group"
                onClick={() => navigate('/profile')}
              >
                <Avatar className="w-9 h-9 border border-accent shadow-sm">
                  <AvatarImage src={user.photoURL} alt={user.name} />
                  <AvatarFallback className="bg-accent text-xs font-semibold">
                    {user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {user.name || 'Profile'}
                </span>
              </button>
            ) : (
              <Button 
                className="accent-gradient text-white font-medium px-6"
                size="sm"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg animate-fade-up">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-3 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center justify-center space-x-2"
                  onClick={() => window.open('tel:+917635065908', '_self')}
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </Button>
                <Button 
                  size="sm" 
                  className="flex items-center justify-center space-x-2 premium-gradient text-white"
                  onClick={() => window.open('https://wa.me/917635065908', '_blank')}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;