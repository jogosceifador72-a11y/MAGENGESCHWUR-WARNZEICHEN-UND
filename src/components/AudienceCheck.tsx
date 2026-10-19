import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const AudienceCheck: React.FC = () => {
  return (
    <section id="zielgruppe" className="py-20 md:py-28 relative overflow-hidden bg-[#0A160D]/85 border-b border-[#1C3621]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#142817] border border-[#274B2C] rounded-full text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3">
            <Sparkles className="w-3 h-3 text-[#4ADE80]" />
            Ehrliche Transparenz
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Für wen ist dieser Ratgeber gedacht?
          </h2>
          <p className="text-sm sm:text-base text-[#A8C7AA] mt-3 leading-relaxed">
            Wir möchten sicherstellen, dass dieses E-Book genau das Richtige für Ihre persönliche Situation ist. Hier ist unser offener Vergleich:
          </p>
        </motion.div>

        {/* 2-Column Comparison with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Für Sie (Positiv) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#102313]/90 backdrop-blur-xl rounded-3xl p-7 sm:p-9 border-2 border-[#2F6136] shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden group hover:border-[#4ADE80] transition-colors"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#22C55E]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-11 h-11 rounded-2xl bg-[#18361C] border border-[#2E6334] flex items-center justify-center text-[#4ADE80] shadow-[0_0_15px_rgba(74,222,128,0.25)]">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4ADE80] block">
                    Volle Empfehlung
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Dieses E-Book ist für Sie, wenn Sie:
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] text-black flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                    ✓
                  </div>
                  <p className="text-sm text-[#D3E8D5] leading-relaxed">
                    <strong className="text-white">Ihre Magenbeschwerden verstehen wollen:</strong> Ohne sich durch komplizierte, unverständliche Fachtexte und Studien kämpfen zu müssen.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] text-black flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                    ✓
                  </div>
                  <p className="text-sm text-[#D3E8D5] leading-relaxed">
                    <strong className="text-white">Orientierung suchen:</strong> Als Patient, besorgter Angehöriger oder gesundheitsbewusster Mensch, der Klarheit über Diagnose und Behandlung sucht.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] text-black flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                    ✓
                  </div>
                  <p className="text-sm text-[#D3E8D5] leading-relaxed">
                    <strong className="text-white">Sofort anwendbare Praxisleitfäden schätzen:</strong> Die Sie noch heute in Ihrem Alltag bei Ernährung, Medikamenteneinnahme und Vorbereitung umsetzen können.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] text-black flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                    ✓
                  </div>
                  <p className="text-sm text-[#D3E8D5] leading-relaxed">
                    <strong className="text-white">Souverän ins Arztgespräch gehen möchten:</strong> Um auf Augenhöhe Fragen zu stellen und die eigenen Labor- & Spiegelungsbefunde einzuordnen.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-7 border-t border-[#1E3E23]">
              <span className="text-xs font-semibold text-[#86EFAC] flex items-center gap-1.5">
                Ideal für alle, die Eigenverantwortung für ihre Magengesundheit übernehmen wollen.
              </span>
            </div>
          </motion.div>

          {/* Column 2: Nicht für Sie (Ausschluss) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#121B13]/90 backdrop-blur-xl rounded-3xl p-7 sm:p-9 border border-[#263828] shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-11 h-11 rounded-2xl bg-[#1E271F] border border-[#334234] flex items-center justify-center text-neutral-400">
                  <X className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Ehrlicher Ausschluss
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Dieses E-Book ist NICHT für Sie, wenn Sie:
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <p className="text-sm text-[#AABDAE] leading-relaxed">
                    <strong className="text-neutral-200">Ein „Wundermittel“ erwarten:</strong> Das Geschwüre über Nacht magisch verschwinden lässt, ohne dass Sie selbst Lebensstil oder Essgewohnheiten anpassen.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <p className="text-sm text-[#AABDAE] leading-relaxed">
                    <strong className="text-neutral-200">Akademische Habilitationsschriften suchen:</strong> Das Buch ist bewusst kompakt, praxistauglich und auf 30 Seiten für den Alltag komprimiert.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <p className="text-sm text-[#AABDAE] leading-relaxed">
                    <strong className="text-neutral-200">Einen Arztbesuch ersetzen wollen:</strong> Dieses E-Book dient der fundierten Information und Vorbereitung, ersetzt aber keine ärztliche Diagnose oder persönliche Behandlung.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-7 border-t border-[#233525] bg-[#162318]/40 -mx-7 -mb-7 p-7 rounded-b-3xl">
              <div className="flex items-start gap-2.5 text-xs text-[#EAB308]">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-[#FBBF24]" />
                <span className="text-[#FDE68A]">
                  Wichtig: Bei Alarmsignalen wie Bluterbrechen oder schwarzem Teerstuhl muss sofort ein Notarzt (112) konsultiert werden.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
