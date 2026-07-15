import { Link } from 'react-router-dom'
import { useLanguage } from '@/lib/i18n.tsx'
import { catalogContent } from '@/data/catalogContent.ts'

interface BreadcrumbsProps {
	category?: string
	subcategory?: string
	isProduct: boolean
}

const extraProductClasses = 'justify-start mb-7'
const extraCatalogClasses = 'justify-center mb-8 text-sm'

export function Breadcrumbs({ category, subcategory, isProduct }: BreadcrumbsProps) {
	const { language } = useLanguage()
	const t = catalogContent[language]

	const getTitlesBySlug = (slug: string | undefined, field: 'title' | 'description') => {
    if (!slug) {
      return t.pageTitle
    }

    return t.categories.find(category => category.slug === slug)?.[field]
  }

	return (
		<>
			{subcategory && (
				<div className={`flex flex-wrap items-center gap-x-2 text-muted-foreground ${isProduct ? extraProductClasses : extraCatalogClasses}`}>
					<Link to="/catalogo" className="hover:text-mint underline hover:no-underline">
						{t.pageTitle}
					</Link>
					<span>/</span>
					<Link to={`/catalogo/${category}`} className="hover:text-mint underline hover:no-underline">
						{getTitlesBySlug(category, 'title')}
					</Link>
					<span>/</span>
					{isProduct ? (
						<Link to={`/catalogo/${category}/${subcategory}`} className="hover:text-mint underline hover:no-underline">
							{getTitlesBySlug(subcategory, 'title')}
						</Link>
					) : (
            <span>
              {getTitlesBySlug(subcategory, 'title')}
            </span>
					)}
				</div>
			)}
			{!subcategory && category && isProduct && (
				<div className="flex flex-wrap items-center justify-start gap-x-2 mb-7 text-muted-foreground">
					<Link to="/catalogo" className="hover:text-mint underline hover:no-underline">
						{t.pageTitle}
					</Link>
					<span>/</span>
					<Link to={`/catalogo/${category}`} className="hover:text-mint underline hover:no-underline">
						{getTitlesBySlug(category, 'title')}
					</Link>
				</div>
			)}
		</>
	)
}
