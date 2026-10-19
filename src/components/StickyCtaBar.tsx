import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StickyCtaBarProps {
  checkoutUrl: string;
}

export const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ checkoutUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#0C1A10]/95 backdrop-blur-2xl border-t border-[#254A2B] shadow-[0_-10px_35px_rgba(0,0,0,0.6)] py-3 px-4"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            {/* Book Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#22C55E] to-[#15803D] text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  E-Book: Magengeschwür – Warnzeichen & Behandlung
                </div>
                <div className="text-[11px] text-[#A3C7A5] flex items-center gap-2 font-medium">
                  <span>30 Seiten PDF</span>
                  <span className="text-[#355B38]">·</span>
                  <span className="text-[#4ADE80] font-black text-xs">30,31 €</span>
                  <span className="text-[#355B38]">·</span>
                  <span className="text-[#8FB592] hidden sm:inline">Sofort-Download</span>
                </div>
              </div>
            </div>

            {/* CTA Button with 30,31 € */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all whitespace-nowrap transform hover:scale-105 active:scale-100"
              >
                <span>Jetzt für 30,31 € sichern</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setIsDismissed(true)}
                className="text-neutral-400 hover:text-white p-1.5 rounded-lg transition-colors"
                title="Leiste ausblenden"
                aria-label="Leiste ausblenden"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
