import React from 'react';
import { Check, Zap, CheckCircle, DollarSign } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Simple Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the perfect package for your business needs. No hidden fees.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`
                relative w-full max-w-md p-8 md:p-10 rounded-3xl border 
                transition-all duration-500 group
                flex flex-col
                ${plan.isPopular 
                  ? 'bg-zinc-900 border-gold-400/30 shadow-[0_0_30px_rgba(255,215,0,0.05)]' 
                  : 'bg-black border-white/10'
                }
                hover:scale-105 hover:shadow-2xl hover:z-10 hover:border-gold-400/50
              `}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="inline-block bg-gradient-to-r from-gold-400 to-gold-600 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  {plan.icon === 'check-circle' && <CheckCircle className="w-8 h-8" style={{ color: plan.iconColor }} />}
                  {plan.icon === 'dollar-sign' && <DollarSign className="w-8 h-8" style={{ color: plan.iconColor }} />}
                  {plan.icon === 'zap' && <Zap className="w-8 h-8" style={{ color: plan.iconColor }} />}
                  {!plan.icon && <div className="w-8 h-8 rounded-full bg-zinc-800" />}
                  <h3 className="text-xl font-medium text-white">{plan.title}</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  {plan.id !== 'custom' && <span className="text-gray-500">/project</span>}
                </div>
                <p className="text-gray-400 text-sm h-10">{plan.period}</p>
                <p className="text-gray-400 mt-4 leading-relaxed border-t border-white/5 pt-4">
                    {plan.description}
                </p>
              </div>

              {/* Action Button */}
              <a 
                href="#contact"
                className={`
                  w-full block py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 mb-8
                  ${plan.isPopular 
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }
                  hover:-translate-y-1
                `}
              >
                Choose this plan
              </a>

              {/* Features */}
              <div className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`
                        mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${feature.included ? 'bg-white/10 text-gold-400' : 'bg-transparent text-zinc-700'}
                      `}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-zinc-600 line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
