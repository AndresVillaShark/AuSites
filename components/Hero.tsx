import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 bg-hero-glow z-0 pointer-events-none" />
      
      {/* Animated Particles/Dust (CSS simulated) */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFD700\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Premium Development</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif italic text-6xl md:text-8xl lg:text-9xl mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-tight animate-fade-in-up delay-100">
          Getting Incredible <br/> 
          <span className="not-italic font-sans font-bold text-white drop-shadow-2xl">Websites</span>
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gold-400 mb-12 tracking-wide animate-fade-in-up delay-200">
          At Incredible speeds.
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
          <a 
            href="#pricing"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Project <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-gold-400 hover:text-gold-400 transition-all duration-300 hover:-translate-y-1"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
