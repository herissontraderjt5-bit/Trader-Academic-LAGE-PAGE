import React, { useState } from 'react';
import { Testimonial, TARGET_AFFILIATE_URL } from '../types';
import { Star, ShieldCheck, ArrowRight, CheckCircle2, Bot } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Marcos Vinícius Siqueira',
      city: 'São Paulo - SP',
      role: 'Trader de Opções Binárias',
      market: 'Retração M5',
      avatarInitials: 'MV',
      avatarColor: 'from-emerald-500 to-teal-700',
      initialSituation: 'Quebrava bancas semanais com Martingale em salas de sinais amadoras.',
      currentResult: 'Mais de R$ 14.200 sacados nos últimos 2 meses com meta de 3x0 sem Gale.',
      profitMetric: '+R$ 14.200 em saques',
      timeframe: 'Aluno há 6 meses',
      quote: 'A mentoria e o CandleX-IA me ensinaram Price Action puro e a parar de tentar adivinhar velas. Hoje bato a meta de 3x0 na sala ao vivo em meia hora e desligo o computador.',
      verified: true,
      rating: 5,
    },
    {
      id: '2',
      name: 'Carla Albuquerque Mendonça',
      city: 'Belo Horizonte - MG',
      role: 'Aluna de Opções Binárias & CandleX-IA',
      market: 'CandleX-IA',
      avatarInitials: 'CA',
      avatarColor: 'from-cyan-500 to-blue-700',
      initialSituation: 'Trabalhava o dia todo e não tinha tempo para ficar analisando gráficos na tela.',
      currentResult: 'Usa os alertas do Robô CandleX-IA no Telegram para pegar taxas com 92% de acerto.',
      profitMetric: '+R$ 5.400 / mês com IA',
      timeframe: 'Aluna há 4 meses',
      quote: 'O Robô CandleX-IA foi um divisor de águas. Ele me manda o alerta no Telegram já com o par, o gatilho e a confluência. Só abro a corretora, confiro a taxa e executo sem medo.',
      verified: true,
      rating: 5,
    },
    {
      id: '3',
      name: 'Felipe Augusto Barreto',
      city: 'Curitiba - PR',
      role: 'Operador de Opções Binárias',
      market: 'Mercado OTC',
      avatarInitials: 'FB',
      avatarColor: 'from-amber-500 to-orange-700',
      initialSituation: 'Perdia todo o dinheiro operando no fim de semana no mercado OTC sem direção.',
      currentResult: 'Especialista em padrões de OTC na corretora Hiove com assertividade auditada de 88%.',
      profitMetric: '88% de assertividade OTC',
      timeframe: 'Aluno há 8 meses',
      quote: 'Todo mundo diz que OTC não respeita análise. O CandleX-IA e o mentor me provaram exatamente o contrário: o OTC tem padrões matemáticos de repetição de vela. Quando você aprende a identificar esses padrões, o payout de 92% vira lucro no bolso.',
      verified: true,
      rating: 5,
    },
    {
      id: '4',
      name: 'Rodrigo Paiva Lima',
      city: 'Goiânia - GO',
      role: 'Trader de Opções Binárias',
      market: 'Retração M5',
      avatarInitials: 'RP',
      avatarColor: 'from-purple-500 to-indigo-800',
      initialSituation: 'Faz histórico de 30 operações por dia (overtrading) e devolvia os lucros na primeira perda.',
      currentResult: 'Rotina rigorosa de 3 a 4 entradas por dia e saques semanais via PIX na corretora.',
      profitMetric: '+R$ 7.850 / mês',
      timeframe: 'Aluno há 5 meses',
      quote: 'O CandleX-IA me ensinou a ter paciência de sniper. Espero o gatilho perfeito na região de retração e executo sem hesitar. Meu histórico da corretora está verde todo mês.',
      verified: true,
      rating: 5,
    },
    {
      id: '5',
      name: 'Juliana Costa e Silva',
      city: 'Florianópolis - SC',
      role: 'Aluna Formada com Certificado Oficial',
      market: 'Fluxo M1',
      avatarInitials: 'JC',
      avatarColor: 'from-emerald-600 to-emerald-900',
      initialSituation: 'Começou do zero absoluto sem entender nada de gráficos de binárias.',
      currentResult: 'Certificada com 120 horas e gerando renda extra diária operando 40 minutos pela manhã.',
      profitMetric: '+R$ 4.200 / mês extra',
      timeframe: 'Aluna há 8 meses',
      quote: 'O Certificado de Conclusão de 120 horas foi um marco pessoal. Mostra que o Trader Academic e o CandleX-IA oferecem uma formação séria, com método didático e acompanhamento diário.',
      verified: true,
      rating: 5,
    },
    {
      id: '6',
      name: 'Lucas Nogueira Fontes',
      city: 'Rio de Janeiro - RJ',
      role: 'Membro Ativo do Grupo Telegram VIP',
      market: 'CandleX-IA',
      avatarInitials: 'LN',
      avatarColor: 'from-teal-500 to-slate-800',
      initialSituation: 'Entrava com a banca toda no desespero (all-in) e vivia quebrando.',
      currentResult: 'Consistência total com gerenciamento 2x1 e confluências do CandleX-IA.',
      profitMetric: '+R$ 11.900 acumulados',
      timeframe: 'Aluno há 7 meses',
      quote: 'A combinação da sala ao vivo com o Robô CandleX-IA no Telegram é imbatível. Você tem o mentor humano explicando os detalhes e a IA calculando as probabilidades das velas.',
      verified: true,
      rating: 5,
    },
  ];

  const filtered = activeFilter === 'todos' 
    ? testimonials 
    : testimonials.filter((t) => t.market.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#070B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
            Resultados Comprovados em Opções Binárias
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Quem opera Opções Binárias com o CandleX-IA relata isso:
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Depoimentos com nome, cidade e métricas reais de alunos que alcançaram a consistência e saques semanais.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveFilter('todos')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'todos'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Todos ({testimonials.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('candlex-ia')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'candlex-ia'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Robô CandleX-IA
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('retração')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'retração'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Retração M5
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('otc')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === 'otc'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Mercado OTC
          </button>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/70 p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {item.avatarInitials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-[11px] text-slate-400">
                        {item.city} · <span className="text-amber-400 font-medium">{item.market}</span>
                      </div>
                    </div>
                  </div>

                  {item.verified && (
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verificado</span>
                    </div>
                  )}
                </div>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] text-slate-400 ml-1.5 font-mono">
                    {item.timeframe}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-5">
                  "{item.quote}"
                </p>
              </div>

              {/* Concrete Outcome Box */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-400 mb-1">
                  Resultado Conquistado:
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">
                    {item.currentResult}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                    {item.profitMetric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Page Call to Action */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Quer transformar seu histórico de Opções Binárias com o CandleX-IA?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Junte-se a mais de 3.480 alunos formados. Acesse o robô de inteligência artificial e conquiste seu Certificado Oficial de Conclusão.
          </p>
          <div className="pt-2">
            <a
              href={TARGET_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>Quero Acessar o CandleX-IA Agora</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
