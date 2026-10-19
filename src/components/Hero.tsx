import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Download, Sparkles, Check, Clock, Zap } from 'lucide-react';
import { EbookCoverMockup } from './EbookCoverMockup';
import { motion } from 'motion/react';

interface HeroProps {
  checkoutUrl: string;
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ checkoutUrl, onOpenPreview }) => {
  return (
    <section id="top" className="relative pt-10 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Dynamic Ambient Glowing Orbs */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#22C55E]/15 via-[#10B981]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-[#F59E0B]/12 via-[#16A34A]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#1E3E26]/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & Value Proposition (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Editorial Kicker */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#162E1A]/80 border border-[#2B5430] rounded-full text-xs font-semibold text-[#4ADE80] shadow-[0_0_15px_rgba(74,222,128,0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>Praktischer medizinischer Ratgeber · 30 Seiten</span>
            </motion.div>

            {/* Main Headline */}
            <h1 
              className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12]" 
              style={{ textWrap: 'balance' }}
            >
              MAGENGESCHWÜR <br />
              <span className="bg-gradient-to-r from-[#4ADE80] via-[#86EFAC] to-[#FCD34D] bg-clip-text text-transparent font-bold">
                Warnzeichen & Behandlung
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg font-medium text-[#C8DEC9] leading-relaxed max-w-xl">
              Alarmsignale früh erkennen, die ärztliche Behandlung verstehen und die Heilung im Alltag gezielt unterstützen.
            </p>

            {/* Core Description */}
            <p className="text-sm text-[#A0BCA2] leading-relaxed max-w-xl">
              Ohne lange Theorie und ohne unverständliches Fachchinesisch zeigt Ihnen dieses 30-seitige E-Book Schritt für Schritt, wie Sie Beschwerden richtig einordnen, ruhig ins Arztgespräch gehen und typische Fehler im Alltag vermeiden. Ganz in Ihrem Tempo.
            </p>

            {/* Key Quick Bullets with emerald icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#E3F2E3] font-medium max-w-xl">
              <div className="flex items-center gap-2.5 bg-[#132717]/60 border border-[#234227] px-3 py-2 rounded-xl">
                <span className="w-4 h-4 rounded-full bg-[#22C55E]/20 text-[#4ADE80] flex items-center justify-center shrink-0 font-bold">✓</span>
                <span>Geschwür vs. Gastritis exakt unterscheiden</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#132717]/60 border border-[#234227] px-3 py-2 rounded-xl">
                <span className="w-4 h-4 rounded-full bg-[#22C55E]/20 text-[#4ADE80] flex items-center justify-center shrink-0 font-bold">✓</span>
                <span>Ablauf von Magenspiegelung & Biopsie</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#132717]/60 border border-[#234227] px-3 py-2 rounded-xl">
                <span className="w-4 h-4 rounded-full bg-[#22C55E]/20 text-[#4ADE80] flex items-center justify-center shrink-0 font-bold">✓</span>
                <span>Riskante Schmerzmittel-Fallen meiden</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#132717]/60 border border-[#234227] px-3 py-2 rounded-xl">
                <span className="w-4 h-4 rounded-full bg-[#22C55E]/20 text-[#4ADE80] flex items-center justify-center shrink-0 font-bold">✓</span>
                <span>Sofortiger digitaler PDF-Download</span>
              </div>
            </div>

            {/* Price & CTA Action Block */}
            <div className="pt-4 border-t border-[#1F3D24] space-y-4 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 justify-between bg-[#112314]/90 backdrop-blur-xl p-5 rounded-2xl border border-[#2A512F] shadow-2xl">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-black text-white">
                      30,31 €
                    </span>
                    <span className="text-xs text-[#9EC4A1] font-medium">
                      Einmalzahlung · Kein Abo
                    </span>
                  </div>
                  <span className="text-[11px] text-[#4ADE80] flex items-center gap-1.5 mt-1 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    Sofortiger E-Mail-Zugang nach Zahlungsbestätigung
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] hover:from-[#16A34A] hover:to-[#166534] text-white text-sm font-bold rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] text-center cursor-pointer"
                  >
                    <span>Jetzt für 30,31 € sichern</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Secondary CTA & Preview Button */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#A0C4A3]">
                <button
                  type="button"
                  onClick={onOpenPreview}
                  className="text-[#4ADE80] hover:text-white font-semibold flex items-center gap-1.5 underline decoration-[#4ADE80]/50 hover:decoration-white transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Inhaltsverzeichnis & Leseprobe anzeigen</span>
                </button>
                <span className="text-neutral-600 hidden sm:inline">|</span>
                <span className="text-[#9BB89E] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
                  100% sichere Bezahlung via Hotmart
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Book Mockup (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <EbookCoverMockup onOpenPreview={onOpenPreview} size="large" />

            {/* Quick Specs Pill strip */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 w-full max-w-[340px] flex items-center justify-around bg-[#122615]/80 backdrop-blur-md border border-[#254A2A] py-2.5 px-3 rounded-xl text-[11px] font-medium text-[#C8E1C9] shadow-xl"
            >
              <span className="flex items-center gap-1 text-[#4ADE80]">
                <Download className="w-3.5 h-3.5" />
                Digitales PDF
              </span>
              <span className="text-[#2F5733]">·</span>
              <span>30 Seiten Praxis</span>
              <span className="text-[#2F5733]">·</span>
              <span className="text-[#FBBF24]">Sofort per E-Mail</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
