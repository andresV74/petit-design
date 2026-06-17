import { HeroSection } from '@/components/home/HeroSection.tsx'
import { FeaturedKitsSection } from '@/components/home/FeaturedKitsSection.tsx'
import { CategoriesSection } from '@/components/home/CategoriesSection.tsx'
import { PersonalizeSection } from '@/components/home/PersonalizeSection.tsx'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection.tsx'
import { TestimonialsSection } from '@/components/home/TestimonialsSection.tsx'

export function HomePage() {
  return (
    <>
      <title>Petit Design | Lencería Personalizada para Bebés</title>
      <meta name="description" content="Lencería de cunas y accesorios personalizados para bebés, hechos con amor en Colombia. Sets, cobijas, nidos y más, bordados con el nombre de tu bebé." />
      <link rel="canonical" href="https://petitdesign.com.co/" />

      <meta property="og:title" content="Petit Design | Lencería Personalizada para Bebés" />
      <meta property="og:description" content="Lencería de cunas y accesorios personalizados para bebés, hechos con amor en Colombia. Sets, cobijas, nidos y más, bordados con el nombre de tu bebé." />
      <meta property="og:url" content="https://petitdesign.com.co/" />

      <meta name="twitter:title" content="Petit Design | Lencería Personalizada para Bebés" />
      <meta name="twitter:description" content="Lencería de cunas y accesorios personalizados para bebés, hechos con amor en Colombia. Sets, cobijas, nidos y más, bordados con el nombre de tu bebé." />

      <link rel="preload" as="image" href="/hero-banner.webp" fetchPriority="high" />

      <HeroSection />
      <FeaturedKitsSection />
      <CategoriesSection />
      <PersonalizeSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </>
  )
}
