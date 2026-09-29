export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  experienceLevel: 'iniciante' | 'intermediario' | 'avancado';
  objective: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  market: 'Retração M5' | 'Fluxo M1' | 'Mercado OTC' | 'CandleX-IA';
  avatarInitials: string;
  avatarColor: string;
  initialSituation: string;
  currentResult: string;
  profitMetric: string;
  timeframe: string;
  quote: string;
  verified: boolean;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const TARGET_AFFILIATE_URL = "https://trader-academic-mentoria.vercel.app/?ref=363B3";
export const TELEGRAM_GROUP_URL = "https://t.me/+I-cQ-qziGpIzZjM5";
export const WHATSAPP_NUMBER = "5569999802629";
export const WHATSAPP_DISPLAY = "(69) 99980-2629";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pela página do CANDLEX-IA. Quero garantir meu acesso ao Robô de Opções Binárias, Mentoria e Certificado!"
)}`;
