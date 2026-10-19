import React from 'react';
import coverBgImage from '../assets/images/magengeschwuer_cover_bg_1792175446802.jpg';
import { motion } from 'motion/react';
import { Eye, Sparkles } from 'lucide-react';

interface EbookCoverMockupProps {
  onOpenPreview?: () => void;
  className?: string;
  size?: 'normal' | 'large';
}

export const EbookCoverMockup: React.FC<EbookCoverMockupProps> = ({
  onOpenPreview,
  className = '',
  size = 'normal'
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group select-none ${className}`}
    >
      {/* Radiant ambient glow behind book */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#22C55E]/30 via-[#10B981]/20 to-[#F59E0B]/20 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700 pointer-events-none animate-pulse-glow" />

      {/* Floating 3D Book Container */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mx-auto transition-transform duration-500 ease-out transform group-hover:-translate-y-2 group-hover:rotate-1"
        style={{ perspective: '1400px' }}
      >
        <div 
          className="relative bg-white rounded-r-2xl rounded-l-md shadow-2xl overflow-hidden border border-[#4ADE80]/30 aspect-[3/4] max-w-[340px] md:max-w-[390px] mx-auto flex flex-col justify-between"
          style={{
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(34, 197, 94, 0.25), -14px 12px 30px rgba(0,0,0,0.5)'
          }}
        >
          {/* Book Spine Shadow / Crease */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/35 via-black/15 to-transparent z-20 pointer-events-none" />
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-white/40 z-20 pointer-events-none" />

          {/* Background image & aesthetic graphic layering */}
          <div className="absolute inset-0 z-0">
            <img 
              src={coverBgImage} 
              alt="Magengeschwür E-Book Cover - Warnzeichen und Behandlung"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Subtle soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFA]/92 via-[#FBFBFA]/45 to-transparent" />
            
            {/* Organic curve inspired by user's cover artwork */}
            <svg 
              className="absolute -left-10 -top-10 w-64 h-96 opacity-30 text-[#8CA889] pointer-events-none"
              viewBox="0 0 200 300"
              fill="currentColor"
            >
              <path d="M0,0 C80,30 140,110 110,210 C90,270 40,300 0,300 Z" />
            </svg>

            {/* Subtle anatomical stomach outline icon */}
            <div className="absolute top-32 left-4 w-12 h-16 opacity-35 pointer-events-none text-[#3D5A3B]">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M28 8c0 4-4 8-8 12-5 5-7 12-7 19 0 12 10 21 22 21 11 0 19-7 21-17 3-13-3-22-9-27-3-2-5-4-5-8" />
                <path d="M28 8h12" />
                <path d="M23 32c4 4 10 4 14 0" />
              </svg>
            </div>
          </div>

          {/* Front Cover Content Typography */}
          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between">
            {/* Header Block */}
            <div className="text-center pt-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#4A6B48] uppercase block mb-1">
                Medizinischer Ratgeber
              </span>
              <h3 className="font-['Outfit',sans-serif] text-2xl md:text-3xl font-extrabold tracking-tight text-[#233521] uppercase">
                MAGENGESCHWÜR
              </h3>
              <div className="w-12 h-[2px] bg-[#3D5A3B] mx-auto my-2 rounded-full" />
              <p className="text-xs md:text-sm font-medium text-[#2F422C] leading-snug max-w-[240px] mx-auto">
                Warnzeichen, Ursachen und effektive Behandlungsmethoden
              </p>
              <p className="text-[11px] text-[#556B52] mt-1 italic">
                Ein medizinischer Ratgeber für Patienten und Interessierte
              </p>
            </div>

            {/* Bottom Badge Bar */}
            <div className="pt-4 flex items-center justify-between text-[11px] font-semibold text-[#2F422C] border-t border-black/10 bg-white/75 backdrop-blur-md rounded-xl p-2.5 shadow-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                30 Seiten PDF
              </span>
              <span className="text-[#2F422C] font-bold">Sofort-Download</span>
            </div>
          </div>

          {/* Interactive Flip/Preview Prompt on Hover */}
          {onOpenPreview && (
            <button
              onClick={onOpenPreview}
              type="button"
              className="absolute inset-0 z-30 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center backdrop-blur-xs cursor-pointer"
            >
              <span className="bg-gradient-to-r from-[#22C55E] to-[#15803D] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-2xl transform group-hover:scale-105 transition-transform flex items-center gap-2">
                <Eye className="w-4 h-4 text-white" />
                Leseprobe & Inhaltsverzeichnis
              </span>
              <span className="text-[11px] text-white/90 mt-2 font-medium">Klicken für kostenlose Vorschau</span>
            </button>
          )}

          {/* Glossy Sheen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none z-20" />
        </div>

        {/* Realistic Book Pages Rim (Right side) */}
        <div 
          className="absolute right-0 top-2 bottom-2 w-3.5 bg-gradient-to-r from-neutral-300 via-neutral-100 to-white rounded-r-sm shadow-md border-y border-neutral-300 pointer-events-none"
          style={{ transform: 'translateX(9px)' }}
        />
      </motion.div>

      {/* Trust micro-callout beneath book */}
      <div className="mt-5 text-center">
        <p className="text-xs text-[#9FC0A3] flex items-center justify-center gap-2 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
          Digitale Ausgabe · Sofortige E-Mail-Zustellung
        </p>
      </div>
    </motion.div>
  );
};
