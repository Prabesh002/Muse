import React from 'react';
import MuHeroSection from '@/components/mu-hero-section';
import MuCard from '@/components/mu-card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false, 
  buttonText = "Get Started" 
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
}) => (
  <MuCard
    className={cn(
      "flex flex-col justify-between h-full",
      highlighted && "border-primary shadow-lg"
    )}
    title={
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
      </div>
    }
    description={description}
    content={
      <ul className="space-y-3 mt-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    }
    footer={
      <Button 
        className="w-full mt-6" 
        variant={highlighted ? "default" : "outline"}
        size="lg"
      >
        {buttonText}
      </Button>
    }
  />
);

import { cn } from '@/lib/utils';

const Pricing: React.FC = () => {
  return (
    <>
      <MuHeroSection
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that's right for you and start creating with Muse today."
      />
      
      {/* Pricing Tiers */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingTier
              title="Starter"
              price="$29"
              description="Perfect for individuals and small projects."
              features={[
                "Up to 5 projects",
                "Basic templates",
                "3GB cloud storage",
                "Email support",
                "Core features"
              ]}
            />
            
            <PricingTier
              title="Professional"
              price="$79"
              description="Designed for professionals and growing teams."
              features={[
                "Unlimited projects",
                "Premium templates",
                "15GB cloud storage",
                "Priority support",
                "Advanced features",
                "Team collaboration",
                "Analytics dashboard"
              ]}
              highlighted={true}
              buttonText="Try for Free"
            />
            
            <PricingTier
              title="Enterprise"
              price="Custom"
              description="Tailored solutions for large organizations."
              features={[
                "Unlimited everything",
                "Dedicated account manager",
                "Custom integrations",
                "Advanced security",
                "24/7 premium support",
                "On-premises option",
                "Training and onboarding"
              ]}
              buttonText="Contact Sales"
            />
          </div>
          
          <div className="mt-20">
            <MuCard
              className="max-w-3xl mx-auto"
              title="Frequently Asked Questions"
              content={
                <div className="space-y-6 mt-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Can I switch between plans?</h3>
                    <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Is there a free trial?</h3>
                    <p className="text-muted-foreground">We offer a 14-day free trial on our Professional plan, no credit card required.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">What payment methods do you accept?</h3>
                    <p className="text-muted-foreground">We accept all major credit cards, PayPal, and offer invoice payment for annual Enterprise plans.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Can I get a refund?</h3>
                    <p className="text-muted-foreground">We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>
      
      {/* Compare Plans */}
      <section className="w-full py-12 md:py-24 bg-muse-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare Plans</h2>
            <p className="max-w-[700px] text-muted-foreground">
              See which plan is right for your needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted">Features</th>
                  <th className="text-center p-3 bg-muted">Starter</th>
                  <th className="text-center p-3 bg-muted font-bold">Professional</th>
                  <th className="text-center p-3 bg-muted">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Projects</td>
                  <td className="text-center p-3">5</td>
                  <td className="text-center p-3 font-medium">Unlimited</td>
                  <td className="text-center p-3">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Storage</td>
                  <td className="text-center p-3">3GB</td>
                  <td className="text-center p-3 font-medium">15GB</td>
                  <td className="text-center p-3">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Team Members</td>
                  <td className="text-center p-3">1</td>
                  <td className="text-center p-3 font-medium">5</td>
                  <td className="text-center p-3">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Premium Templates</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3 font-medium">✓</td>
                  <td className="text-center p-3">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Advanced Analytics</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3 font-medium">✓</td>
                  <td className="text-center p-3">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">API Access</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3 font-medium">Limited</td>
                  <td className="text-center p-3">Full</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Custom Branding</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3 font-medium">—</td>
                  <td className="text-center p-3">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Dedicated Support</td>
                  <td className="text-center p-3">—</td>
                  <td className="text-center p-3 font-medium">—</td>
                  <td className="text-center p-3">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
            <p className="text-muted-foreground">
              Join thousands of creators who are already using Muse to bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">View Demo</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;