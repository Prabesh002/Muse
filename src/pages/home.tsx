import React from 'react';
import MuHeroSection from '@/components/mu-hero-section';
import MuCard from '@/components/mu-card';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Palette, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <MuHeroSection
        title={
          <>
            Unleash your <span className="text-muse-logo">creative</span> potential
          </>
        }
        subtitle="Muse helps you transform ideas into beautiful, meaningful creations with an intuitive design system built for the modern web."
      >
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </MuHeroSection>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muse-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover what makes Muse the perfect companion for your creative journey
              </p>
            </div>
          </div>
          
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <MuCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Intuitive Design"
              content="Our clean, modern interface makes it easy to bring your ideas to life without getting in your way."
            />
            
            <MuCard
              icon={<Zap className="h-5 w-5" />}
              title="Lightning Fast"
              content="Built with performance in mind, Muse ensures your creative process is never slowed down."
            />
            
            <MuCard
              icon={<Palette className="h-5 w-5" />}
              title="Customizable"
              content="Adapt Muse to your unique style with extensive theming and personalization options."
            />
            
            <MuCard
              icon={<Lightbulb className="h-5 w-5" />}
              title="Smart Suggestions"
              content="Get intelligent recommendations that help enhance your creative work."
            />
            
            <MuCard
              className="md:col-span-2"
              title="Join thousands of creators"
              content={
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-center text-muted-foreground">
                    Start your creative journey today and join our growing community of designers, writers, and innovators.
                  </p>
                  <Button size="lg">Sign Up Now</Button>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;