import React, { useState, useEffect } from 'react';
import { TARGET_AFFILIATE_URL } from '../types';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2, Lock, Bot } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

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
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#070B12] via-slate-950 to-[#05080E] border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Anti-slop Zero-Pill Text line */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 font-mono">
          <Bot className="w-4 h-4 text-amber-400" />
          <span>VAGAS PROMOCIONAIS · CANDLEX-IA + CERTIFICADO</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>ACESSO AO GRUPO VIP LIBERADO</span>
        </div>

        {/* Powerful Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display max-w-3xl mx-auto leading-tight">
          Comprove a qualidade da ferramenta por <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">60 Dias 100% Free</span> na Hiove.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Sem mensalidade nos primeiros 60 dias. Opere com o Robô <strong className="text-amber-400 font-mono">CandleX-IA</strong>, pegue as confluências em tempo real, comprove a assertividade de 85% a 92% e saque seus lucros via PIX.
        </p>

        {/* Realistic Timer Container */}
        <div className="inline-flex items-center gap-3 p-3 px-6 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow-lg text-center">
          <span className="text-xs text-slate-300 uppercase font-semibold font-mono">
            Vagas com 60 dias free encerram em:
          </span>
          <div className="flex items-center gap-1.5 font-mono text-amber-400 font-bold text-sm">
            <span className="bg-slate-950 px-2 py-1 rounded border border-slate-800">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span>:</span>
            <span className="bg-slate-950 px-2 py-1 rounded border border-slate-800">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span className="bg-slate-950 px-2 py-1 rounded border border-slate-800">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        {/* Primary High-Impact CTA Button */}
        <div className="pt-2">
          <a
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-1 active:translate-y-0 transition-all text-center whitespace-nowrap"
          >
            <span>Quero Meus 60 Dias Free no CandleX-IA</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </a>
        </div>

        {/* Guarantee and security badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>7 Dias de Garantia Incondicional</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Ambiente 100% Seguro e Criptografado</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Acesso Imediato ao Robô e Materiais</span>
          </div>
        </div>

      </div>
    </section>
  );
};
