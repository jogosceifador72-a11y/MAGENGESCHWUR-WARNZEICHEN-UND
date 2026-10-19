import React from 'react';
import { Smartphone, Laptop, Mail, Download, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import teaKitchenImg from '../assets/images/stomach_health_relief_1792175448149.jpg';
import { motion } from 'motion/react';

export const DeliverySpecs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0C1A10]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#16A34A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Left (5 cols) with motion */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden border border-[#2B5430] shadow-2xl aspect-[16/10] lg:aspect-[4/3] bg-neutral-900 relative group">
              <img
                src={teaKitchenImg}
                alt="Magenfreundliche Ruhe und Entlastung im Alltag mit warmem Tee und Wasser"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4ADE80] block mb-1">
                  Heilung im Alltag
                </span>
                <p className="text-base font-bold text-white leading-snug">
                  Schonende Gewohnheiten, die Ihren Magen spürbar entlasten
                </p>
              </div>
            </div>

            {/* Floating Spec Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-5 -right-3 bg-[#0F2212]/95 backdrop-blur-xl border border-[#38663D] p-3.5 rounded-2xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#1C3A20] text-[#4ADE80] flex items-center justify-center font-bold">
                <Download className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white block">
                  Sofort einsatzbereit
                </span>
                <span className="text-[11px] text-[#A0C4A3]">
                  Keine Wartezeit auf die Post
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text & Specs Right (7 cols) with motion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#142817] border border-[#274B2C] rounded-full text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3">
                <Sparkles className="w-3 h-3 text-[#4ADE80]" />
                Format & Sofortiger Zugang
              </span>
              <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Direkt nach dem Kauf auf all Ihren Geräten lesbar
              </h2>
              <p className="text-sm sm:text-base text-[#A8C7AA] mt-3 leading-relaxed">
                Kein Warten auf Paketboten und keine Versandkosten. Ihr Ratgeber wird unmittelbar nach der Zahlungsbestätigung digital bereitgestellt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Spec 1: Format */}
              <div className="p-5 bg-[#102213]/85 backdrop-blur-xl rounded-2xl border border-[#214225] shadow-xl flex items-start gap-3.5 hover:border-[#4ADE80]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#19351D] border border-[#2B5430] flex items-center justify-center text-[#4ADE80] shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Universelles PDF-Format
                  </h4>
                  <p className="text-xs text-[#A0C0A2] mt-1 leading-relaxed">
                    Optimiert für Smartphone, Tablet, PC, Mac und E-Reader. Zum Abspeichern oder Ausdrucken.
                  </p>
                </div>
              </div>

              {/* Spec 2: Lieferung */}
              <div className="p-5 bg-[#102213]/85 backdrop-blur-xl rounded-2xl border border-[#214225] shadow-xl flex items-start gap-3.5 hover:border-[#4ADE80]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#19351D] border border-[#2B5430] flex items-center justify-center text-[#4ADE80] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Blitzschneller E-Mail-Zugang
                  </h4>
                  <p className="text-xs text-[#A0C0A2] mt-1 leading-relaxed">
                    Direkte Auslieferung des sicheren Download-Links an Ihre E-Mail-Adresse sofort nach der Bestätigung.
                  </p>
                </div>
              </div>

              {/* Spec 3: 30 Seiten Praxis */}
              <div className="p-5 bg-[#102213]/85 backdrop-blur-xl rounded-2xl border border-[#214225] shadow-xl flex items-start gap-3.5 hover:border-[#4ADE80]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#19351D] border border-[#2B5430] flex items-center justify-center text-[#4ADE80] shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    30 Seiten komprimiertes Wissen
                  </h4>
                  <p className="text-xs text-[#A0C0A2] mt-1 leading-relaxed">
                    In rund 45 Minuten durchlesbar. Konzentriert auf die wirklich lebensnahen Fakten und Schritte.
                  </p>
                </div>
              </div>

              {/* Spec 4: Dauerhafter Zugriff */}
              <div className="p-5 bg-[#102213]/85 backdrop-blur-xl rounded-2xl border border-[#214225] shadow-xl flex items-start gap-3.5 hover:border-[#4ADE80]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#19351D] border border-[#2B5430] flex items-center justify-center text-[#4ADE80] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Lebenslanger Zugriff
                  </h4>
                  <p className="text-xs text-[#A0C0A2] mt-1 leading-relaxed">
                    Einmal herunterladen und immer griffbereit haben – auch offline, wenn Sie unterwegs sind.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
