import React, { useState } from 'react';
import { TARGET_AFFILIATE_URL } from '../types';
import { Target, RotateCcw, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export const ProfitCalculator: React.FC = () => {
  // Customizable bankroll and payout
  const [bankroll, setBankroll] = useState<number>(300);
  const [payout, setPayout] = useState<number>(84);
  const [strategy, setStrategy] = useState<string>('CandleX-IA');
  const [asset, setAsset] = useState<string>('EUR/USD');
  const [stopRiskPercent, setStopRiskPercent] = useState<number>(3.85); // ~$11.54 on $300

  // Interactive 2x1 workflow step: 1 = 1ª Mão, 2 = 2ª Mão (Soros), 3 = Meta Batida, 4 = Stop do Dia
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [currentBalance, setCurrentBalance] = useState<number>(300);
  const [sessionHistory, setSessionHistory] = useState<Array<{ step: string; result: 'WIN' | 'LOSS'; amount: number }>>([]);

  // 1ª Mão: calculated from risk %
  const hand1 = parseFloat(((bankroll * stopRiskPercent) / 100).toFixed(2));
  const profit1 = parseFloat((hand1 * (payout / 100)).toFixed(2));

  // 2ª Mão (Soros Nível 1): Initial stake + 1st hand profit
  const hand2 = parseFloat((hand1 + profit1).toFixed(2));
  const profit2 = parseFloat((hand2 * (payout / 100)).toFixed(2));

  // Meta 2x0 total net profit
  const totalTargetProfit = parseFloat((profit1 + profit2).toFixed(2));
  const targetPercent = parseFloat(((totalTargetProfit / bankroll) * 100).toFixed(1));

  // Stop diário: exactly hand 1
  const stopLossAmount = hand1;
  const riskRewardRatio = (totalTargetProfit / stopLossAmount).toFixed(2);

  // Handle Win Button
  const handleWin = () => {
    if (step === 1) {
      setCurrentBalance((prev) => parseFloat((prev + profit1).toFixed(2)));
      setSessionHistory((prev) => [...prev, { step: '1ª Mão', result: 'WIN', amount: profit1 }]);
      setStep(2);
    } else if (step === 2) {
      setCurrentBalance((prev) => parseFloat((prev + profit2).toFixed(2)));
      setSessionHistory((prev) => [...prev, { step: '2ª Mão (Soros)', result: 'WIN', amount: profit2 }]);
      setStep(3); // Meta Batida!
    }
  };

  // Handle Loss Button
  const handleLoss = () => {
    if (step === 1) {
      setCurrentBalance((prev) => parseFloat((prev - hand1).toFixed(2)));
      setSessionHistory((prev) => [...prev, { step: '1ª Mão', result: 'LOSS', amount: -hand1 }]);
      setStep(4); // Stop do Dia atingido
    } else if (step === 2) {
      // In Soros, you risked hand1 + profit1. Net loss for the day is still ONLY hand1!
      setCurrentBalance((prev) => parseFloat((prev - profit1 - hand1).toFixed(2)));
      setSessionHistory((prev) => [...prev, { step: '2ª Mão (Soros)', result: 'LOSS', amount: -hand1 }]);
      setStep(4); // Stop atingido
    }
  };

  // Reset simulator
  const handleReset = () => {
    setStep(1);
    setCurrentBalance(bankroll);
    setSessionHistory([]);
  };

  return (
    <section id="simulador" className="py-16 md:py-24 bg-[#080C14] border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/30 font-mono">
            <Target className="w-4 h-4 text-emerald-400" />
            <span>GESTÃO 2X1 PARA O INICIANTE TER O HÁBITO DA CONSISTÊNCIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            A Matemática da Gestão 2x1 com Soros
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            O iniciante quebra banca porque faz 20 entradas por dia. Com a <strong className="text-emerald-400">Gestão 2x1</strong>, você só faz no máximo 2 operações: arrisca 1 mão de stop para buscar <strong className="text-emerald-300">2.38x de retorno</strong>. Se tomar 1 loss, fecha a tela e volta amanhã.
          </p>
        </div>

        {/* The Exact 2x1 Terminal Container from User's Screenshot */}
        <div className="rounded-2xl bg-[#0B0F19] border border-slate-800/90 shadow-2xl p-4 sm:p-7 space-y-6">
          
          {/* Top Bar: Gestão 2x1 (Soros) | Banca $300 · Saldo $317.83 | Reiniciar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Target className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                    Gestão 2x1 (Soros)
                  </h3>
                  <span className="text-[10px] font-mono bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded border border-amber-500/40 font-bold">
                    1 Entrada + 1 Soros
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5 flex items-center gap-2">
                  <span>Banca Inicial: <strong className="text-white">${bankroll.toFixed(2)}</strong></span>
                  <span className="text-slate-600">·</span>
                  <span>Saldo Atual: <strong className="text-emerald-400">${currentBalance.toFixed(2)}</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Controls & Reset Button */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 text-xs font-mono bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                <span className="text-slate-400">Banca:</span>
                <select
                  value={bankroll}
                  onChange={(e) => {
                    const newBanca = Number(e.target.value);
                    setBankroll(newBanca);
                    setCurrentBalance(newBanca);
                    setStep(1);
                  }}
                  className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
                >
                  <option value={100} className="bg-slate-900">$100.00</option>
                  <option value={200} className="bg-slate-900">$200.00</option>
                  <option value={300} className="bg-slate-900">$300.00 (Padrão)</option>
                  <option value={500} className="bg-slate-900">$500.00</option>
                  <option value={1000} className="bg-slate-900">$1.000.00</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>

          {/* 4 Cards Matrix (Exact as in Screenshot): 1ª Mão | 2ª Mão | Meta Diária (2x0) | Stop Diário */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-mono">
            
            {/* Card 1: 1ª MÃO (STOP DIÁRIO) */}
            <div className={`p-4 rounded-xl border transition-all ${
              step === 1 
                ? 'bg-slate-900/90 border-amber-500/60 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30' 
                : 'bg-slate-950/70 border-slate-800/80 text-slate-400'
            }`}>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                1ª MÃO (STOP DIÁRIO)
              </div>
              <div className="text-2xl font-black text-white mt-1">
                ${hand1.toFixed(2)}
              </div>
              <div className="text-xs text-emerald-400 font-bold mt-1">
                + ${profit1.toFixed(2)} no WIN ({payout}%)
              </div>
            </div>

            {/* Card 2: 2ª MÃO (SOROS NÍVEL 1) */}
            <div className={`p-4 rounded-xl border transition-all ${
              step === 2 
                ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30' 
                : 'bg-slate-950/70 border-slate-800/80 text-slate-400'
            }`}>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                2ª MÃO (SOROS NÍVEL 1)
              </div>
              <div className="text-2xl font-black text-cyan-300 mt-1">
                ${hand2.toFixed(2)}
              </div>
              <div className="text-xs text-emerald-400 font-bold mt-1">
                + ${profit2.toFixed(2)} no WIN ({payout}%)
              </div>
            </div>

            {/* Card 3: META DIÁRIA (2X0) */}
            <div className={`p-4 rounded-xl border transition-all ${
              step === 3 
                ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-500/20' 
                : 'bg-slate-950/70 border-slate-800/80 text-slate-400'
            }`}>
              <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                META DIÁRIA (2X0)
              </div>
              <div className="text-2xl font-black text-emerald-400 mt-1">
                +${totalTargetProfit.toFixed(2)}
              </div>
              <div className="text-xs text-emerald-300 font-bold mt-1">
                +{targetPercent}% da banca
              </div>
            </div>

            {/* Card 4: STOP DIÁRIO */}
            <div className={`p-4 rounded-xl border transition-all ${
              step === 4 
                ? 'bg-rose-950/40 border-rose-500/60 shadow-lg shadow-rose-500/20' 
                : 'bg-slate-950/70 border-slate-800/80 text-slate-400'
            }`}>
              <div className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">
                STOP DIÁRIO
              </div>
              <div className="text-2xl font-black text-rose-400 mt-1">
                -${stopLossAmount.toFixed(2)}
              </div>
              <div className="text-xs text-slate-400 font-bold mt-1">
                Risco 1 : {riskRewardRatio} Retorno
              </div>
            </div>

          </div>

          {/* Interactive Live Execution Box (Exact matching Image 2) */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-5">
            
            {/* Header: EXECUÇÃO AO VIVO | Passo 1 de 2: 1ª Mão */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>EXECUÇÃO AO VIVO</span>
              </div>
              
              <div className="text-xs font-mono font-bold">
                {step === 1 && (
                  <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Passo 1 de 2: 1ª Mão (Entrada Normal)
                  </span>
                )}
                {step === 2 && (
                  <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Passo 2 de 2: 2ª Mão (Soros Nível 1 com o Lucro)
                  </span>
                )}
                {step === 3 && (
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    META DIÁRIA CONQUISTADA: 2X0 BATIDO!
                  </span>
                )}
                {step === 4 && (
                  <span className="text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/30">
                    STOP DO DIA ATINGIDO: FECHE A CORRETORA
                  </span>
                )}
              </div>
            </div>

            {/* Inputs: Estratégia | Ativo | Payout (%) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div>
                <label className="block text-[10px] uppercase text-slate-400 mb-1">
                  Estratégia
                </label>
                <select
                  value={strategy}
                  onChange={(e) => setStrategy(e.target.value)}
                  className="w-full bg-[#0B0F19] border border-slate-800 rounded-lg p-2.5 text-white font-bold focus:outline-none focus:border-amber-400"
                >
                  <option value="CandleX-IA">CandleX-IA (Sinal Vela por Vela)</option>
                  <option value="RetracaoM5">Retração de M5 Institucional</option>
                  <option value="FluxoM1">Fluxo em M1</option>
                  <option value="OTC">Padrões de Mercado OTC</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-slate-400 mb-1">
                  Ativo
                </label>
                <select
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                  className="w-full bg-[#0B0F19] border border-slate-800 rounded-lg p-2.5 text-white font-bold focus:outline-none focus:border-amber-400"
                >
                  <option value="EUR/USD">EUR/USD</option>
                  <option value="GBP/USD">GBP/USD</option>
                  <option value="USD/JPY">USD/JPY</option>
                  <option value="EUR/JPY">EUR/JPY</option>
                  <option value="AUD/CAD (OTC)">AUD/CAD (OTC)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase text-slate-400 mb-1">
                  Payout (%)
                </label>
                <input
                  type="number"
                  min="70"
                  max="98"
                  value={payout}
                  onChange={(e) => setPayout(Number(e.target.value))}
                  className="w-full bg-[#0B0F19] border border-slate-800 rounded-lg p-2.5 text-white font-bold focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Readout & Execution Buttons: WIN (Ir p/ Soros) | LOSS (Stop do Dia) */}
            <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Current Hand Value */}
              <div className="font-mono text-sm">
                <span className="text-slate-400">Entrada Atual: </span>
                <span className="text-white font-black text-base sm:text-lg">
                  ${step === 1 ? hand1.toFixed(2) : step === 2 ? hand2.toFixed(2) : '0.00'}
                </span>
                <span className="text-emerald-400 text-xs font-bold ml-2">
                  (Lucro se WIN: +${step === 1 ? profit1.toFixed(2) : step === 2 ? profit2.toFixed(2) : '0.00'})
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                {step <= 2 ? (
                  <>
                    <button
                      type="button"
                      onClick={handleWin}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black font-mono text-xs sm:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                      <span>{step === 1 ? 'WIN (Ir p/ Soros)' : 'WIN (Bater Meta 2x0)'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleLoss}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-white font-black font-mono text-xs sm:text-sm shadow-lg shadow-rose-500/20 active:scale-95 transition-all"
                    >
                      <XCircle className="w-4 h-4 stroke-[2.5]" />
                      <span>LOSS (Stop do Dia)</span>
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full md:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold font-mono text-xs sm:text-sm transition-all"
                  >
                    Iniciar Nova Sessão de 2x1
                  </button>
                )}
              </div>

            </div>

          </div>

          {/* Educational Insights: Por que a Gestão 2x1 cria o hábito da consistência? */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="space-y-1">
              <span className="font-bold text-amber-400 font-mono block">1. Stop Estrito de 1 Entrada</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Se você errar a 1ª mão, você perde apenas ~3.8% da banca e desliga a corretora. Nunca há quebra de banca.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-cyan-400 font-mono block">2. Alavancagem com o Dinheiro da Corretora</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Na 2ª mão (Soros), você entra com o lucro da primeira. Se der loss, seu prejuízo real continua sendo apenas a 1ª mão!
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-emerald-400 font-mono block">3. O Fim do Overtrading</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Você só precisa de 2 operações assertivas confluenciadas com o CandleX-IA para fechar o dia com mais de 9% de lucro.
              </p>
            </div>
          </div>

          {/* CTA Banner inside calculator */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-white font-display">
                Quer aplicar a Gestão 2x1 ao vivo com o mentor e o CandleX-IA?
              </div>
              <div className="text-xs text-slate-400">
                Aprenda a rotina diária que faz iniciantes baterem meta e realizarem saques todas as semanas.
              </div>
            </div>

            <a
              href={TARGET_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all whitespace-nowrap"
            >
              <span>Acessar Mentoria & CandleX-IA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
