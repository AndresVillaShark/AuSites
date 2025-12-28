import { PricingPlan, PortfolioItem } from './types';

export const CONTACT_EMAILS = [
  "andresvillalpando.scorpion@gmail.com",
  "steven.sotomayor101@gmail.com"
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'static',
    title: 'Static HTML',
    price: '$200',
    period: 'One-time payment',
    description: 'Perfect for landing pages and personal portfolios requiring speed and simplicity.',
    features: [
      { text: 'Up to 5 static HTML pages', included: true },
      { text: 'Responsive mobile design', included: true },
      { text: 'Basic SEO optimization', included: true },
      { text: 'Contact form integration', included: true },
      { text: '1 round of revisions', included: true },
      { text: 'Fast 5-7 day delivery', included: true },
      { text: 'CMS Integration', included: false },
      { text: 'E-commerce functionality', included: false },
    ]
  },
  {
    id: 'professional',
    title: 'Professional',
    price: '$1,000',
    period: 'One-time payment',
    description: 'A complete solution for businesses needing growth, analytics, and content management.',
    isPopular: true,
    features: [
      { text: 'Custom CMS integration', included: true },
      { text: 'Advanced responsive design', included: true },
      { text: 'Professional SEO setup', included: true },
      { text: 'E-commerce functionality', included: true },
      { text: 'Blog/news system', included: true },
      { text: 'Analytics integration', included: true },
      { text: '3 rounds of revisions', included: true },
      { text: '90 days of support', included: true },
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Luxury Estate',
    category: 'Real Estate',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 2,
    title: 'Neon Tech',
    category: 'SaaS Platform',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 3,
    title: 'Culinary Master',
    category: 'Restaurant',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 4,
    title: 'FitPulse',
    category: 'Health & Fitness',
    imageUrl: 'https://picsum.photos/800/600?random=4'
  }
];
