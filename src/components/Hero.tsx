import React, { useState, useEffect } from 'react';
import { TARGET_AFFILIATE_URL, TELEGRAM_GROUP_URL, WHATSAPP_URL, WHATSAPP_DISPLAY, LeadFormData } from '../types';
import { ArrowRight, Send, Phone, Sparkles, Bot, Gift } from 'lucide-react';

interface HeroProps {
  onLeadCaptured?: (data: LeadFormData) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background with low opacity chart */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07] bg-center bg-cover bg-no-repeat mix-blend-luminosity"
        style={{ backgroundImage: 'url("/bg-chart.jpg")' }}
      ></div>
      
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 w-full">
        
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
            CANDLEX-IA
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-slate-300 max-w-2xl mx-auto">
            O Robô com Inteligência Artificial Especializado em Opções Binárias
          </p>
        </div>

        {/* 60 Days Free Highlight (Very Prominent) */}
        <div className="inline-block p-[2px] rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 animate-pulse shadow-[0_0_40px_rgba(245,158,11,0.3)]">
          <div className="bg-[#070B12] rounded-3xl px-8 py-5 flex items-center gap-4">
            <Gift className="w-10 h-10 text-amber-400" />
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                60 DIAS GRÁTIS
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-medium">
                Libere seu acesso sem custo para comprovar a assertividade!
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          
          <a
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2 px-6 py-5 text-lg font-black text-slate-950 bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transform hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <span>Acessar CandleX-IA</span>
            </div>
            <span className="text-xs font-bold bg-black/20 px-2 py-1 rounded text-amber-100 uppercase tracking-wide">Acesso Imediato</span>
          </a>

          <a
            href="https://hiove.io/gSBstV"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2 px-6 py-5 text-lg font-black text-slate-950 bg-gradient-to-br from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transform hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <span>Cadastro HIOVE</span>
            </div>
            <span className="text-xs font-bold bg-black/20 px-2 py-1 rounded text-emerald-100 uppercase tracking-wide">Corretora Oficial</span>
          </a>

          <a
            href={TELEGRAM_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2 px-6 py-5 text-lg font-bold text-white bg-gradient-to-br from-[#229ED9] to-[#1c84b5] hover:brightness-110 rounded-2xl shadow-[0_0_20px_rgba(34,158,217,0.2)] transform hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-2">
              <Send className="w-6 h-6" />
              <span>Grupo Telegram</span>
            </div>
            <span className="text-xs text-[#bce2f5] uppercase tracking-wide">Sinais VIP</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-2 px-6 py-5 text-lg font-bold text-white bg-gradient-to-br from-green-500 to-green-600 hover:brightness-110 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.2)] transform hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6" />
              <span>Atendimento WhatsApp</span>
            </div>
            <span className="text-xs text-green-200 uppercase tracking-wide">Suporte 24h</span>
          </a>

        </div>

      </div>
    </section>
  );
};
