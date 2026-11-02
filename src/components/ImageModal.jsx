import React, { useEffect } from 'react';
import { X, Tag } from 'lucide-react';

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex-shrink-0">
              <Tag className="w-3 h-3" /> {image.category}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate">{image.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Body (100% visible, object-contain, never cropped) */}
        <div className="flex-1 overflow-auto p-2 sm:p-4 flex items-center justify-center bg-black/60 min-h-[220px] sm:min-h-[350px]">
          <img 
            src={image.src} 
            alt={image.title} 
            className="max-h-[66vh] max-w-full w-auto object-contain rounded-lg shadow-xl"
          />
        </div>

        {/* Modal Caption Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-950 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
          <p className="leading-relaxed">{image.description}</p>
        </div>
      </div>
    </div>
  );
}
