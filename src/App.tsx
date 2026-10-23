import { lazy, Suspense} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from '@/lib/i18n.tsx'
import { Header } from '@/components/Header.tsx'
import { Footer } from '@/components/Footer.tsx'
import { WhatsAppButton } from '@/components/WhatsAppButton.tsx'
import { ScrollToTop } from '@/components/utils/ScrollToTop.tsx'

import { HomePage } from './pages/HomePage.tsx'
const AboutPage = lazy(() => import('./pages/AboutPage.tsx').then(m => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('./pages/ContactPage.tsx').then(m => ({ default: m.ContactPage })))
const PoliciesPage = lazy(() => import('./pages/PoliciesPage.tsx').then(m => ({ default: m.PoliciesPage })))
const CatalogPage = lazy(() => import('./pages/CatalogPage.tsx').then(m => ({ default: m.CatalogPage })))
const ProductPage = lazy(() => import('./pages/ProductPage.tsx').then(m => ({ default: m.ProductPage })))
const FabricGallery = lazy(() => import('./pages/FabricGallery.tsx').then(m => ({ default: m.FabricGallery })))
const CartPage = lazy(() => import('./pages/CartPage.tsx').then(m => ({ default: m.CartPage })))
const SearchPage = lazy(() => import('./pages/SearchPage.tsx').then(m => ({ default: m.SearchPage })))

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Suspense fallback={null}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/politicas" element={<PoliciesPage />} />
            <Route path="/collections" element={<CatalogPage />} />
            <Route path="/collections/:category" element={<CatalogPage />} />
            <Route path='/producto/:handle' element={<ProductPage />} />
            <Route path='/search/:handle' element={<SearchPage />} />
            <Route path="/telas/nino" element={<FabricGallery first={60} gender="boy" />} />
            <Route path="/telas/nina" element={<FabricGallery first={60} gender="girl" />} />
            <Route path="/cart" element={<CartPage />} />
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
