import { HeroSection } from '@/components/home/HeroSection.tsx'
import { FeaturedKitsSection } from '@/components/home/FeaturedKitsSection.tsx'
import { CategoriesSection } from '@/components/home/CategoriesSection.tsx'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedKitsSection />
      <CategoriesSection />
    </>
  )
}
