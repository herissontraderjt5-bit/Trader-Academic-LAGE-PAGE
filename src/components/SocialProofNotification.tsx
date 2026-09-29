import React, { useState, useEffect } from 'react';
import { CheckCircle2, TrendingUp, Users, PlayCircle, Star } from 'lucide-react';

const NOTIFICATIONS = [
  { text: "Fernando S. acabou de lucrar R$ 180,00 com análise da IA", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Amanda C. está terminando de assistir a Aula 05 do Trader Academic", icon: PlayCircle, color: "text-amber-400" },
  { text: "Ricardo O. resgatou os 60 Dias Grátis do CandleX-IA", icon: CheckCircle2, color: "text-emerald-400" },
  { text: "Juliana M. acabou de bater a meta de 3x0 usando o robô", icon: Star, color: "text-amber-400" },
  { text: "Usuários Online: 147 traders ativos operando agora", icon: Users, color: "text-[#229ED9]" },
  { text: "Marcos P. lucrou R$ 250,00 seguindo a confluência em M5", icon: TrendingUp, color: "text-emerald-400" },
  { text: "Camila T. ativou o robô CandleX-IA na corretora HIOVE", icon: CheckCircle2, color: "text-fuchsia-400" }
];

export const SocialProofNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing first notification
    const initialTimer = setTimeout(() => setIsVisible(true), 2000);

    const rotationInterval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 500); // 500ms fade out before changing and fading in
      
    }, 5500); // Change every 5 seconds (5s visible + 0.5s fade out)

    return () => {
      clearTimeout(initialTimer);
      clearInterval(rotationInterval);
    };
  }, []);

  const currentNotification = NOTIFICATIONS[currentIndex];
  const Icon = currentNotification.icon;

  return (
    <div 
      className={`fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-[#0f172a]/95 backdrop-blur-md border border-slate-700/50 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-sm">
        <div className="shrink-0 bg-slate-800 rounded-full p-2">
          <Icon className={`w-5 h-5 ${currentNotification.color}`} />
        </div>
        <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
          {currentNotification.text}
        </p>
      </div>
    </div>
  );
};
