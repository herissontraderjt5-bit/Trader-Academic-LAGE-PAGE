import React from 'react';
import { TARGET_AFFILIATE_URL, TELEGRAM_GROUP_URL, WHATSAPP_URL, WHATSAPP_DISPLAY } from '../types';
import { 
  Bot, Zap, ArrowRight, CheckCircle2, Shield, Activity, 
  Send, Sparkles, Brain, Clock, Percent, Phone 
} from 'lucide-react';

export const CandleXIaSection: React.FC = () => {
  return (
    <section id="candlex-ia" className="py-16 md:py-24 bg-gradient-to-b from-[#070B12] via-[#09101F] to-[#070B12] border-t border-slate-800 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30 font-mono">
            <Bot className="w-4 h-4 text-amber-400" />
            <span>TECNOLOGIA CANDLEX-IA · CONFLUÊNCIA EM TEMPO REAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug tracking-normal max-w-2xl mx-auto">
            A Inteligência Artificial desenvolvida exclusivamente para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">
              Opções Binárias
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            O <strong>CandleX-IA</strong> é compatível exclusivamente com a melhor corretora no momento: a <strong className="text-amber-400 font-mono">HIOVE</strong>. Escaneia o comportamento de velas nos tempos gráficos de 1M, 2M e 5M em tempo real, entregando as taxas exatas de COMPRA e VENDA diretamente no seu Telegram VIP com zero delay.
          </p>
        </div>

        {/* Feature Cards Grid (Clean, no mock terminal simulator) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Esticamento & Pico de Vela */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Pico & Esticamento de Vela
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Calcula a velocidade e aceleração da vela nos primeiros 30 segundos, apontando a retração exata no suporte ou resistência.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-300">
              M1, M2 & M5 Retração
            </div>
          </div>

          {/* Card 2: Mercado OTC & Aberto */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Mercado Aberto & OTC
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Decodifica os padrões de repetição do algoritmo de OTC para você operar e lucrar à noite e durante os finais de semana.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-purple-300">
              Payouts de 88% a 95%
            </div>
          </div>

          {/* Card 3: 0 Martingale Cego */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                100% Sem Martingale Cego
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Assertividade de primeira (Gale 0). Chega de arriscar a banca toda para ganhar 5 reais com salas de sinais irresponsáveis.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-300">
              Gestão Soros & Mão Fixa
            </div>
          </div>

          {/* Card 4: Alertas Telegram VIP */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/30 flex items-center justify-center text-[#229ED9] mb-4 group-hover:scale-105 transition-transform">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Alertas no Telegram VIP
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Você recebe as confluências e gatilhos mastigados antes de abrir a vela, com tempo hábil para abrir a corretora e executar.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-[#229ED9]">
              Notificações sem Delay
            </div>
          </div>

        </div>

        {/* Telegram Direct Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0c1a2e] via-slate-900 to-[#0c1a2e] border border-[#229ED9]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#229ED9]/20 text-[#229ED9] flex items-center justify-center shrink-0">
              <Send className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-display">
                Quer testar as confluências do CandleX-IA gratuitamente?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Entre agora no Canal VIP oficial no Telegram e receba análises diárias e prévias de mercado.
              </p>
            </div>
          </div>

          <a
            href={TELEGRAM_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-[#229ED9]/20 whitespace-nowrap shrink-0"
          >
            <Send className="w-4 h-4" />
            <span>Entrar no Grupo Telegram VIP</span>
          </a>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all text-center whitespace-nowrap"
          >
            <span>Garantir Acesso ao CandleX-IA na Mentoria</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp: {WHATSAPP_DISPLAY}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
