import React from 'react';
import { HelpCircle, Stethoscope, AlertTriangle, ShieldCheck, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';
import doctorPrepImg from '../assets/images/doctor_dialogue_prep_1792175448036.jpg';
import { motion } from 'motion/react';

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export const ProblemSolution: React.FC = () => {
  return (
    <section id="loesung" className="py-20 md:py-28 relative overflow-hidden bg-[#0A160D]/80 border-y border-[#1C3621]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#F59E0B]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#142817] border border-[#274B2C] rounded-full text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3 shadow-[0_0_12px_rgba(74,222,128,0.15)]">
            <Sparkles className="w-3 h-3 text-[#4ADE80]" />
            Orientierung & Sicherheit
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Was löst dieses E-Book für Sie?
          </h2>
          <p className="text-sm sm:text-base text-[#A8C7AA] mt-3 leading-relaxed">
            Magenprobleme verunsichern. Statt endloser, widersprüchlicher Recherchen im Internet räumt dieser 30-seitige Leitfaden Ihre dringendsten Fragen systematisch aus dem Weg.
          </p>
        </motion.div>

        {/* 3 Core Solution Pillars with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Pillar 1: Unklare Beschwerden */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={CARD_VARIANTS}
            className="bg-[#102213]/85 backdrop-blur-xl rounded-3xl p-7 border border-[#234527] shadow-xl flex flex-col justify-between hover:border-[#4ADE80]/60 hover:shadow-[0_10px_30px_rgba(74,222,128,0.12)] transition-all duration-300 group"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#1A331E] border border-[#2E5B33] flex items-center justify-center text-[#4ADE80] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Unklare Beschwerden
              </h3>
              <p className="text-xs sm:text-sm text-[#A2C2A4] leading-relaxed mb-5">
                Sie erfahren präzise, welche Symptome typisch sind und wie sich ein Magengeschwür (Ulcus) von einer herkömmlichen Gastritis oder Reizmagen unterscheidet.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1C3A20] space-y-2.5 text-xs text-[#D1E8D3] font-medium">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <span>Nüchtern- vs. Sofortschmerz verstehen</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <span>Schmerzmuster exakt lokalisieren</span>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Unsicherheit vor der Untersuchung */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={CARD_VARIANTS}
            className="bg-[#102213]/85 backdrop-blur-xl rounded-3xl p-7 border border-[#234527] shadow-xl flex flex-col justify-between hover:border-[#4ADE80]/60 hover:shadow-[0_10px_30px_rgba(74,222,128,0.12)] transition-all duration-300 group"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#1A331E] border border-[#2E5B33] flex items-center justify-center text-[#4ADE80] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Angst vor der Untersuchung
              </h3>
              <p className="text-xs sm:text-sm text-[#A2C2A4] leading-relaxed mb-5">
                Sie wissen genau, wie Magenspiegelung, Gewebeprobe (Biopsie) und der Helicobacter-Atemtest ablaufen und wie Sie sich stressfrei vorbereiten.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1C3A20] space-y-2.5 text-xs text-[#D1E8D3] font-medium">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <span>Sedierung & schmerzfreie Untersuchung</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <span>Gezielte Fragen für den Arzttermin</span>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Vermeidbare Fehler */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={CARD_VARIANTS}
            className="bg-[#102213]/85 backdrop-blur-xl rounded-3xl p-7 border border-[#234527] shadow-xl flex flex-col justify-between hover:border-[#4ADE80]/60 hover:shadow-[0_10px_30px_rgba(74,222,128,0.12)] transition-all duration-300 group"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#1A331E] border border-[#2E5B33] flex items-center justify-center text-[#FBBF24] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Vermeidbare Fehler
              </h3>
              <p className="text-xs sm:text-sm text-[#A2C2A4] leading-relaxed mb-5">
                Sie vermeiden riskante Schmerzmittel-Fallen (wie NSAR), ungeeignete Nahrungsmittel und das fahrlässige Übersehen echter Notfall-Signale wie Teerstuhl.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1C3A20] space-y-2.5 text-xs text-[#D1E8D3] font-medium">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <span>Gefährliche Wechselwirkungen meiden</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <span>Alarmsignale sofort erkennen</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Outcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#122716] via-[#162F1A] to-[#0E1E12] border border-[#2B542F] rounded-3xl p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle light glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4ADE80] block">
              Ihr konkretes Gesamtergebnis
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Klarheit, Sicherheit und aktive Mitwirkung an Ihrer Heilung
            </h3>
            <p className="text-sm text-[#B4D5B6] leading-relaxed">
              Nach der Lektüre dieses E-Books wissen Sie genau, wann ein Arztbesuch unaufschiebbar ist, welche medizinischen Schritte notwendig sind und wie Sie mit der richtigen Ernährung, Stressreduktion und magenschonenden Gewohnheiten selbst entscheidend zur Regeneration beitragen.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-semibold text-[#E3F2E3]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
                Evidenzbasierte Empfehlungen
              </span>
              <span className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#4ADE80]" />
                Praxiserprobt für Betroffene & Angehörige
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#38663D] shadow-2xl aspect-[4/3] bg-neutral-900 group">
              <img 
                src={doctorPrepImg} 
                alt="Vorbereitetes Arztgespräch mit Notizblock und Vertrauen"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#0F2212]/95 backdrop-blur-md border border-[#3D6E42] px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
              <span>Gut vorbereitet ins Arztgespräch</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
