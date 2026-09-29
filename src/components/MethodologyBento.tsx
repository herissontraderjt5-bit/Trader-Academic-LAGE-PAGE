import React from 'react';
import { TARGET_AFFILIATE_URL } from '../types';
import { Target, Shield, Radio, Cpu, Award, ArrowRight, Check, Zap } from 'lucide-react';

export const MethodologyBento: React.FC = () => {
  return (
    <section id="metodologia" className="py-16 md:py-24 bg-[#070B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
            Os 5 Pilares de Opções Binárias do CandleX-IA
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-normal leading-snug">
            A metodologia para você bater meta diária e viver de saques em Opções Binárias.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Esqueça salas de sinais que usam Martingale Gale 3 e quebram sua banca inteira na primeira sequência ruim. Você vai dominar a mecânica de movimentação de velas, zonas de retração e confluências de Inteligência Artificial com o CandleX-IA.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1 (Span 2): Price Action de Retração e Reversão */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  01. TÉCNICA OPERACIONAL DE VELAS
                </span>
                <Target className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                Price Action Puro: Retração de M5 e Fluxo em M1
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Aprenda a identificar o momento exato do esticamento da vela, o pico no suporte ou resistência e a rejeição de preço. Sem precisar de 10 indicadores poluindo a tela.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Gatilhos de entrada nos primeiros 30 segundos da vela</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zonas de retração em M5 com suporte institucional H1</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Simetria de pavios, taxas divididas e falsos rompimentos</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Operações a favor da tendência com fluxo de continuidade</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-amber-300">Compatível exclusivamente com a melhor corretora: Hiove (Oficial Real)</span>
              <span className="font-mono text-emerald-400">Assertividade média: 85% a 92%</span>
            </div>
          </div>

          {/* Bento Card 2: Robô com IA CandleX-IA */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-amber-500/40 hover:border-amber-500/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-amber-400 font-semibold">
                  02. AUTOMAÇÃO INTELIGENTE
                </span>
                <Cpu className="w-6 h-6 text-amber-400" />
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-3">
                Robô CandleX-IA Incluso
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Receba confluências automáticas e alertas preditivos de velas de Opções Binárias diretamente no Telegram VIP. O robô filtra as melhores entradas sem Martingale.
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Escaneamento automático em tempo real</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Alertas instantâneos no Telegram VIP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Zero mensalidade para alunos da mentoria</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-amber-400 font-mono">
              Assertividade com filtro de notícias
            </div>
          </div>

          {/* Bento Card 3: Sala Operacional Ao Vivo Diária */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  03. SESSÕES AO VIVO
                </span>
                <Radio className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-3">
                Sala de Operações Ao Vivo
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Transmissão em alta resolução e sem delay. O mentor analisa o gráfico de binárias, antecipa a taxa exata e você executa com tranquilidade.
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sessões matinais e noturnas (Mercado & OTC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Meta batida em média de 30 a 50 minutos</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Acesso a todas as gravações para revisão
            </div>
          </div>

          {/* Bento Card 4: Especialização em Mercado OTC */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-purple-400 font-semibold">
                  04. MERCADO OTC
                </span>
                <Zap className="w-6 h-6 text-purple-400" />
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-3">
                Especialização em Mercado OTC
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Opere nos fins de semana e à noite com a leitura correta do algoritmo de OTC. Descubra os padrões de repetição de vela que as corretoras respeitam para lucrar fora do horário bancário.
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Padrões de continuidade de fluxo no OTC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Payouts de 88% a 95% operados com segurança</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Lucro nos finais de semana garantido
            </div>
          </div>

          {/* Bento Card 5: Gestão Anti-Quebra & Soros */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 font-semibold">
                  05. MATEMÁTICA DA BANCA
                </span>
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-3">
                Gestão Blindada Sem Martingale
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Diga adeus ao Martingale cego que arrisca a banca toda para ganhar 5 reais. Opere com gerenciamento de Soros consciente ou Mão Fixa com meta diária de 3x0 ou 3x1.
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Soros Nível 1 & 2 com proteção de lucro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Limite estrito de stop loss diário (2 stops = fecha tela)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 group"
              >
                <span>Conhecer a grade da mentoria de binárias</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
