import React from 'react';
import MuHeroSection from '@/components/mu-hero-section';
import MuCard from '@/components/mu-card';
import { Button } from '@/components/ui/button';
import { Heart, Star, Users, Globe } from 'lucide-react';
import { MuSection } from '@/components/mu-section';

const About: React.FC = () => {
  return (
    <>
      <MuHeroSection
        title="Our Story"
        subtitle="We're on a mission to empower creators with intuitive tools that inspire and elevate their work."
      />
      
      <MuSection paddingY="xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">The Genesis of Muse</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Muse was born from a simple observation: creative tools should be as intuitive and inspiring as the creative process itself.
              </p>
              <p>
                Founded in 2022, our team of designers, developers, and creatives set out to build a platform that would remove technical barriers and empower people to bring their ideas to life.
              </p>
              <p>
                What started as a small project has grown into a platform used by thousands of creators worldwide, from individual artists to design teams at leading companies.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Muse team working together" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </MuSection>
      
      {/* Values */}
      <MuSection paddingY="xl" className="bg-muse-logo/10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
          <p className="max-w-[700px] text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MuCard
            icon={<Heart className="h-5 w-5" />}
            title="Passion"
            content="We're passionate about creativity and believe in the power of great design to transform ideas into impact."
          />
          
          <MuCard
            icon={<Star className="h-5 w-5" />}
            title="Excellence"
            content="We strive for excellence in everything we create, from our platform to our customer experiences."
          />
          
          <MuCard
            icon={<Users className="h-5 w-5" />}
            title="Community"
            content="We believe in the power of community and creating tools that bring creators together."
          />
          
          <MuCard
            icon={<Globe className="h-5 w-5" />}
            title="Global Impact"
            content="Our tools are designed for creators around the world, making a global impact by fostering creativity across borders."
          />
        </div>
      </MuSection>

      {/* Call to Action */}
      <MuSection paddingY="xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Join Us on Our Journey</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground mb-6">
            We're just getting started. If you're passionate about creativity and want to help shape the future of design tools, we want you on our team.
          </p>
          <Button size="lg">Get Involved</Button>
        </div>
      </MuSection>
    </>
  );
};

export default About;