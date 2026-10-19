import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight, HelpCircle, FileText, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Question {
  id: string;
  title: string;
  options: { label: string; note: string; flag?: boolean }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'timing',
    title: 'Wann treten Ihre Magenschmerzen am stärksten auf?',
    options: [
      { label: 'Vor allem nüchtern oder nachts (bessert sich nach etwas Essen)', note: 'Typisches Muster für das Zwölffingerdarmgeschwür (Ulcus duodeni)' },
      { label: 'Direkt oder kurz nach einer Mahlzeit', note: 'Häufiger Hinweis auf ein Magengeschwür (Ulcus ventriculi) oder Reizung' },
      { label: 'Dauerhaftes diffuses Drücken und Völlegefühl', note: 'Oft charakteristisch für eine Gastritis oder Reizmagen' },
    ],
  },
  {
    id: 'meds',
    title: 'Nehmen Sie regelmäßig gängige Schmerzmittel (NSAR)?',
    options: [
      { label: 'Ja, regelmäßig Ibuprofen, Diclofenac oder Aspirin', note: 'Starker Risikofaktor für die Schleimhautbarriere (Kapitel 4)', flag: true },
      { label: 'Nur gelegentlich bei Kopfschmerzen', note: 'Geringeres, aber bei Vorbelastung relevantes Risiko' },
      { label: 'Nein, überhaupt keine Schmerzmittel', note: 'Ursache liegt meist bei Helicobacter pylori, Stress oder Ernährung' },
    ],
  },
  {
    id: 'preparedness',
    title: 'Wie gut fühlen Sie sich auf das nächste Arztgespräch vorbereitet?',
    options: [
      { label: 'Sehr unsicher – Fachbegriffe und Befunde verwirren mich', note: 'Unser Leitfaden gibt Ihnen die nötigen Fragen und Sicherheit' },
      { label: 'Teilweise informiert, aber mir fehlt ein roter Faden im Alltag', note: 'Kapitel 5 & 6 bieten Ihnen konkrete Ernährungs- & Verhaltenspläne' },
      { label: 'Ich möchte vor allem wissen, was ich selbst zur Heilung tun kann', note: 'Im E-Book erfahren Sie evidenzbasierte Entlastungsmethoden' },
    ],
  },
];

export const SymptomCheckWidget: React.FC<{ onBuyClick: () => void }> = ({ onBuyClick }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (optionIndex: number) => {
    const updated = [...answers, optionIndex];
    setAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const reset = () => {
    setAnswers([]);
    setCurrentStep(0);
    setIsCompleted(false);
  };

  return (
    <div className="bg-[#102213]/90 backdrop-blur-2xl rounded-3xl border border-[#274B2C] shadow-2xl p-6 sm:p-9 max-w-3xl mx-auto relative overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-6 pb-5 border-b border-[#1E3B22]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#1A3820] text-[#4ADE80] border border-[#2B5732] flex items-center justify-center font-bold text-xs shadow-md">
            {isCompleted ? '✓' : `${currentStep + 1}/${QUESTIONS.length}`}
          </div>
          <div>
            <h3 className="font-bold text-white text-base sm:text-lg leading-tight">
              Interaktiver Orientierungs-Check
            </h3>
            <p className="text-xs text-[#A0C4A3]">
              Für Ihr nächstes Arztgespräch & eigene Sicherheit (Dauer: 1 Minute)
            </p>
          </div>
        </div>

        {isCompleted && (
          <button
            onClick={reset}
            className="text-xs font-semibold text-[#4ADE80] hover:text-white transition-colors cursor-pointer"
          >
            Neu starten
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-base sm:text-lg font-bold text-white">
              {QUESTIONS[currentStep].title}
            </h4>

            <div className="space-y-3 pt-1">
              {QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className="w-full text-left p-4 sm:p-5 rounded-2xl border border-[#234226] hover:border-[#4ADE80] bg-[#142A18]/60 hover:bg-[#18331E] transition-all group flex items-start gap-3.5 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <div className="w-5 h-5 rounded-full border border-neutral-600 group-hover:border-[#4ADE80] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-white block group-hover:text-[#86EFAC] transition-colors">
                      {opt.label}
                    </span>
                    <span className="text-xs text-[#9EC4A1] mt-0.5 block">
                      {opt.note}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-[#91B594]">
                <HelpCircle className="w-3.5 h-3.5 text-[#4ADE80]" />
                Keine Datenübertragung · rein informativer Leitfaden
              </span>
              <span className="text-[#91B594]">Schritt {currentStep + 1} von {QUESTIONS.length}</span>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="completed"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
          >
            <div className="p-5 bg-gradient-to-r from-[#17331D] to-[#142D19] border border-[#2E5E34] rounded-2xl flex items-start gap-3.5 shadow-lg">
              <CheckCircle className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-white text-sm sm:text-base">
                  Ihre persönliche Empfehlung für den Ratgeber
                </h5>
                <p className="text-xs sm:text-sm text-[#C8E4CA] mt-1 leading-relaxed">
                  Aufgrund Ihrer Angaben sind besonders die Kapitel <strong>2 (Symptom-Differenzierung)</strong>, <strong>4 (Schmerzmittel & Medikamente)</strong> und <strong>6 (Vorbereitung auf das Arztgespräch)</strong> für Sie direkt relevant.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#D1E8D3]">
              <div className="p-4 bg-[#142918] rounded-xl border border-[#234527]">
                <span className="font-bold text-white block mb-1">
                  📋 Was Sie für Ihren Arzt notieren sollten:
                </span>
                Genaue Uhrzeiten der Schmerzspitzen und Zusammenhang mit nüchternem Magen.
              </div>
              <div className="p-4 bg-[#142918] rounded-xl border border-[#234527]">
                <span className="font-bold text-white block mb-1">
                  🥗 Was Sie heute noch tun können:
                </span>
                Schleimhaut reizende Speisen meiden und das Magen-Tagebuch aus Kapitel 6 nutzen.
              </div>
            </div>

            <div className="p-5 bg-[#162F1B] rounded-2xl border border-[#2F5F35] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#1C3A21] border border-[#37693C] flex items-center justify-center text-[#4ADE80] shrink-0 shadow-md">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Alle Antworten auf 30 Seiten zusammengefasst
                  </span>
                  <span className="text-[11px] text-[#A0C4A3]">
                    Sofortige PDF-Lieferung per E-Mail für <strong>30,31 €</strong>
                  </span>
                </div>
              </div>

              <button
                onClick={onBuyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white text-xs font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all cursor-pointer shrink-0 transform hover:scale-105 active:scale-100"
              >
                <span>E-Book jetzt sichern (30,31 €)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
