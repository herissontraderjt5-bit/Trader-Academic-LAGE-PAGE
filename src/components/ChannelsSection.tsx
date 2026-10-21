import React from 'react';
import { TELEGRAM_GROUP_URL, WHATSAPP_COMMUNITY_URL, WHATSAPP_URL, WHATSAPP_DISPLAY, TARGET_AFFILIATE_URL } from '../types';
import { Send, Phone, MessageSquare, ArrowRight, CheckCircle2, Sparkles, ExternalLink, Bot, Users } from 'lucide-react';

export const ChannelsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#070B12] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 flex items-center justify-center gap-1.5 font-mono">
            <Bot className="w-4 h-4 text-amber-400" />
            <span>COMUNIDADE & CANAIS OFICIAIS CANDLEX-IA</span>
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Acompanhe as Análises e Entre na Nossa Comunidade
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Entre na comunidade oficial no WhatsApp e no canal do Telegram VIP para receber prévias e confluências do Robô CandleX-IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Telegram VIP Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1a2e] to-slate-900 border border-[#229ED9]/40 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#229ED9]/20 text-[#229ED9] flex items-center justify-center font-bold">
                  <Send className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-[#229ED9] bg-[#229ED9]/15 px-2.5 py-1 rounded-md border border-[#229ED9]/30">
                  GRUPO OFICIAL TELEGRAM
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-2">
                Canal VIP CandleX-IA no Telegram
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Receba prévias de análises de Opções Binárias (M1, M5 e OTC), alertas demonstrativos do robô CandleX-IA e resultados dos alunos todos os dias gratuitamente.
              </p>

              <div className="space-y-2 text-xs text-slate-300 mb-6 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#229ED9] shrink-0" />
                  <span>Alertas diários de velas e confluências de binárias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#229ED9] shrink-0" />
                  <span>Prints de operações ao vivo e taxas sem Gale</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#229ED9] shrink-0" />
                  <span>Acesso imediato e gratuito para a comunidade</span>
                </div>
              </div>
            </div>

            <a
              href={TELEGRAM_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-[#229ED9]/20"
            >
              <Send className="w-4 h-4" />
              <span>Entrar no Grupo Telegram VIP Agora</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp Community Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0a1e16] to-slate-900 border border-emerald-500/40 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  COMUNIDADE OFICIAL
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-2">
                Comunidade Oficial no WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Faça parte da comunidade exclusiva de traders no WhatsApp. Receba novidades em primeira mão, compartilhe resultados e tire dúvidas sobre o Robô CandleX-IA.
              </p>

              <div className="space-y-2 text-xs text-slate-300 mb-6 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Networking direto com outros operadores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Avisos de sessões ao vivo e atualizações da IA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acesso 100% gratuito e imediato</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Entrar na Comunidade WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="pt-2 text-center text-xs text-slate-400 font-mono">
                Dúvidas individuais?{' '}
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <Phone className="w-3 h-3" />
                  <span>Suporte: {WHATSAPP_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
