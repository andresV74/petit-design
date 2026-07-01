// import { useNavigate } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// import { useLanguage } from '@/lib/i18n';

interface FabricZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
  name?: string;
  fabric?: { id: string; name: string; image: string } | null;
  onPrevious?: () => void;
  onNext?: () => void;
  onSelect?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export function FabricZoomModal({
  isOpen,
  onClose,
  image,
  name,
  fabric,
  onPrevious,
  onNext,
  // onSelect,
  currentIndex = 0,
  totalCount = 0
}: FabricZoomModalProps) {
  // const { language } = useLanguage();
  // const navigate = useNavigate();

  // Use fabric object if provided, otherwise use image/name props
  const displayImage = fabric?.image || image || '';
  const displayName = fabric?.name || name || '';

  if (!isOpen) return null;

  // const handleSelect = () => {
  //   if (onSelect) {
  //     onSelect();
  //   } else if (fabric) {
  //     sessionStorage.setItem('selectedFabric', JSON.stringify(fabric));
  //     navigate('/catalogo');
  //     onClose();
  //   }
  // };

  // TODO: change this to a dialog tag
  // TODO: put back and fixed interaction to preselect a fabric
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-background rounded-3xl shadow-2xl p-6 max-w-lg w-full mx-4 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Navigation arrows for multiple fabrics */}
        {onPrevious && onNext && totalCount > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrevious(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors z-10 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors z-10 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Large fabric image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg max-w-sm mx-auto">
          <img
            src={displayImage}
            alt={displayName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fabric name and counter */}
        <div className="text-center mb-4">
          <h3 className="font-display text-xl font-semibold">
            {displayName}
          </h3>
          {totalCount > 1 && (
            <p className="text-sm text-muted-foreground mt-1">
              {currentIndex + 1} / {totalCount}
            </p>
          )}
        </div>

        {/* Action button */}
        {/* {(onSelect || fabric) && (
          <>
            <Button
              className="w-full gap-2 h-11 rounded-md px-8"
              onClick={handleSelect}
            >
              {language === 'es' ? 'Marca esta tela como favorita' : 'Mark this fabric as favorite'}
              <ChevronRight className="h-4 w-4" />
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-3">
              {language === 'es'
                ? 'Te llevaremos a ver los productos disponibles'
                : 'We\'ll take you to see available products'}
            </p>
          </>
        )} */}
      </div>
    </div>
  );
}
