import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Websites we've built</h2>
          <div className="w-24 h-1 bg-gold-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-gold-400 text-sm font-bold tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
