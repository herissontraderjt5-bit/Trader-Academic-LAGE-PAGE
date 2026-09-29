import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, PlayCircle, ShieldCheck } from 'lucide-react';

const NOTIFICATIONS = [
  { text: "Fernando S. acabou de lucrar R$ 180,00 com a análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Amanda C. está terminando de assistir a Aula 05 do Trader Academic", icon: PlayCircle, color: "text-blue-400" },
  { text: "Ricardo O. bateu a meta de 3x0 usando o robô CandleX-IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Julio M. tomou um loss de R$ 30,00, mas já está recuperando com a IA", icon: TrendingDown, color: "text-rose-400" },
  { text: "Marcos P. lucrou R$ 250,00 seguindo a confluência da IA em M5", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Camila T. acabou de lucrar R$ 95,00 com o sinal do CandleX-IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Tiago L. teve um stop loss hoje, seguindo o gerenciamento do curso", icon: TrendingDown, color: "text-rose-400" },
  { text: "Luciana R. fez R$ 420,00 de lucro com as métricas preditivas da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Bruno K. ativou o robô CandleX-IA na corretora HIOVE agora", icon: ShieldCheck, color: "text-fuchsia-400" },
  { text: "Pedro H. lucrou R$ 115,00 no fluxo contínuo com análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Sabrina W. bateu a meta diária usando o CandleX-IA", icon: TrendingUp, color: "text-emerald-400" },
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
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
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
