import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
          <Zap className="w-6 h-6 text-gold-400" />
          <span className="text-xl font-bold text-white">AuSites</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6">
            &copy; {new Date().getFullYear()} AuSites. All rights reserved.
        </p>

        <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
