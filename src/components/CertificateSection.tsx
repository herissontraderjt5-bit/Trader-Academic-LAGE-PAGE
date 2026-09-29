import React from 'react';
import { TARGET_AFFILIATE_URL, WHATSAPP_URL } from '../types';
import { Award, ShieldCheck, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';

export const CertificateSection: React.FC = () => {
  return (
    <section id="certificado" className="py-16 md:py-24 bg-[#070B12] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <Award className="w-4 h-4 text-amber-400" />
            <span>RECONHECIMENTO & AUTORIDADE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-normal leading-snug">
            Mentoria com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              Certificado Oficial de Conclusão
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Ao finalizar a mentoria de Opções Binárias e dominar a execução com o Robô CandleX-IA, você recebe o Certificado Oficial de Habilitação com registro nacional e carga horária de 120 horas.
          </p>
        </div>

        {/* Certificate Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Certificate Visual Artifact */}
          <div className="lg:col-span-7">
            <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-emerald-500/20 to-amber-500/40 shadow-2xl shadow-amber-950/20">
              
              {/* Diploma Card */}
              <div className="rounded-[22px] bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] p-6 sm:p-10 border border-amber-500/30 text-center relative overflow-hidden select-none">
                
                {/* Decorative Guilloche Border in SVG */}
                <div className="absolute inset-3 border border-amber-500/20 rounded-xl pointer-events-none"></div>
                <div className="absolute inset-4 border border-dashed border-amber-500/10 rounded-lg pointer-events-none"></div>

                {/* Diploma Header */}
                <div className="relative space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block font-bold">
                    CANDLEX-IA · INSTITUTO DE FORMAÇÃO EM OPÇÕES BINÁRIAS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-wide pt-1">
                    CERTIFICADO DE CONCLUSÃO
                  </h3>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2"></div>
                </div>

                {/* Diploma Body Text */}
                <div className="relative my-6 space-y-3 max-w-lg mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Certificamos que o aluno concluiu com pleno êxito o programa de{' '}
                    <span className="text-white font-bold">
                      Mentoria de Alta Performance em Opções Binárias & Automação CandleX-IA
                    </span>
                    , abrangendo com excelência prática e teórica as disciplinas de:
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2 text-[11px] font-mono font-bold text-amber-300">
                    <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800">Retração M5</div>
                    <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800">Fluxo em M1</div>
                    <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800">Mercado OTC</div>
                    <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800">IA CandleX</div>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    Carga horária total: <strong className="text-slate-200">120 horas</strong> de imersão em Price Action de velas, confluências preditivas, gestão de banca com Soros e eliminação de Martingale.
                  </p>
                </div>

                {/* Signatures & Seal */}
                <div className="relative pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-left">
                  <div>
                    <div className="font-serif italic text-sm text-amber-300">Coordenação Pedagógica</div>
                    <div className="text-[10px] text-slate-400">CandleX-IA & Mentoria Oficial</div>
                  </div>

                  {/* Golden Official Stamp */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-0.5 shadow-lg flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-1">
                      <ShieldCheck className="w-4 h-4 text-amber-400 mb-0.5" />
                      <span className="text-[7px] font-mono text-amber-300 font-bold uppercase tracking-tighter">
                        AUTÊNTICO
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono text-[10px] text-emerald-400 font-bold">CÓD: CX-363B3-CERT</div>
                    <div className="text-[10px] text-slate-400">Registro Verificado</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Certificate Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Comprove sua competência como operador profissional de Opções Binárias.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Mais do que um simples curso, uma formação completa com o Robô CandleX-IA que valida seu conhecimento para operar bancas com consistência e sem quebras.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <FileCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Certificado de 120 Horas</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Contempla teoria de movimentação de velas, horas de tela na sala ao vivo e aplicação do CandleX-IA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Código de Autenticidade Único</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Registro individual que comprova a conclusão integral do programa de formação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Incluso Sem Mensalidade</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Emitido digitalmente em alta definição, pronto para impressão e emolduramento.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all text-center"
              >
                <span>Garantir Vaga com Certificado Oficial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
