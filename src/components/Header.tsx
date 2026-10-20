import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCollectionsMenu } from '@/hooks/useCollectionsMenu.ts'
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
import { LoadingIndicator } from '@/components/ui/loadingIndicator.tsx'
import { ErrorMessage } from '@/components/ui/errorMessage.tsx'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { menu, loading, error } = useCollectionsMenu()
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

  if (loading) return <LoadingIndicator type="line-simple" size="lg" label={t('catalog.loading')} />
  if (error) return <ErrorMessage message={t('product.error')} />


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
          {menu?.map((item) => (
            item.items.length === 0 ? (
              <Link
                key={item.id}
                to={`/collections/${item.resource?.handle}`}
                className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent cursor-pointer p-2 me-1 text-muted-foreground hover:text-primary-foreground"
              >
                {item.title}
              </Link>
            ) : (
              <DropdownMenu key={item.id}>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="text-sm font-medium text-muted-foreground hover:text-mint-dark gap-1 px-2 py-2"
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48 bg-background">
                  {item.items.map((subitem) => (
                      <DropdownMenuItem asChild key={subitem.id}>
                        <Link to={`/collections/${subitem.resource?.handle}`} className="w-full cursor-pointer">
                          {subitem.title}
                        </Link>
                      </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
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
          {/* Shopping Bag */}
          <Link
            to="/cart"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-mint-dark h-9 rounded-md px-3"
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
          {menu?.map((item) => (
            item.items.length === 0 ? (
              <Link
                key={item.id}
                to={`/collections/${item.resource?.handle}`}
                className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent cursor-pointer py-2 text-muted-foreground"
              >
                {item.title}
              </Link>
            ) : (
              item.items.map((subitem) => (
                <Link
                  to={`/collections/${subitem.resource?.handle}`}
                  className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent cursor-pointer py-2 text-muted-foreground"
                  key={subitem.id}
                >
                  {subitem.title}
                </Link>
              ))
            )
          ))}

          {/* Mobile Fabrics Section */}
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
