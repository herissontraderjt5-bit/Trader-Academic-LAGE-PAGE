import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ShieldCheck, MessageCircle } from 'lucide-react';

const NOTIFICATIONS = [
  // Lucros
  { text: "João P. acabou de lucrar R$ 125,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Ana T. acabou de lucrar R$ 240,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Roberto S. acabou de lucrar R$ 85,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Amanda G. acabou de lucrar R$ 310,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Felipe B. acabou de lucrar R$ 180,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Letícia D. acabou de lucrar R$ 420,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Rodrigo V. acabou de lucrar R$ 95,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },

  // Entrou no Telegram
  { text: "Maria F. acabou de entrar no Grupo VIP do Telegram", icon: MessageCircle, color: "text-[#229ED9]" },
  { text: "Lucas C. acabou de entrar no Grupo VIP do Telegram", icon: MessageCircle, color: "text-[#229ED9]" },
  { text: "Beatriz N. acabou de entrar no Grupo VIP do Telegram", icon: MessageCircle, color: "text-[#229ED9]" },
  { text: "Thiago H. acabou de entrar no Grupo VIP do Telegram", icon: MessageCircle, color: "text-[#229ED9]" },

  // Loss Realista
  { text: "Carlos R. tomou um loss de R$ 25,00, mas já está recuperando com a IA", icon: TrendingDown, color: "text-rose-400" },
  { text: "Priscila J. teve um stop loss hoje, mas segue o gerenciamento da IA", icon: TrendingDown, color: "text-rose-400" },
  { text: "Rafael L. tomou um loss de R$ 40,00, aguardando próximo sinal da IA", icon: TrendingDown, color: "text-rose-400" },

  // Ativou Robô
  { text: "Juliana M. ativou o robô CandleX-IA na corretora HIOVE", icon: ShieldCheck, color: "text-fuchsia-400" },
  { text: "Fernanda A. ativou o robô CandleX-IA na corretora HIOVE", icon: ShieldCheck, color: "text-fuchsia-400" },
  { text: "Eduardo K. ativou o robô CandleX-IA na corretora HIOVE", icon: ShieldCheck, color: "text-fuchsia-400" },
  
  // Mais Lucros para dominar a lista
  { text: "Camila T. acabou de lucrar R$ 150,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Marcos P. acabou de lucrar R$ 275,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Sabrina W. acabou de lucrar R$ 115,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" }
];

export const SocialProofNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(412);

  useEffect(() => {
    // Fluctuating users connected between 367 and 831
    const userInterval = setInterval(() => {
      setOnlineUsers(prev => {
        const change = Math.floor(Math.random() * 15) - 5; // -5 to +10
        let newVal = prev + change;
        if (newVal < 367) newVal = 367 + Math.floor(Math.random() * 20);
        if (newVal > 831) newVal = 831 - Math.floor(Math.random() * 20);
        return newVal;
      });
    }, 4000);

    // Initial delay before showing first notification
    const initialTimer = setTimeout(() => setIsVisible(true), 2000);

    const rotationInterval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        // Pick a random notification but prevent immediate repeats if possible
        setCurrentIndex((prev) => {
          let next;
          do {
            next = Math.floor(Math.random() * NOTIFICATIONS.length);
          } while (next === prev && NOTIFICATIONS.length > 1);
          return next;
        });
        setIsVisible(true);
      }, 600); // 600ms fade out before changing and fading in
      
    }, 10000); // Change every 10 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(rotationInterval);
      clearInterval(userInterval);
    };
  }, []);

  const currentNotification = NOTIFICATIONS[currentIndex];
  const Icon = currentNotification.icon;

  return (
    <div className="fixed top-20 sm:top-24 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Online Users Indicator */}
      <div className="bg-[#0f172a]/90 backdrop-blur-md border border-slate-700/50 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
        <div className="relative flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping absolute"></span>
          <span className="w-2 h-2 rounded-full bg-red-500 relative shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
        </div>
        <span className="text-[10px] sm:text-xs font-bold text-slate-200 tracking-wide">
          {onlineUsers} USUÁRIOS ONLINE
        </span>
      </div>

      {/* Social Proof Toast */}
      <div 
        className={`transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <div className="bg-[#0f172a]/95 backdrop-blur-md border border-slate-700/50 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-[280px] sm:max-w-xs">
          <div className="shrink-0 bg-slate-800 rounded-full p-2">
            <Icon className={`w-5 h-5 ${currentNotification.color}`} />
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
            {currentNotification.text}
          </p>
        </div>
      </div>

    </div>
  );
};
