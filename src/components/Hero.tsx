import React, { useState, useEffect } from 'react';
import { TARGET_AFFILIATE_URL, TELEGRAM_GROUP_URL, WHATSAPP_URL, WHATSAPP_DISPLAY, LeadFormData } from '../types';
import { ArrowRight, CheckCircle2, ShieldCheck, Send, Phone, Award, Sparkles, Bot, Zap, Clock, Gift } from 'lucide-react';

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
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Anti-slop Zero-Pill Trust Line */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-medium bg-slate-900/80 px-4 py-1.5 rounded-full border border-amber-500/30 shadow-lg">
          <span className="text-amber-400 font-bold flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-amber-400" />
            ACESSO DE 60 DIAS FREE · COMPROVE A QUALIDADE DA FERRAMENTA
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-emerald-400 font-semibold">Corretora HIOVE Oficial</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-amber-300 font-semibold">Sem Martingale</span>
        </div>

        {/* Main Title: CANDLEX-IA */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-normal leading-tight whitespace-nowrap inline-block">
            CANDLEX-IA
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300 max-w-2xl mx-auto leading-snug">
            O Robô com Inteligência Artificial Especializado em Opções Binárias
          </p>
        </div>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Pare de quebrar banca em salas com Martingale. O <strong className="text-amber-400 font-mono">CandleX-IA</strong> é compatível exclusivamente com a melhor corretora no momento: <strong className="text-emerald-400 font-mono">HIOVE</strong>. Libere seu <strong className="text-amber-300 font-bold">acesso gratuito de 60 dias</strong> para comprovar a qualidade e a assertividade da ferramenta na prática sem gastar 1 real.
        </p>

        {/* Real-time Urgency Countdown in Hero Fold */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3 px-5 sm:px-7 rounded-2xl bg-gradient-to-r from-slate-900/90 via-amber-950/40 to-slate-900/90 border border-amber-500/40 shadow-xl shadow-amber-950/20 text-center mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span>VAGAS PROMOCIONAIS · 60 DIAS FREE NA HIOVE ENCERRANDO EM:</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-amber-400 font-black text-sm">
            <span className="bg-slate-950 px-2 py-1 rounded border border-amber-400/40 shadow-inner">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span className="text-amber-400 font-bold">:</span>
            <span className="bg-slate-950 px-2 py-1 rounded border border-amber-400/40 shadow-inner">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span className="text-amber-400 font-bold">:</span>
            <span className="bg-slate-950 px-2 py-1 rounded border border-amber-400/40 shadow-inner">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        {/* 60 Days Free Quality Proof Highlight Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-emerald-950/50 border-2 border-amber-400/60 shadow-2xl shadow-amber-500/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex flex-col items-center justify-center font-black shrink-0 shadow-lg shadow-amber-400/30">
              <span className="text-lg leading-none font-display">60</span>
              <span className="text-[10px] tracking-tighter uppercase font-mono font-bold">DIAS FREE</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base sm:text-lg font-display">
                  Acesso de 60 Dias Grátis
                </span>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded font-mono font-bold">
                  TESTE REAL
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Temos tanta confiança na assertividade do CandleX-IA que liberamos <strong>60 dias 100% free</strong> para você comprovar a qualidade da ferramenta na corretora HIOVE sem nenhum risco financeiro.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={TARGET_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-black text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 rounded-xl transition-all shadow-md shadow-amber-400/20 whitespace-nowrap"
            >
              <span>Resgatar 60 Dias Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Binary Options Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-emerald-300 font-semibold">
            Retração de M5 Institucional
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-cyan-300 font-semibold">
            Fluxo Contínuo de Vela em M1
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-amber-300 font-semibold">
            Padrões Algorítmicos para Mercado OTC
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-purple-500/30 text-purple-300 font-semibold">
            Zero Martingale Cego (Gale 0)
          </span>
        </div>

        {/* Core Value Checkmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto text-left text-xs sm:text-sm text-slate-200">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>60 dias de teste livre sem cobrança</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>CandleX-IA com alertas preditivos</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Exclusivo na corretora HIOVE</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Grupo Telegram VIP + WhatsApp</span>
          </div>
        </div>

        {/* High-Impact Primary CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-center whitespace-nowrap"
          >
            <span>Quero Meus 60 Dias Free no CandleX-IA</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </a>

          <a
            href={TELEGRAM_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-5 text-sm font-bold text-[#229ED9] bg-[#229ED9]/15 hover:bg-[#229ED9]/25 border border-[#229ED9]/40 rounded-2xl transition-all whitespace-nowrap"
          >
            <Send className="w-4 h-4" />
            <span>Entrar no Grupo Telegram VIP</span>
          </a>
        </div>

        {/* WhatsApp Quick Direct Notice */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-mono pt-2">
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Atendimento individual e dúvidas? WhatsApp:</span>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-bold hover:underline"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </div>

      </div>
    </section>
  );
};
