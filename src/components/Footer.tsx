import React from 'react';
import { SocialButtons } from './SocialButtons';
import { ShieldCheck, Lock, Mail, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071009] border-t border-[#1C3621] pt-16 pb-20 text-[#A0C4A3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Social Media Contact Buttons Section */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#122416] border border-[#234527] rounded-full text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3">
            <Sparkles className="w-3 h-3 text-[#4ADE80]" />
            Kanäle & Kontakt
          </span>
          <h3 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-extrabold text-white">
            Folgen Sie uns & treten Sie in Kontakt
          </h3>
          <p className="text-xs sm:text-sm text-[#8FB592] mt-2 max-w-lg mx-auto mb-8">
            Erfahren Sie mehr über Magengesundheit, wertvolle Alltagstipps und bleiben Sie auf allen Netzwerken vernetzt:
          </p>

          {/* Social Buttons Grid */}
          <SocialButtons />
        </div>

        {/* Medical Disclaimer Box */}
        <div className="bg-[#0D1C10]/90 rounded-2xl p-6 sm:p-7 border border-[#234527] shadow-xl mb-12 text-left">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-[#FBBF24] border border-[#FBBF24]/30 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-md">
              !
            </div>
            <div className="text-xs text-[#A0C4A3] leading-relaxed space-y-2">
              <span className="font-bold text-white block text-sm">
                Medizinischer Haftungsausschluss & wichtiger Patientenhinweis:
              </span>
              <p>
                Das E-Book „Magengeschwür – Warnzeichen und Behandlung“ sowie sämtliche Begleitmaterialien dienen ausschließlich der Information, Gesundheitsbildung und Vorbereitung auf das ärztliche Beratungsgespräch. Sie stellen zu keinem Zeitpunkt eine medizinische Diagnose, ärztliche Heilaussage oder therapeutische Behandlung dar.
              </p>
              <p>
                Konsultieren Sie bei anhaltenden oder akuten Magenbeschwerden, brennenden Schmerzen oder Verdauungsproblemen stets einen zugelassenen Arzt oder Gastroenterologen. Bei Notfallsymptomen wie Bluterbrechen (Kaffeesatzerbrechen), pechschwarzem Teerstuhl, akuter Atemnot oder plötzlichem Kreislaufkollaps ist sofort der ärztliche Notdienst (Notruf 112) zu alarmieren.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Security */}
        <div className="pt-6 border-t border-[#1C3621] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7F9E82] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Magengeschwür – Warnzeichen und Behandlung. Alle Rechte vorbehalten.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-[#4ADE80] font-medium">
              <Lock className="w-3.5 h-3.5" />
              Sichere SSL-Bestellung
            </span>
            <span className="text-[#2F5234]">·</span>
            <span>Hotmart Partner-Verkauf (30,31 €)</span>
            <span className="text-[#2F5234]">·</span>
            <span>PDF-Sofortversand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
