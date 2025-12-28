export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  icon?: 'check-circle' | 'dollar-sign' | 'zap';
  iconColor?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  url?: string;
}
