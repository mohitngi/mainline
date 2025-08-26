'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Plan = {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  action: {
    text: string;
    href: string;
  };
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    name: 'Starter',
    description: 'Perfect for solo developers and small projects',
    price: {
      monthly: 29,
      yearly: Math.round(29 * 12 * 0.85), // 15% off yearly (29 * 12 * 0.85 = 296)
    },
    features: [
      'Up to 3 active projects',
      'Access to 100+ UI components',
      '5GB cloud storage',
      'Community forum support',
      '10+ pre-built templates',
      'Basic documentation',
    ],
    action: {
      text: 'Get Started',
      href: '#',
    },
  },
  {
    name: 'Pro',
    description: 'For growing development teams',
    price: {
      monthly: 79,
      yearly: Math.round(79 * 12 * 0.85), // 15% off yearly (79 * 12 * 0.85 = 806)
    },
    features: [
      'Up to 15 active projects',
      '300+ premium components',
      '50GB cloud storage',
      'Priority email support',
      '30+ advanced templates',
      'Team collaboration tools',
      'Custom theme builder',
      'API access',
    ],
    action: {
      text: 'Start Free Trial',
      href: '#',
    },
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: {
      monthly: 199,
      yearly: Math.round(199 * 12 * 0.85), // 15% off yearly (199 * 12 * 0.85 = 2030)
    },
    features: [
      'Unlimited projects',
      'Enterprise-grade security & compliance',
      'Unlimited cloud storage',
      '24/7 dedicated support',
      'Custom template development',
      'Custom integrations & APIs',
      'Dedicated account manager',
      'SLA & priority support',
    ],
    action: {
      text: 'Contact Sales',
      href: '#',
    },
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-24 bg-[#FFFBFA]">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Plans that Scale with You
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a solo developer or a growing team, our pricing scales with your needs. 
          </p>
          
          <div className="mt-8 p-1 bg-muted rounded-full inline-flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly <span className="text-primary">(Save 15%)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                'relative flex flex-col rounded-2xl border p-6 overflow-hidden',
                plan.popular 
                  ? 'border-primary/20 shadow-lg shadow-primary/5 bg-white' 
                  : 'border-border/50 bg-white',
                'h-full flex flex-col'
              )}
            >
              
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-muted-foreground">{plan.description}</p>
              
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.monthly * 12 * 0.85)}
                  </span>
                  {billingCycle === 'yearly' && (
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Save {Math.round((1 - plan.price.yearly / (plan.price.monthly * 12)) * 100)}%
                    </span>
                  )}
                </div>
                <span className="text-muted-foreground">
                  /{billingCycle === 'monthly' ? 'month' : 'year'}
                </span>
              </div>
              
              <div className="flex-1 pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 mt-auto">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    'w-full',
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  )}
                >
                  <Link href={plan.action.href}>
                    {plan.action.text}
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
