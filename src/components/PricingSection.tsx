import React from 'react';
import { ArrowRight, Check, ShieldCheck, Lock, Sparkles, Clock, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingSectionProps {
  checkoutUrl: string;
  onOpenPreview: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ checkoutUrl, onOpenPreview }) => {
  return (
    <section id="preis" className="py-20 md:py-28 relative overflow-hidden bg-[#0A160D]/90 border-y border-[#1C3621]">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#22C55E]/15 via-[#10B981]/10 to-[#F59E0B]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#142817] border border-[#274B2C] rounded-full text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3 shadow-[0_0_12px_rgba(74,222,128,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
            Investition in Ihre Gesundheit
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Sichern Sie sich Ihren Leitfaden
          </h2>
          <p className="text-sm sm:text-base text-[#A8C7AA] mt-3 leading-relaxed">
            Kein Abonnement, keine versteckten Folgekosten. Einmaliger Kauf mit sofortigem und dauerhaftem Download.
          </p>
        </motion.div>

        {/* Pricing Card with Motion Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-[#122616] via-[#152F1A] to-[#0F2012] rounded-3xl border-2 border-[#37703F] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(34,197,94,0.15)] p-7 sm:p-10 relative overflow-hidden"
        >
          {/* Top badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-r from-[#22C55E] to-[#15803D] text-white text-[11px] font-bold tracking-wider uppercase px-5 py-2 rounded-bl-2xl shadow-lg flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-current" />
            Offizielle Ausgabe
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Col: Included features (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-[#4ADE80]">
                  Komplettpaket für Patienten & Angehörige
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Magengeschwür – Warnzeichen & Behandlung
                </h3>
                <p className="text-xs text-[#A0C4A3] mt-1">
                  Der 30-seitige medizinische Praxisratgeber im PDF-Format
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#234828]">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#D3E8D5]">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">30 Seiten klares Wissen:</strong> Symptome, Ursachen & Heilung ohne Fachchinesisch.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#D3E8D5]">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Gastroskopie & Biopsie:</strong> Untersuchungsmethoden und Vorbereitung ohne Angst.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#D3E8D5]">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Gefährliche Schmerzmittel meiden:</strong> Wichtige Regeln zu NSAR & Magenschutz.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#D3E8D5]">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Magenfreundliche Ernährung:</strong> Praktische Ampelliste für den Alltag.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#D3E8D5]">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Druckbare Vorlage:</strong> Fragenkatalog fürs Arztgespräch & Notfallplan.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#D3E8D5]">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Sofortige Auslieferung:</strong> PDF-Download direkt per E-Mail nach Kauf.</span>
                </div>
              </div>
            </div>

            {/* Right Col: Price & Big CTA (5 cols) */}
            <div className="md:col-span-5 bg-[#0D1C10]/90 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-[#2D5832] shadow-2xl flex flex-col justify-between text-center space-y-5">
              <div>
                <span className="text-xs font-semibold text-[#8FB592] uppercase tracking-wide">
                  Regulärer Festpreis
                </span>
                <div className="flex items-baseline justify-center gap-1.5 mt-1.5">
                  <span className="font-['Outfit',sans-serif] text-5xl sm:text-6xl font-black text-white tracking-tight">
                    30,31
                  </span>
                  <span className="text-2xl font-bold text-[#4ADE80]">
                    €
                  </span>
                </div>
                <span className="text-[11px] text-[#A0C4A3] block mt-1">
                  Einmalige Zahlung · Sofortiger Download
                </span>
              </div>

              {/* Direct Hotmart Checkout Button with 30,31 € */}
              <div className="space-y-2.5">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] hover:from-[#16A34A] hover:to-[#166534] text-white text-sm sm:text-base font-bold rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] text-center cursor-pointer"
                >
                  <span>Jetzt für 30,31 € kaufen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenPreview}
                  className="text-xs text-[#4ADE80] hover:text-white hover:underline font-medium block mx-auto cursor-pointer transition-colors"
                >
                  Erst Inhaltsverzeichnis ansehen
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-3 border-t border-[#1C3820] space-y-2 text-[11px] text-[#8FB592]">
                <div className="flex items-center justify-center gap-1.5 text-[#C8E4CA] font-medium">
                  <Lock className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span>256-Bit SSL-verschlüsselte Abwicklung</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-[#7F9E82] text-[10px]">
                  <span>Hotmart Käuferschutz</span>
                  <span>·</span>
                  <span>Sofortige E-Mail-Lieferung</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reassurance Note */}
        <div className="mt-8 text-center text-xs text-[#8FB592] max-w-xl mx-auto leading-relaxed">
          💡 Hinweis: Nach dem Klick gelangen Sie direkt zum sicheren Bestellformular unseres Zahlungsabwicklers <strong>Hotmart</strong>. Direkt nach dem Bezahlvorgang erhalten Sie eine E-Mail mit Ihrem persönlichen Download-Link zur PDF-Datei.
        </div>
      </div>
    </section>
  );
};
