import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PurchaseItem {
  location: string;
  timeAgo: string;
}

const RECENT_PURCHASES: PurchaseItem[] = [
  { location: 'München, Deutschland', timeAgo: 'Vor 2 Minuten' },
  { location: 'Wien, Österreich', timeAgo: 'Vor 4 Minuten' },
  { location: 'Zürich, Schweiz', timeAgo: 'Vor 7 Minuten' },
  { location: 'Hamburg, Deutschland', timeAgo: 'Vor 11 Minuten' },
  { location: 'Berlin, Deutschland', timeAgo: 'Vor 15 Minuten' },
  { location: 'Köln, Deutschland', timeAgo: 'Vor 18 Minuten' },
  { location: 'Frankfurt am Main, Deutschland', timeAgo: 'Vor 23 Minuten' },
  { location: 'Bern, Schweiz', timeAgo: 'Vor 29 Minuten' },
  { location: 'Graz, Österreich', timeAgo: 'Vor 34 Minuten' },
];

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before first toast shows (3.5 seconds after load)
    const initialTimer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    let hideTimeout: NodeJS.Timeout;
    let nextTimeout: NodeJS.Timeout;

    if (isVisible) {
      // Stay visible for 5.5 seconds
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5500);
    } else {
      // Interval between notifications: 8 to 13 seconds
      const nextDelay = 8000 + Math.random() * 5000;
      nextTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setIsVisible(true);
      }, nextDelay);
    }

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = RECENT_PURCHASES[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-live="polite"
          className="fixed bottom-5 left-5 z-50 max-w-[340px] sm:max-w-[360px] w-full"
        >
          <div className="bg-[#0E1E12]/95 backdrop-blur-2xl border border-[#2B5430] shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(34,197,94,0.15)] rounded-2xl p-4 flex items-start gap-3.5 relative overflow-hidden group">
            {/* Top glowing gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22C55E] via-[#4ADE80] to-[#FBBF24]" />

            {/* Verified icon bubble */}
            <div className="w-10 h-10 rounded-xl bg-[#17331D] border border-[#2B5E33] flex items-center justify-center shrink-0 text-[#4ADE80] mt-0.5 shadow-md">
              <ShoppingBag className="w-5 h-5 text-[#4ADE80]" />
            </div>

            {/* Content - strictly without names as requested */}
            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center gap-1.5 mb-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#4ADE80]">
                  Kauf bestätigt
                </span>
                <span className="text-[#335637]">·</span>
                <span className="text-[11px] text-[#A0C4A3]">
                  {current.timeAgo}
                </span>
              </div>

              <p className="text-xs font-semibold text-white leading-snug truncate">
                Magengeschwür – Warnzeichen & Behandlung
              </p>

              <p className="text-[11px] text-[#8FB592] flex items-center gap-1.5 mt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                Auslieferung nach {current.location}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="text-[#6C8F6E] hover:text-white p-1 rounded-md transition-colors"
              title="Schließen"
              aria-label="Benachrichtigung schließen"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
