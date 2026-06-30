import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { categories } from '@/data/categories.ts'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/nosotros', label: t('nav.about') },
    { href: '/contacto', label: t('nav.contact') },
    { href: '/politicas', label: t('nav.policies') },
  ];

  return (
    <header className="sticky top-0 z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo + Brand Name */}
        <Link to="/">
          <img
            src="/logo-header.png"
            alt="Petit Design"
            width="60"
            height="60"
            className="h-20 w-20 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-mint-dark"
            >
              {link.label}
            </Link>
          ))}

          {/* Categories Dropdown with Subcategories */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="font-medium text-muted-foreground hover:text-mint-dark gap-1 px-2 py-2"
              >
                {t('nav.categories')}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 bg-background">
              {categories.map(cat => (
                cat.subcategories.length > 0 ? (
                  <DropdownMenuSub key={cat.id}>
                    <DropdownMenuSubTrigger className="cursor-pointer">
                      {language === 'es' ? cat.name_es : cat.name_en}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="bg-background">
                      {cat.subcategories.map(sub => (
                        <DropdownMenuItem key={sub.slug} asChild>
                          <Link
                            to={`/catalogo/${cat.slug}/${sub.slug}`}
                            className="w-full cursor-pointer"
                          >
                            {language === 'es' ? sub.name_es : sub.name_en}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem key={cat.id} asChild>
                    <Link to={`/catalogo/${cat.slug}`} className="w-full cursor-pointer">
                      {language === 'es' ? cat.name_es : cat.name_en}
                    </Link>
                  </DropdownMenuItem>
                )
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/catalogo" className="w-full cursor-pointer text-mint-dark font-medium">
                  {language === 'es' ? 'Ver todo el catálogo' : 'View full catalog'}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Fabric Catalogs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="text-sm font-medium text-muted-foreground hover:text-mint-dark gap-1 px-2 py-2"
              >
                {language === 'es' ? 'Telas' : 'Fabrics'}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48 bg-background">
              <DropdownMenuItem asChild>
                <Link to="/telas/nino" className="w-full cursor-pointer">
                  {language === 'es' ? 'Catálogo Niño' : "Boy's Catalog"}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/telas/nina" className="w-full cursor-pointer">
                  {language === 'es' ? 'Catálogo Niña' : "Girl's Catalog"}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <Button
            onClick={toggleLanguage}
            className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-mint-dark h-9 rounded-md px-3"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase text-xs font-medium">{language}</span>
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
        <nav className="flex flex-col gap-2 px-4 pb-4">
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

          {/* Mobile Categories with Expandable Subcategories */}
          <div className="py-2">
            <p className="text-sm font-semibold text-foreground mb-2">{t('nav.categories')}</p>
            <div className="flex flex-col gap-1 pl-2">
              {categories.map(cat => (
                <div key={cat.id}>
                  {cat.subcategories.length > 0 ? (
                    <>
                      <button
                        onClick={() => setExpandedMobileCategory(
                          expandedMobileCategory === cat.id ? null : cat.id
                        )}
                        className="flex items-center justify-between w-full py-1.5 text-sm text-muted-foreground hover:text-mint-dark"
                      >
                        <span>{language === 'es' ? cat.name_es : cat.name_en}</span>
                        <ChevronRight
                          className={
                            `h-4 w-4 transition-transform
                            ${expandedMobileCategory === cat.id && "rotate-90"}`
                          }
                        />
                      </button>
                      <div
                        className={
                          `overflow-hidden transition-all duration-200 pl-4
                          ${expandedMobileCategory === cat.id ? "max-h-48" : "max-h-0"}`
                        }
                      >
                        {cat.subcategories.map(sub => (
                          <Link
                            key={sub.slug}
                            to={`/catalogo/${cat.slug}/${sub.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 text-sm text-muted-foreground hover:text-mint-dark"
                          >
                            {language === 'es' ? sub.name_es : sub.name_en}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={`/catalogo/${cat.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="py-1.5 text-sm text-muted-foreground hover:text-mint-dark block"
                    >
                      {language === 'es' ? cat.name_es : cat.name_en}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/catalogo"
                onClick={() => setIsOpen(false)}
                className="py-1.5 text-sm text-mint-dark font-medium hover:text-mint"
              >
                {language === 'es' ? 'Ver todo el catálogo' : 'View full catalog'}
              </Link>
            </div>
          </div>

          {/* Mobile Fabrics Section */}
          <div className="py-2">
            <p className="text-sm font-semibold text-foreground mb-2">
              {language === 'es' ? 'Catálogo de Telas' : 'Fabric Catalog'}
            </p>
            <div className="flex flex-col gap-1 pl-2">
              <Link
                to="/telas/nino"
                onClick={() => setIsOpen(false)}
                className="py-1.5 text-sm text-muted-foreground hover:text-mint-dark"
              >
                {language === 'es' ? 'Catálogo Niño' : "Boy's Catalog"}
              </Link>
              <Link
                to="/telas/nina"
                onClick={() => setIsOpen(false)}
                className="py-1.5 text-sm text-muted-foreground hover:text-mint-dark"
              >
                {language === 'es' ? 'Catálogo Niña' : "Girl's Catalog"}
              </Link>
            </div>
          </div>

          <Button
            onClick={toggleLanguage}
            className="justify-start px-3 text-muted-foreground hover:text-mint-dark h-9 rounded-md"
          >
            <Globe className="h-4 w-4 mr-2" />
            <span>{language === 'es' ? 'English' : 'Español'}</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
