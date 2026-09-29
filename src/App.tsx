/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { CandleXIaSection } from './components/CandleXIaSection';
import { CertificateSection } from './components/CertificateSection';
import { ProfitCalculator } from './components/ProfitCalculator';
import { Testimonials } from './components/Testimonials';
import { ComparisonSection } from './components/ComparisonSection';
import { ChannelsSection } from './components/ChannelsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LeadFormData } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastCapturedLead, setLastCapturedLead] = useState<LeadFormData | null>(null);

  const handleLeadCaptured = (data: LeadFormData) => {
    setLastCapturedLead(data);
  };

  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Top Bar following 3-zone contract */}
      <Header onOpenLeadModal={() => setIsModalOpen(true)} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section: CandleX-IA AI Robot & Mentoria */}
        <Hero onLeadCaptured={handleLeadCaptured} />

        {/* Quantified Metrics & Proof Bar */}
        <ProofBar />

        {/* Direct Reality Comparison: Por que 97% quebram a banca */}
        <ComparisonSection />

        {/* Dedicated AI Robot Section: CandleX-IA */}
        <CandleXIaSection />

        {/* Dedicated Certificate Section: Certificado Oficial de Conclusão */}
        <CertificateSection />

        {/* Interactive Math Risk & Profit Simulator */}
        <ProfitCalculator />

        {/* Verified Student Testimonials in Binary Options */}
        <Testimonials />

        {/* Community & Direct Contact: Telegram VIP + WhatsApp Oficial */}
        <ChannelsSection />

        {/* Objections and FAQ Accordion */}
        <FaqSection />

        {/* Final Urgent Conversion Block */}
        <FinalCta />
      </main>

      {/* Quiet Footer with Risk Notice & Links */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Action Bar */}
      <StickyMobileBar onOpenModal={() => setIsModalOpen(true)} />

      {/* Lead Capture Modal Dialog */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLeadCaptured={handleLeadCaptured}
      />
    </div>
  );
}
