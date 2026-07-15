import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { ChevronDown, ChevronUp, FileText } from 'lucide-react'
import { useLanguage } from '@/lib/i18n.tsx'
import styles from './ProductLongDescription.module.css'

interface ProductLongDescriptionProps {
  description: string | undefined;
}

export function ProductLongDescription({ description }: ProductLongDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  if (!description) return null;

  const cleanedDescription = description.replace(/^##\s+.+\n+/, '');

  return (
    <div className={`${styles.description} mt-8 border border-border rounded-2xl overflow-hidden`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-5 bg-muted/30 hover:bg-muted/50 transition-colors text-left cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-semibold">
            {t('product.fullDescription')}
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      <div
        className={
          `transition-all duration-300 ease-in-out overflow-hidden
					${isExpanded ? "max-h-1250 opacity-100" : "max-h-0 opacity-0"}`
        }
      >
        <div className="p-5 pt-2 prose prose-sm max-w-none prose-headings:font-display prose-headings:text-foreground prose-h3:text-base prose-h3:font-semibold prose-h3:mt-5 prose-h3:mb-2 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-ul:my-2 prose-li:my-0.5">
          <ReactMarkdown>{cleanedDescription}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
