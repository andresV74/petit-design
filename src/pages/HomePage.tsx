import { HeroSection } from '@/components/home/HeroSection.tsx'
import { FeaturedKitsSection } from '@/components/home/FeaturedKitsSection.tsx'
import { CategoriesSection } from '@/components/home/CategoriesSection.tsx'
import { PersonalizeSection } from '@/components/home/PersonalizeSection.tsx'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection.tsx'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedKitsSection />
      <CategoriesSection />
      <PersonalizeSection />
      <WhyChooseUsSection />
    </>
  )
}
