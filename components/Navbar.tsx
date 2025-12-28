import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - No Border as requested */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="AuSites Logo"
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-bold font-sans tracking-tight text-white group-hover:text-gold-400 transition-colors">
            AuSites
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Portfolio', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-gold-400 text-black font-bold rounded-full text-sm hover:bg-gold-500 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 md:hidden p-6 flex flex-col gap-4 animate-fade-in">
          {['Portfolio', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-gray-300 hover:text-gold-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
