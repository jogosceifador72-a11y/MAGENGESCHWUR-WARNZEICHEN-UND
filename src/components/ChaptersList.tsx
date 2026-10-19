import React from 'react';
import { BookOpen, Check, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ChaptersListProps {
  onOpenPreview: () => void;
  checkoutUrl: string;
}

const CHAPTERS = [
  {
    step: '01',
    title: 'Ursachen & Magenschleimhaut',
    tag: 'Kapitel 1 · S. 4–8',
    description: 'Wie ein Geschwür im Magen entsteht: Säure-Basen-Ungleichgewicht, das Bakterium Helicobacter pylori und warum der Schutzfilm versagt.',
  },
  {
    step: '02',
    title: 'Symptome & Alarmsignale',
    tag: 'Kapitel 2 · S. 9–14',
    description: 'Typische und atypische Beschwerden: Nüchternschmerz, Druck im Oberbauch und unübersehbare Warnsignale wie Teerstuhl richtig deuten.',
  },
  {
    step: '03',
    title: 'Diagnostik: Magenspiegelung & Atemtest',
    tag: 'Kapitel 3 · S. 15–19',
    description: 'Untersuchungsmethoden verständlich erklärt: Vorbereitung auf die Gastroskopie, Gewebeentnahme (Biopsie) und Sedierung ohne Angst.',
  },
  {
    step: '04',
    title: 'Therapie & Medikamente',
    tag: 'Kapitel 4 · S. 20–24',
    description: 'Säureblocker (PPI), Antibiotika zur Keimbeseitigung und gefährliche Wechselwirkungen mit Schmerzmitteln (Ibuprofen, NSAR) aufgedeckt.',
  },
  {
    step: '05',
    title: 'Magenfreundliche Ernährung & Alltag',
    tag: 'Kapitel 5 · S. 25–28',
    description: 'Was der Magenschleimhaut bei der Regeneration hilft: Heilkost, schonende Zubereitungen, Reizstoffe und effektive Entlastungsmethoden.',
  },
  {
    step: '06',
    title: 'Vorbereitung auf das Arztgespräch',
    tag: 'Kapitel 6 · S. 29–30',
    description: 'Checkliste mit den wichtigsten Fragen an den Arzt, Symptomtagebuch und konkreter Notfallplan für eine strukturierte Betreuung.',
  },
];

export const ChaptersList: React.FC<ChaptersListProps> = ({ onOpenPreview, checkoutUrl }) => {
  return (
    <section id="inhalte" className="py-20 md:py-28 relative overflow-hidden bg-[#0C1B0F]/90">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-[#16A34A]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#142817] border border-[#274B2C] rounded-full text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3">
              <Sparkles className="w-3 h-3 text-[#4ADE80]" />
              Kompaktes Wissen auf 30 Seiten
            </span>
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Was erwartet Sie im E-Book?
            </h2>
            <p className="text-sm sm:text-base text-[#A8C7AA] mt-3 leading-relaxed">
              Jedes Kapitel ist auf den Punkt geschrieben: Keine endlose Seitenfüllerei, sondern präzise Handlungsschritte für Betroffene und Angehörige.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPreview}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#162D1B] hover:bg-[#1E3B24] border border-[#2B5430] hover:border-[#4ADE80] text-white text-xs font-bold rounded-xl shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 text-[#4ADE80]" />
              <span>Detailliertes Inhaltsverzeichnis</span>
            </button>
          </div>
        </motion.div>

        {/* 6 Chapters Grid with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {CHAPTERS.map((ch, idx) => (
            <motion.div
              key={ch.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#102213]/85 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-[#214225] shadow-xl hover:border-[#4ADE80]/50 hover:shadow-[0_10px_30px_rgba(74,222,128,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#4ADE80]/60 group-hover:text-[#4ADE80] transition-colors">
                    {ch.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#86EFAC] bg-[#16331C] border border-[#264D2B] px-3 py-1 rounded-md">
                    {ch.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#86EFAC] transition-colors">
                  {ch.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0C0A2] leading-relaxed">
                  {ch.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#1C3A20] flex items-center text-xs text-[#4ADE80] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Praxistauglich aufbereitet
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Banner with 30,31 € checkout button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#142A17] via-[#1B3820] to-[#122615] border border-[#2E5833] rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="space-y-1.5 text-center sm:text-left relative z-10">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Bereit für fundiertes Magen-Wissen ohne Fachchinesisch?
            </h4>
            <p className="text-xs sm:text-sm text-[#B7D8B9] max-w-lg">
              Sichern Sie sich den 30-seitigen Leitfaden im praktischen PDF-Format für nur <strong>30,31 €</strong> mit sofortigem Zugriff.
            </p>
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all shrink-0 transform hover:scale-105 active:scale-100 relative z-10 cursor-pointer"
          >
            <span>Jetzt für 30,31 € herunterladen</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
