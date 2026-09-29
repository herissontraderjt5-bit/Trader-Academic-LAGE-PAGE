import React from 'react';
import { TARGET_AFFILIATE_URL, TELEGRAM_GROUP_URL, WHATSAPP_URL, WHATSAPP_DISPLAY } from '../types';
import { Shield, ExternalLink, Send, Phone, Award, Bot } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080E] border-t border-slate-800/80 pt-12 pb-20 sm:pb-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                <Bot className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-lg font-black text-white font-display">
                CANDLEX-IA
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Tecnologia de Inteligência Artificial preditiva para Opções Binárias e Mentoria Profissional. Formando operadores disciplinados através de leitura institucional de velas, retração de M5, padrões de OTC e Certificado Oficial de Conclusão de 120 horas.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px]">
              <a 
                href={TELEGRAM_GROUP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#229ED9] hover:underline"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram VIP Oficial</span>
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:underline font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Navegação
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#candlex-ia" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Robô CandleX-IA</span>
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-emerald-400 transition-colors">
                  Estratégias de Opções Binárias
                </a>
              </li>
              <li>
                <a href="#certificado" className="hover:text-amber-400 transition-colors">
                  Certificado Oficial (120h)
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-emerald-400 transition-colors">
                  Simulador de Gestão de Banca
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-emerald-400 transition-colors">
                  Depoimentos de Alunos
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Acesso Oficial
            </h4>
            <div className="space-y-2">
              <a
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>Plataforma CandleX-IA</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-slate-400">
                Acesse a sala de operações de Opções Binárias, o robô CandleX-IA e a emissão do certificado.
              </p>
            </div>
          </div>

        </div>

        {/* Legal Risk Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 space-y-3">
          <div className="flex items-center gap-2 text-slate-400 font-semibold text-[11px]">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>AVISO LEGAL E DE RISCO</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            As operações em contratos de Opções Binárias e instrumentos de tempo de expiração fixo envolvem risco de perda de capital. Opere apenas quantias adequadas ao seu perfil de gerenciamento de risco. O Robô CandleX-IA é uma ferramenta de automação e auxílio técnico baseada em algoritmos preditivos de Price Action, não constituindo garantia absoluta de lucros. Os resultados passados não garantem lucros futuros.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[11px] text-slate-400 font-mono">
            <span>© {new Date().getFullYear()} CANDLEX-IA. Todos os direitos reservados.</span>
            <span>WhatsApp Oficial: {WHATSAPP_DISPLAY} · Ref: 363B3</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
