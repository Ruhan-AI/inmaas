import React from 'react';
import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedRail } from '@/components/home/FeaturedRail';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { JourneyTimeline } from '@/components/home/JourneyTimeline';
import { GrowBanner } from '@/components/home/GrowBanner';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FaqSection } from '@/components/home/FaqSection';
import { ContactCta } from '@/components/home/ContactCta';
import { Reveal } from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Reveal>
        <AboutPreview />
      </Reveal>
      <Reveal>
        <CategoriesSection />
      </Reveal>
      <Reveal>
        <FeaturedRail />
      </Reveal>
      <Reveal>
        <WhyChooseSection />
      </Reveal>
      <Reveal>
        <JourneyTimeline />
      </Reveal>
      <Reveal>
        <GrowBanner />
      </Reveal>
      <Reveal>
        <TestimonialsSection />
      </Reveal>
      <Reveal>
        <FaqSection />
      </Reveal>
      <Reveal>
        <ContactCta />
      </Reveal>
    </div>
  );
}
