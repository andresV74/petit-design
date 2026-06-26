import { Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from '@/lib/i18n.tsx'
import { Header } from '@/components/Header.tsx'
import { Footer } from '@/components/Footer.tsx'
import { WhatsAppButton } from '@/components/WhatsAppButton.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { ContactPage } from './pages/ContactPage.tsx'
import { PoliciesPage } from './pages/PoliciesPage.tsx'
import { CatalogPage } from './pages/CatalogPage.tsx'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/politicas" element={<PoliciesPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/catalogo/:category" element={<CatalogPage />} />
            <Route path="/catalogo/:category/:subcategory" element={<CatalogPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}

export default App
