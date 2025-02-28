import React from 'react';
import MuHeroSection from '@/components/mu-hero-section';
import MuCard from '@/components/mu-card';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Palette, Lightbulb, Compass, Shield, Cloud } from 'lucide-react';
import { MuSection } from '@/components/mu-section';

const Features: React.FC = () => {
  return (
    <>
      <MuHeroSection
        title="Powerful Features"
        subtitle="Discover all the innovative tools and capabilities that make Muse the perfect platform for your creative projects."
      >
        <Button size="lg">Try for Free</Button>
        <Button size="lg" variant="outline">View Demo</Button>
      </MuHeroSection>

      <MuSection paddingY="xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Core Features</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Our comprehensive toolkit is designed to streamline your creative workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MuCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Intuitive Design"
            content="Our clean, modern interface makes it easy to bring your ideas to life without getting in your way. The streamlined UI ensures you can focus on what matters most - your creations."
            image="/api/placeholder/600/400"
            imagePosition="top"
          />

          <MuCard
            icon={<Zap className="h-5 w-5" />}
            title="Lightning Fast"
            content="Built with performance in mind, Muse ensures your creative process is never slowed down. Enjoy instant feedback and smooth interactions throughout your workflow."
            image="/api/placeholder/600/400"
            imagePosition="top"
          />

          <MuCard
            icon={<Palette className="h-5 w-5" />}
            title="Advanced Customization"
            content="Adapt Muse to your unique style with extensive theming and personalization options. Create the perfect environment tailored to your specific needs."
            image="/api/placeholder/600/400"
            imagePosition="right"
            className="md:col-span-2"
          />
        </div>
      </MuSection>

      {/* Secondary Features Grid */}
      <MuSection paddingY="xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Everything You Need</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Comprehensive tools to support every part of your creative process
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MuCard
            icon={<Lightbulb className="h-5 w-5" />}
            title="Smart Suggestions"
            content="Get intelligent recommendations that help enhance your creative work."
          />

          <MuCard
            icon={<Compass className="h-5 w-5" />}
            title="Intuitive Navigation"
            content="Find everything you need with our thoughtfully designed information architecture."
          />

          <MuCard
            icon={<Shield className="h-5 w-5" />}
            title="Secure Platform"
            content="Rest easy knowing your creative work is protected with enterprise-grade security."
          />

          <MuCard
            icon={<Cloud className="h-5 w-5" />}
            title="Cloud Syncing"
            content="Access your projects from anywhere with seamless cloud synchronization."
          />
        </div>
      </MuSection>

      {/* Feature Showcase */}
      <MuSection paddingY="xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Built for Modern Creators</h2>
            <p className="text-muted-foreground mb-6">
              Muse combines cutting-edge technology with intuitive design to provide you with the ultimate creative platform.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Real-time Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Work together with your team in real-time, no matter where they are.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Version Control</h3>
                  <p className="text-sm text-muted-foreground">Track changes and revert to previous versions with ease.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Advanced Export Options</h3>
                  <p className="text-sm text-muted-foreground">Export your work in multiple formats for any use case.</p>
                </div>
              </li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/800/600"
              alt="Muse platform features"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </MuSection>

      {/* CTA Section */}
      <MuSection paddingY="xl">
        <MuCard
          className="max-w-4xl mx-auto"
          title={<h2 className="text-3xl font-bold">Ready to start creating?</h2>}
          content={
            <div className="flex flex-col items-center space-y-4">
              <p className="text-center text-muted-foreground max-w-2xl">
                Join thousands of creators who are already using Muse to bring their ideas to life. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Contact Sales</Button>
              </div>
            </div>
          }
          image="/api/placeholder/1200/400"
          imagePosition="background"
        />
      </MuSection>
    </>
  );
};

export default Features;