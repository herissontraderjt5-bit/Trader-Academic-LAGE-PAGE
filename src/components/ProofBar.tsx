import React from 'react';
import { Users, TrendingUp, Award, Clock, Star, ShieldCheck, Zap } from 'lucide-react';

export const ProofBar: React.FC = () => {
  const stats = [
    {
      value: '+3.480',
      label: 'Alunos em Opções Binárias',
      subtext: 'Bancando saques consistentes',
      icon: Users,
    },
    {
      value: '87.6%',
      label: 'Assertividade na Sala',
      subtext: 'Taxas ao vivo com análise pura',
      icon: TrendingUp,
    },
    {
      value: 'R$ 3.8M+',
      label: 'Saques Realizados',
      subtext: 'Lucros auditados de mentorados',
      icon: Award,
    },
    {
      value: '60 Dias Free',
      label: 'Teste de Qualidade',
      subtext: 'Acesso 100% grátis na Hiove',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="resultados" className="py-10 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Header */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Resultados Comprovados no Mercado de Opções Binárias
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all text-center group"
              >
                <div className="inline-flex p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Market Guarantee Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Sessões ao vivo diárias: mercado aberto e sessões especiais de OTC</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Proteção total da banca com limite estrito de stop loss diário</span>
          </div>
          <div className="font-mono text-emerald-400 font-bold">
            Compatível Exclusivamente com a Melhor Corretora: Hiove (Oficial Real)
          </div>
        </div>

      </div>
    </section>
  );
};
