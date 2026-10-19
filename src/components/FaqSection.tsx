import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'Wie erhalte ich das E-Book direkt nach dem Kauf?',
    answer: 'Unmittelbar nach erfolgreicher Zahlungsbestätigung erhalten Sie eine automatische Bestätigungs-E-Mail von unserem zertifizierten Zahlungsanbieter Hotmart. Darin befindet sich Ihr persönlicher, sicherer Download-Link, über den Sie die PDF-Datei mit nur einem Klick auf Ihr Smartphone, Tablet oder PC herunterladen können.',
  },
  {
    question: 'Auf welchen Geräten kann ich das E-Book öffnen und lesen?',
    answer: 'Das E-Book liegt im universellen Standard-PDF-Format vor. Sie können es auf iPhone, Android-Smartphones, iPads, Android-Tablets, Windows-PCs, Apple Mac sowie jedem modernen E-Reader öffnen. Zudem können Sie wichtige Seiten wie die Arzt-Checkliste bequem zu Hause ausdrucken.',
  },
  {
    question: 'Ersetzt dieses Buch die Untersuchung oder Behandlung durch einen Arzt?',
    answer: 'Nein, und das soll es auch bewusst nicht. Das E-Book dient der fundierten Patienten-Information, Früherkennung und Vorbereitung auf das Arztgespräch. Es hilft Ihnen, Beschwerden richtig einzuordnen, Untersuchungen ohne Angst anzutreten und Fehler im Alltag zu vermeiden. Bei akuten Alarmsignalen (z.B. Bluterbrechen oder Teerstuhl) ist unverzüglich ein Arzt aufzusuchen.',
  },
  {
    question: 'Welche Zahlungsmöglichkeiten stehen bei Hotmart zur Verfügung?',
    answer: 'Sie können aus allen gängigen und sicheren Zahlungsmethoden wählen: PayPal, Kreditkarte (Visa, Mastercard, American Express), Klarna / Sofortüberweisung sowie SEPA-Lastschrift. Die Übertragung erfolgt über eine hochmoderne 256-Bit SSL-Verschlüsselung.',
  },
  {
    question: 'Warum kostet das E-Book 30,31 €?',
    answer: 'Der faire Festpreis von 30,31 € deckt 30 komprimierte, werbefreie Seiten ohne Fachchinesisch ab, spart Ihnen zeitraubende und beunruhigende Online-Recherchen und bereitet Sie optimal auf Untersuchungen und eine magenfreundliche Lebensweise vor.',
  },
  {
    question: 'Kann ich das E-Book dauerhaft behalten?',
    answer: 'Ja, absolut! Sie zahlen einmalig 30,31 € und besitzen das PDF dauerhaft auf Ihren Geräten – ganz ohne laufendes Abonnement oder versteckte Folgekosten.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden bg-[#0C1A10]/95">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#142817] border border-[#274B2C] rounded-full text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3">
            <Sparkles className="w-3 h-3 text-[#4ADE80]" />
            Häufige Fragen
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Antworten auf Ihre Fragen
          </h2>
          <p className="text-sm sm:text-base text-[#A8C7AA] mt-3">
            Alles Wichtige zu Ablauf, Bezahlung und Inhalt des Ratgebers auf einen Blick.
          </p>
        </motion.div>

        {/* Accordion with Smooth Animation */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="bg-[#102213]/85 backdrop-blur-xl rounded-2xl border border-[#214225] overflow-hidden transition-all shadow-lg hover:border-[#4ADE80]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#142917]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-[#19351D] text-[#4ADE80] border border-[#2A522E] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#22C55E] text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A8C7AA] leading-relaxed border-t border-[#1C3A20]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
