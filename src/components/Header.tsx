import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCollections } from '@/hooks/useCollections.ts'
import { Menu, X, Globe, ChevronDown, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n.tsx'
import { useCartStore } from '@/store/cartStore.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { ImportsListProps } from '@/types/generalTypes.ts'

const menuTitles = {
  es: {
    collections: [
      { menuTitle: 'Accesorios' },
      { menuTitle: 'Lencería de Cunas' },
      { menuTitle: 'Kits' },
    ]
  },
  en: {
    collections: [
      { menuTitle: 'Accessories' },
      { menuTitle: 'Crib Linens' },
      { menuTitle: 'Kits' },
    ]
  },
}

export function Header({ first }: ImportsListProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { collections, loading, error } = useCollections(first)
  const { language, setLanguage, t } = useLanguage()
  const totalQuantity = useCartStore((s) => s.totalQuantity)

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const navLinks = [
    { href: '/nosotros', label: t('nav.about') },
    { href: '/politicas', label: t('nav.policies') },
    { href: '/contacto', label: t('nav.contact') },
  ]

  if (loading) return <p>Cargando productos y colecciones...</p>;
  if (error) return <p>Ocurrió un error al cargar productos o colecciones.</p>;


  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo + Brand Name */}
        <Link to="/">
          <img
            src="/logo-header.png"
            alt="Petit Design"
            width="80"
            height="80"
            className="h-20 w-20 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <Link
            key={'/'}
            to={'/'}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent cursor-pointer p-2 me-1 text-muted-foreground hover:text-primary-foreground"
          >
            {t('nav.home')}
          </Link>

          {/* Catalog Categories */}
          {collections?.map(({ id, handle }, index) => (
            <Link
              key={id}
              to={`/collections/${handle}`}
              className='whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent cursor-pointer p-2 me-1 text-muted-foreground hover:text-primary-foreground'
            >
              {menuTitles[language].collections[index].menuTitle}
            </Link>
          ))}

          {/* Fabric Catalogs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="text-sm font-medium text-muted-foreground hover:text-mint-dark gap-1 px-2 py-2"
              >
                {t('header.fabrics')}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48 bg-background">
              <DropdownMenuItem asChild>
                <Link to="/telas/nino" className="w-full cursor-pointer">
                  {t('nav.boysCatalog')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/telas/nina" className="w-full cursor-pointer">
                  {t('nav.girlsCatalog')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent cursor-pointer p-2 me-1 text-muted-foreground hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center lg:gap-4">
          {/* Shoping Bag */}
          <Link
            to="/cart"
            className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-mint-dark h-9 rounded-md px-3"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="uppercase text-xs font-medium">
              {totalQuantity && totalQuantity > 0 ? ` ${totalQuantity}` : 0}
            </span>
          </Link>

          {/* Language Toggle */}
          <Button
            onClick={toggleLanguage}
            className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-mint-dark h-9 rounded-md px-3"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase text-xs font-medium">
              {language === 'es' ? 'EN' : 'ES'}
            </span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            className="h-10 w-10 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={
          `md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background
          ${isOpen ? 'max-h-150' : 'max-h-0'}`
        }
      >
        <nav className="flex flex-col gap-2 px-4 py-4">
          {/* Catalog Categories */}
          {collections?.map(({ id, handle }, index) => (
            <Link
              key={id}
              to={`/collections/${handle}`}
              className='py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-mint-dark'
            >
              {menuTitles[language].collections[index].menuTitle}
            </Link>
          ))}

          {/* Mobile Fabrics Section */}
          <div className="flex flex-col gap-1">
            <Link
              to="/telas/nino"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-sm text-muted-foreground hover:text-mint-dark"
            >
              {t('header.boysFabricsCatalog')}
            </Link>
            <Link
              to="/telas/nina"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-sm text-muted-foreground hover:text-mint-dark"
            >
              {t('header.girlsFabricsCatalog')}
            </Link>
          </div>

          {/* Mobile Categories with Expandable Subcategories */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-mint-dark"
            >
              {link.label}
            </Link>
          ))}

          <Button
            onClick={toggleLanguage}
            className="justify-start text-muted-foreground hover:text-mint-dark h-9 rounded-md"
          >
            <Globe className="h-4 w-4 mr-2" />
            <span>{language === 'es' ? 'English' : 'Español'}</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
