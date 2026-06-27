import { lazy, Suspense} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from '@/lib/i18n.tsx'
import { Header } from '@/components/Header.tsx'
import { Footer } from '@/components/Footer.tsx'
import { WhatsAppButton } from '@/components/WhatsAppButton.tsx'

import { HomePage } from './pages/HomePage.tsx'
const AboutPage = lazy(() => import('./pages/AboutPage.tsx').then(m => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('./pages/ContactPage.tsx').then(m => ({ default: m.ContactPage })))
const PoliciesPage = lazy(() => import('./pages/PoliciesPage.tsx').then(m => ({ default: m.PoliciesPage })))
const CatalogPage = lazy(() => import('./pages/CatalogPage.tsx').then(m => ({ default: m.CatalogPage })))
const ProductPage = lazy(() => import('./pages/ProductPage.tsx').then(m => ({ default: m.ProductPage })))

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/politicas" element={<PoliciesPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/catalogo/:category" element={<CatalogPage />} />
            <Route path="/catalogo/:category/:subcategory" element={<CatalogPage />} />
            <Route path='/producto/:slug' element={<ProductPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}

export default App
