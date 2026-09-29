import React, { useState } from 'react';
import { FaqItem, TARGET_AFFILIATE_URL, TELEGRAM_GROUP_URL, WHATSAPP_URL, WHATSAPP_DISPLAY } from '../types';
import { ChevronDown, HelpCircle, ArrowRight, Send, Phone, Bot } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Como funciona o acesso de 60 dias free para comprovar a ferramenta?',
      answer: 'Liberamos 60 dias de acesso 100% gratuito ao Robô CandleX-IA para você comprovar a assertividade e a alta qualidade da ferramenta operando na corretora HIOVE. Durante 2 meses inteiros você não paga mensalidade, recebe os alertas de confluência em tempo real no Telegram VIP e saca todos os seus lucros diretamente na sua conta bancária via PIX sem travas.',
    },
    {
      question: 'O que é o CandleX-IA e como ele opera em Opções Binárias?',
      answer: 'O CandleX-IA é um robô de Inteligência Artificial preditiva que escaneia velas de Opções Binárias em tempo real. Ele detecta esticamento de vela, zonas institucionais de retração em M5 e fluxo em M1, enviando os alertas com a taxa exata de COMPRA ou VENDA diretamente no Telegram VIP dos alunos antes da abertura da vela.',
    },
    {
      question: 'Em qual corretora de Opções Binárias o CandleX-IA opera?',
      answer: 'O CandleX-IA é compatível exclusivamente com a melhor corretora no momento: a HIOVE. A inteligência artificial do robô foi desenvolvida e calibrada especificamente sobre o algoritmo de velas, tempos de expiração e liquidez da Hiove, garantindo taxa de assertividade máxima, zero delay na execução, payouts de 89% a 92% e saques rápidos via PIX.',
    },
    {
      question: 'O CandleX-IA utiliza Martingale nas operações?',
      answer: 'Não! Somos totalmente contra o uso de Martingale cego (Gale 1, 2, 3), que é o grande responsável pela quebra de bancas em opções binárias. O CandleX-IA foca em assertividade de primeira (Gale 0) e ensinamos a gestão de Mão Fixa e Soros Nível 1 e 2.',
    },
    {
      question: 'Como e quando recebo o Certificado Oficial de Conclusão?',
      answer: 'Ao concluir as aulas e a prática assistida de Opções Binárias, você recebe digitalmente o Certificado Oficial de Conclusão do CandleX-IA com carga horária de 120 horas e código de autenticidade único para validação nacional.',
    },
    {
      question: 'O CandleX-IA funciona para o Mercado OTC (fins de semana e noites)?',
      answer: 'Sim! Temos uma programação algorítmica específica dentro do CandleX-IA para o mercado OTC, identificando os padrões de repetição e continuidade que o algoritmo do OTC respeita com payouts excelentes de 88% a 95%.',
    },
    {
      question: 'Como funciona a garantia de 7 dias incondicional?',
      answer: 'Você tem 7 dias de garantia total. Se ingressar na mentoria, testar os sinais do CandleX-IA e achar que o método não é para você, basta solicitar e 100% do seu investimento será devolvido imediatamente.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#070B12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 font-mono">
            <Bot className="w-4 h-4 text-amber-400" />
            <span>PERGUNTAS FREQUENTES · CANDLEX-IA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Tire suas dúvidas sobre o CandleX-IA e a Mentoria.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Transparência total sobre o robô de inteligência artificial para Opções Binárias e o Certificado.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-800 text-slate-300 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-amber-500/20 text-amber-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Box with Telegram and WhatsApp */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4">
          <p className="text-sm text-slate-300">
            Ainda restou alguma pergunta? Fale diretamente com nossa equipe no WhatsApp ou Telegram:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={TELEGRAM_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#229ED9] hover:bg-[#1e8ec3] text-white font-bold text-xs rounded-lg transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Canal VIP no Telegram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
