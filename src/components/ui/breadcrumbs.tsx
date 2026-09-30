import { Link } from 'react-router-dom'
import { useLanguage } from '@/lib/i18n.tsx'

interface BreadcrumbsProps {
	category?: {
		node: {
			title: string
			handle: string
		}
	}
	isProduct: boolean
}

const extraProductClasses = 'justify-start mb-7'
const extraCatalogClasses = 'justify-center mb-8 text-sm'

export function Breadcrumbs({ category, isProduct }: BreadcrumbsProps) {
	const { t } = useLanguage()

	return (
		<>
			<div className={`flex flex-wrap items-center gap-x-2 text-muted-foreground text-xs ${isProduct ? extraProductClasses : extraCatalogClasses}`}>
				<Link to="/collections" className="hover:text-mint underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
					{t('catalog.title')}
				</Link>
				<span>/</span>
				<Link to={`/collections/${category?.node.handle}`} className="hover:text-mint underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
					{category?.node.title}
				</Link>
			</div>
		</>
	)
}
