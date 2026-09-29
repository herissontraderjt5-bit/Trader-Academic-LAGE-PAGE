import React from 'react';
import { TARGET_AFFILIATE_URL } from '../types';
import { X, Check, ArrowRight } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      feature: 'Método Operacional',
      alone: 'Salas de sinais de Telegram, robôs milagrosos e indicadores com delay',
      academic: 'Price Action puro: suporte, resistência, retração de M5 e fluxo de M1',
    },
    {
      feature: 'Martingale',
      alone: 'Gale 2, Gale 3 ou Gale infinito que devora a banca inteira em minutos',
      academic: '100% Sem Martingale cego: operação com Mão Fixa ou Soros estruturado',
    },
    {
      feature: 'Tempo na Tela',
      alone: 'Fica horas clicando compulsivamente (overtrading) e devolve tudo',
      academic: 'Rotina de meta rápida: 3 a 4 operações cirúrgicas (30 a 50 minutos) e desliga a tela',
    },
    {
      feature: 'Mercado OTC',
      alone: 'Opera como se fosse cassino e perde dinheiro nos finais de semana',
      academic: 'Identificação dos padrões de repetição e continuidade do algoritmo de OTC',
    },
    {
      feature: 'Sala de Operações',
      alone: 'Sozinho na frente do gráfico, travando na hora do clique por medo',
      academic: 'Sala ao vivo diária pegando as taxas em tempo real com o mentor',
    },
    {
      feature: 'Resultado Financeiro',
      alone: 'Ciclo vicioso de depositar, quebrar a banca e culpar a corretora',
      academic: 'Consistência de ganhos, preservação do capital e saques semanais via PIX',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0A0F1D]/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
            Comparativo de Realidade
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Por que 97% quebram a banca em Opções Binárias?
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Veja a diferença brutal entre a ilusão das salas de sinais com Martingale e a formação de um trader de binárias profissional.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 text-center border-b border-slate-800 font-display">
            <div className="p-4 sm:p-5 bg-rose-950/20 text-rose-300 font-bold border-b md:border-b-0 md:border-r border-slate-800 flex items-center justify-center gap-2">
              <X className="w-5 h-5 text-rose-400" />
              <span>Salas de Sinais & Martingale (Amador)</span>
            </div>
            <div className="p-4 sm:p-5 bg-emerald-950/30 text-emerald-300 font-bold flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>CANDLEX-IA & Mentoria (Profissional)</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 text-xs sm:text-sm">
                {/* Alone */}
                <div className="p-4 sm:p-5 bg-slate-950/40 text-slate-300 border-b md:border-b-0 md:border-r border-slate-800/80 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400 text-xs uppercase mb-1">
                      {item.feature}
                    </span>
                    <span>{item.alone}</span>
                  </div>
                </div>

                {/* Academic */}
                <div className="p-4 sm:p-5 bg-emerald-950/10 text-slate-100 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-emerald-400 text-xs uppercase mb-1">
                      Com o CandleX-IA
                    </span>
                    <span className="font-medium">{item.academic}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct CTA */}
        <div className="mt-10 text-center">
          <a
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all"
          >
            <span>Quero Operar Como Profissional Sem Martingale</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
