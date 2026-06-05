import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from '@/lib/i18n.tsx'
import { Header } from '@/components/Header.tsx'
import { Footer } from '@/components/Footer.tsx'
import { WhatsAppButton } from '@/components/WhatsAppButton.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10">
          <header className="rounded-2xl bg-slate-900 p-6 text-white">
            <h1 className="text-3xl font-bold">Petit Design Studio</h1>
            <p className="mt-2 text-slate-300">
              React Router + Tailwind + TypeScript starter.
            </p>
            <nav className="mt-4 flex gap-3">
              <Link
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/20"
                to="/"
              >
                Home
              </Link>
              <Link
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/20"
                to="/about"
              >
                About
              </Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}

export default App
