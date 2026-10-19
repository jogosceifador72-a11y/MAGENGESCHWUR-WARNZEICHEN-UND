import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavbarProps {
  checkoutUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ checkoutUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <header className="sticky top-0 z-40 bg-[#0C1A10]/85 backdrop-blur-xl border-b border-[#1E3622] transition-colors">
      {/* Top Animated Reading Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22C55E] via-[#4ADE80] to-[#FBBF24] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#top" 
          className="text-base sm:text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E] group-hover:scale-125 transition-transform" />
          <span className="bg-gradient-to-r from-white via-[#E8F5E9] to-[#C8E6C9] bg-clip-text text-transparent">
            Magengeschwür Ratgeber
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#A3C7A5]">
          <a href="#loesung" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Was löst es?
          </a>
          <a href="#inhalte" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Kapitelübersicht
          </a>
          <a href="#zielgruppe" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Für wen?
          </a>
          <a href="#orientierung" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Selbst-Check
          </a>
          <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Häufige Fragen
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#22C55E] to-[#15803D] hover:from-[#16A34A] hover:to-[#166534] rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all whitespace-nowrap shrink-0 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>E-Book sichern · 30,31 €</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#0F2113]/95 backdrop-blur-2xl border-b border-[#234228] px-6 py-5 space-y-4 shadow-2xl"
        >
          <div className="flex flex-col space-y-3 text-sm font-medium text-neutral-200">
            <a 
              href="#loesung" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4ADE80] transition-colors"
            >
              Was löst dieses E-Book?
            </a>
            <a 
              href="#inhalte" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4ADE80] transition-colors"
            >
              30-Seiten Kapitelübersicht
            </a>
            <a 
              href="#zielgruppe" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4ADE80] transition-colors"
            >
              Für wen ist der Ratgeber?
            </a>
            <a 
              href="#orientierung" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4ADE80] transition-colors"
            >
              Orientierungs-Check
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4ADE80] transition-colors"
            >
              Häufige Fragen (FAQ)
            </a>
          </div>

          <div className="pt-3 border-t border-[#234228]">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#22C55E] to-[#15803D] text-white text-xs font-bold rounded-xl text-center shadow-lg"
            >
              <span>E-Book direkt herunterladen · 30,31 €</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};
