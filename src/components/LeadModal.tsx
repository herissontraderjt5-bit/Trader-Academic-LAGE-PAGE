import React, { useState } from 'react';
import { TARGET_AFFILIATE_URL, TELEGRAM_GROUP_URL, WHATSAPP_URL, WHATSAPP_DISPLAY, LeadFormData } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Send, Phone, Bot } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadCaptured?: (data: LeadFormData) => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, onLeadCaptured }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    experienceLevel: 'iniciante',
    objective: 'CandleX-IA + Opções Binárias + Certificado',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const existingLeads = JSON.parse(localStorage.getItem('candlex_ia_leads') || '[]');
      existingLeads.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('candlex_ia_leads', JSON.stringify(existingLeads));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onLeadCaptured) {
        onLeadCaptured(formData);
      }
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-left">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2 font-mono">
              <Bot className="w-4 h-4 text-amber-400" />
              <span>ATENDIMENTO PRIORITÁRIO CANDLEX-IA</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Acesso ao Robô CandleX-IA & Mentoria
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 mb-6">
              Preencha seus dados para garantir sua vaga com acesso ao Robô CandleX-IA de Opções Binárias, sala ao vivo e Certificado Oficial de Conclusão.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: (69) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  E-mail Principal
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Seu Momento Atual em Opções Binárias
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="iniciante">Iniciante / Nunca operei binárias</option>
                  <option value="intermediario">Já quebrei banca e quero operar sem Martingale</option>
                  <option value="avancado">Já tenho lucro e quero alavancar com o CandleX-IA</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  {loading ? (
                    <span>Registrando dados...</span>
                  ) : (
                    <>
                      <span>Garantir Meu Acesso ao CandleX-IA</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Atendimento oficial: {WHATSAPP_DISPLAY}</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white font-display">
                Cadastro Confirmado, {formData.name}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Sua vaga para o Robô CandleX-IA de Opções Binárias e o Certificado Oficial de Conclusão está reservada.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Nome:</span>
                <span className="text-white font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">WhatsApp Cadastrado:</span>
                <span className="text-white font-medium">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Benefícios:</span>
                <span className="text-amber-400 font-bold">CandleX-IA + Sala de Binárias + Certificado</span>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md"
              >
                <span>Acessar Plataforma Oficial CandleX-IA</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Confirmar no WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>

              <a
                href={TELEGRAM_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-6 text-[#229ED9] hover:text-white font-semibold text-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Entrar no Grupo VIP do Telegram</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
