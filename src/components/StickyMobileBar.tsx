import React from 'react';
import { TARGET_AFFILIATE_URL, WHATSAPP_URL } from '../types';
import { ArrowRight, Phone, Bot } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenModal?: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenModal }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070B12]/95 border-t border-slate-800/90 px-3 py-2.5 backdrop-blur-lg shadow-2xl flex items-center justify-between gap-2 h-14">
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] text-amber-400 font-mono font-bold leading-tight truncate flex items-center gap-1">
          <Bot className="w-3 h-3 text-amber-400 shrink-0" />
          CandleX-IA · 60 Dias Free
        </span>
        <span className="text-xs font-bold text-white font-mono leading-tight truncate">
          Comprove na HIOVE
        </span>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
          aria-label="WhatsApp"
        >
          <Phone className="w-3.5 h-3.5" />
        </a>

        <a
          href={TARGET_AFFILIATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow-md active:scale-95 transition-all whitespace-nowrap"
        >
          <span>Acessar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
