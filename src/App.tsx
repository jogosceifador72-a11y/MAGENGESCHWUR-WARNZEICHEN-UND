/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ChaptersList } from './components/ChaptersList';
import { AudienceCheck } from './components/AudienceCheck';
import { DeliverySpecs } from './components/DeliverySpecs';
import { SymptomCheckWidget } from './components/SymptomCheckWidget';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PurchaseNotification } from './components/PurchaseNotification';
import { PreviewModal } from './components/PreviewModal';
import { StickyCtaBar } from './components/StickyCtaBar';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const checkoutUrl = 'https://pay.hotmart.com/A108024222H';

  const handleOpenPreview = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  const handleBuyClick = () => {
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0A160D] text-[#E8F3EA] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-[#22C55E]/30 selection:text-white overflow-x-hidden">
      {/* Immersive Organic Background Aura (Layered Ambient Mesh) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4ADE80 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Top-right emerald ambient orb */}
        <div className="absolute -top-40 -right-40 w-[650px] h-[650px] bg-[#22C55E]/12 rounded-full blur-[150px] animate-pulse-glow" />
        {/* Mid-left golden amber warm ray orb */}
        <div className="absolute top-[35%] -left-48 w-[600px] h-[600px] bg-[#F59E0B]/8 rounded-full blur-[160px]" />
        {/* Bottom-right forest green ambient glow */}
        <div className="absolute bottom-[20%] -right-40 w-[700px] h-[700px] bg-[#10B981]/10 rounded-full blur-[170px]" />
        {/* Deep bottom center glow */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#16A34A]/10 rounded-full blur-[150px]" />
      </div>

      {/* Top Navigation */}
      <Navbar checkoutUrl={checkoutUrl} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          checkoutUrl={checkoutUrl}
          onOpenPreview={handleOpenPreview}
        />

        {/* 2. Problem & Solution Core */}
        <ProblemSolution />

        {/* 3. 30-Pages Chapter Breakdown */}
        <ChaptersList
          onOpenPreview={handleOpenPreview}
          checkoutUrl={checkoutUrl}
        />

        {/* 4. Audience Fit (Für wen / Nicht für Sie) */}
        <AudienceCheck />

        {/* 5. Delivery & PDF Specifications */}
        <DeliverySpecs />

        {/* 6. Interactive Symptom & Doctor Orientation Check */}
        <section id="orientierung" className="py-20 md:py-28 relative overflow-hidden bg-[#0C1B0F] border-b border-[#1C3621]">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-xl mx-auto mb-14"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#142817] border border-[#274B2C] rounded-full text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3">
                <Sparkles className="w-3 h-3 text-[#4ADE80]" />
                Schneller Selbst-Check
              </span>
              <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Welche Kapitel sind für Sie am wichtigsten?
              </h2>
              <p className="text-sm sm:text-base text-[#A8C7AA] mt-3">
                Beantworten Sie 3 kurze Fragen, um Ihren persönlichen Schwerpunkt für das nächste Arztgespräch zu ermitteln.
              </p>
            </motion.div>

            <SymptomCheckWidget onBuyClick={handleBuyClick} />
          </div>
        </section>

        {/* 7. Pricing & Order Box */}
        <PricingSection
          checkoutUrl={checkoutUrl}
          onOpenPreview={handleOpenPreview}
        />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer with Social Media Contact Buttons */}
      <Footer />

      {/* Persistent & Interactive Utilities */}
      {/* Bottom-left live verified purchase notification toast (no names, only confirmed purchases) */}
      <PurchaseNotification />

      {/* Sticky Bottom Quick CTA Bar on scroll */}
      <StickyCtaBar checkoutUrl={checkoutUrl} />

      {/* Table of contents & sample chapter preview modal */}
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={handleClosePreview}
        checkoutUrl={checkoutUrl}
      />
    </div>
  );
}
