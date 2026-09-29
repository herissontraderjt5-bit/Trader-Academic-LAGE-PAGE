import React from 'react';
import { TARGET_AFFILIATE_URL, TELEGRAM_GROUP_URL, WHATSAPP_URL, WHATSAPP_DISPLAY } from '../types';
import { ExternalLink, Send, MessageCircle, Bot } from 'lucide-react';

interface HeaderProps {
  onOpenLeadModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#070B12]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Wordmark & Robot Badge */}
          <a 
            href="#" 
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            <div className="w-8 h-8 rounded-full border border-amber-500/40 overflow-hidden shadow-lg shadow-amber-500/20 group-hover:border-amber-400 group-hover:shadow-amber-500/40 transition-all flex-shrink-0">
              <img src="/favicon.png" alt="CandleX-IA Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-black tracking-tight text-white font-display flex items-center gap-1.5">
              CANDLEX-IA
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            </span>
          </a>

          {/* High-Converting Landing Page Actions (No distracting menu links) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Telegram VIP Link */}
            <a
              href={TELEGRAM_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#229ED9] bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 rounded-lg transition-all"
              title="Grupo Telegram VIP"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Telegram VIP</span>
            </a>

            {/* WhatsApp Link */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>

            {/* Primary Action Button */}
            <a
              href={TARGET_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wide text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <span>Acessar CandleX-IA</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
