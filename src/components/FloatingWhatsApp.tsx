import React from 'react';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../types';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40 group">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-2xl shadow-emerald-500/40 transform hover:scale-105 active:scale-95 transition-all"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white"></span>
        </div>
        <span className="hidden sm:inline font-mono">Dúvidas? Chame no WhatsApp</span>
      </a>
    </aside>
  );
};
