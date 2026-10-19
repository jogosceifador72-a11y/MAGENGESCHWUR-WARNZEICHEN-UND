import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
}

const CHAPTERS_PREVIEW = [
  {
    number: '01',
    title: 'Anatomie & Magenschutz: Wie ein Geschwür wirklich entsteht',
    pages: 'S. 4–8',
    summary: 'Der feine Schutzfilm der Magenschleimhaut, das Zusammenspiel von Magensäure und Pepsin, und warum die Schutzbarriere ins Wanken gerät.',
    highlights: [
      'Die Rolle von Helicobacter pylori: Übertragung & Bakterienbefall',
      'Magengeschwür (Ulcus ventriculi) vs. Zwölffingerdarmgeschwür (Ulcus duodeni)',
      'Warum Stress kein Mythos ist, sondern die Durchblutung messbar schwächt',
    ],
  },
  {
    number: '02',
    title: 'Alarmsignale richtig deuten: Typische & atypische Symptome',
    pages: 'S. 9–14',
    summary: 'Lernen Sie die genaue Schmerzcharakteristik kennen: Nüchternschmerz vs. Sofortschmerz nach Mahlzeiten, und warum manche Geschwüre stumm bleiben.',
    highlights: [
      'Differenzialdiagnose: Ist es nur eine Gastritis, Reflux oder ein Ulkus?',
      'Rote Flaggen: Wann Teerstuhl, Bluterbrechen oder Kreislaufkollaps sofortiges Handeln fordern',
      'Schmerzskala & Symptomprotokoll für Ihren Alltag',
    ],
  },
  {
    number: '03',
    title: 'Diagnostik ohne Angst: Magenspiegelung & Biopsie verstehen',
    pages: 'S. 15–19',
    summary: 'Schritt-für-Schritt-Ablauf einer Gastroskopie: Von der sanften Kurznarkose (Sedierung) über die Gewebeprobe bis zum 13C-Harnstoff-Atemtest.',
    highlights: [
      'Optimale Vorbereitung auf die Spiegelung – Fehler vor dem Termin vermeiden',
      'Was der histologische Befund aussagt und warum Biopsien Routine sind',
      'Nicht-invasive Testverfahren im Vergleich',
    ],
  },
  {
    number: '04',
    title: 'Medizinische Therapie & Medikamente: Fakten statt Halbwissen',
    pages: 'S. 20–24',
    summary: 'Wie Protonenpumpenhemmer (PPI wie Pantoprazol, Omeprazol) wirken, wie eine Helicobacter-Eradikationstherapie abläuft und welche Risiken bestehen.',
    highlights: [
      'Gefahr durch gängige Schmerzmittel (Ibuprofen, Diclofenac, ASS) und Magenschutz-Regeln',
      'Therapiedauer und richtiges Ausschleichen von Säureblockern',
      'Was tun bei Rückfällen oder Therapieresistenz?',
    ],
  },
  {
    number: '05',
    title: 'Magenfreundliche Ernährung & Lebensstil in der Heilungsphase',
    pages: 'S. 25–28',
    summary: 'Konkrete Ernährungsleitlinien zur Magenentlastung: Welche Speisen und Zubereitungsarten die Schleimhaut reparieren und welche Trigger Sie meiden müssen.',
    highlights: [
      'Ampelliste der Magenkost: Erlaubte, neutrale und verbotene Lebensmittel',
      'Kaffee, Alkohol und Nikotin: Wissenschaftlich belegte Heilungsverzögerer',
      'Pflanzliche Helfer mit Evidenz (Kamille, Süßholzwurzel/DGL, Leinsamenschleim)',
    ],
  },
  {
    number: '06',
    title: 'Das souveräne Arztgespräch: Checkliste & Notfallplan',
    pages: 'S. 29–30',
    summary: 'Kompakter Vorbereitungsbogen zum Ausdrucken: 10 gezielte Fragen, die Sie Ihrem Gastroenterologen oder Hausarzt stellen sollten.',
    highlights: [
      'Strukturierter Fragenkatalog für maximale Gesprächszeit-Nutzung',
      'Symptom-Tagebuch Vorlage für die Woche vor dem Termin',
      'Notfall-Kontaktschema bei akuten Komplikationen',
    ],
  },
];

export const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, checkoutUrl }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0D1C10] rounded-3xl border border-[#2B5430] shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(34,197,94,0.15)] max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden relative"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#1E3B22] bg-[#0A170D] flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#17331D] border border-[#2B5E33] flex items-center justify-center text-[#4ADE80] shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg leading-tight">
                  Inhaltsverzeichnis & Leseprobe
                </h3>
                <p className="text-xs text-[#8FB592]">
                  E-Book „Magengeschwür – Warnzeichen und Behandlung“ (30 Seiten PDF)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Intro Box */}
            <div className="bg-[#122416] p-5 rounded-2xl border border-[#224427] shadow-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4ADE80] block mb-1">
                Aus dem Vorwort (Auszug)
              </span>
              <p className="text-xs sm:text-sm text-[#C8E4CA] leading-relaxed italic">
                »Ein brennender Magenschmerz ist kein Schicksal, das man stumm ertragen muss. Doch Angst entsteht vor allem durch Unwissenheit. Dieser Ratgeber nimmt Sie an die Hand: Verständlich, ohne medizinisches Fachchinesisch, zeigt er Ihnen in 30 Seiten genau, wie Sie Alarmsignale einordnen, ruhig in die Untersuchung gehen und Ihrem Körper die beste Chance auf schnelle Schleimhautheilung bieten.«
              </p>
            </div>

            {/* Chapter Selector Tabs */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#A0C4A3] uppercase tracking-wide">
                  Kapitelübersicht wählen:
                </span>
                <span className="text-xs text-[#4ADE80] font-semibold">
                  Kapitel {activeTab + 1} von 6
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 p-1.5 bg-[#0A170D] rounded-2xl border border-[#1E3B22]">
                {CHAPTERS_PREVIEW.map((ch, idx) => (
                  <button
                    key={ch.number}
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl transition-all text-center truncate cursor-pointer ${
                      activeTab === idx
                        ? 'bg-gradient-to-r from-[#22C55E] to-[#15803D] text-white shadow-lg'
                        : 'text-[#8FB592] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Kap. {ch.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Chapter Details */}
            <div className="bg-[#122416] rounded-2xl p-6 border border-[#224427] shadow-md">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-xs font-bold text-[#4ADE80] uppercase tracking-wider">
                    Kapitel {CHAPTERS_PREVIEW[activeTab].number} · {CHAPTERS_PREVIEW[activeTab].pages}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                    {CHAPTERS_PREVIEW[activeTab].title}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A8C7AA] leading-relaxed mb-4">
                {CHAPTERS_PREVIEW[activeTab].summary}
              </p>

              <div className="space-y-2.5 pt-3.5 border-t border-[#1C3A20]">
                <span className="text-xs font-bold text-white block">
                  Konkrete Inhalte in diesem Kapitel:
                </span>
                {CHAPTERS_PREVIEW[activeTab].highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#D3E8D5]">
                    <CheckCircle className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Bonus Strip */}
            <div className="bg-[#152B1A] rounded-2xl p-4 sm:p-5 border border-[#2A5430] flex items-center gap-3.5">
              <ShieldCheck className="w-7 h-7 text-[#4ADE80] shrink-0" />
              <div className="text-xs text-[#C8E4CA]">
                <span className="font-bold text-white block">Inklusive druckbarer Vorlagen im Anhang:</span>
                Magen-Symptomtagebuch & Notfall-Fragebogen für den Hausarztbesuch.
              </div>
            </div>
          </div>

          {/* Footer with 30,31 € CTA */}
          <div className="p-5 sm:p-6 bg-[#0A170D] border-t border-[#1E3B22] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-[#8FB592]">Gesamtpaket: 30 Seiten PDF</div>
              <div className="text-lg font-black text-white">
                Nur <span className="text-[#4ADE80]">30,31 €</span> <span className="text-xs font-normal text-[#8FB592]">einmalig</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white border border-[#224427] rounded-xl hover:bg-white/5 transition-colors"
              >
                Schließen
              </button>
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#22C55E] to-[#15803D] hover:from-[#16A34A] hover:to-[#166534] text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all transform hover:scale-[1.02]"
              >
                <span>Jetzt für 30,31 € sichern</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
