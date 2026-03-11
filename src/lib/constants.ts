// =============================================
// CONSTANTES CENTRALIZADAS — ORAL UNIC
// Use este arquivo como fonte única de verdade
// para todas as páginas e landing pages.
// =============================================

// — Contato —
export const WHATSAPP_NUMBER = "557599630999";
export const WHATSAPP_DISPLAY = "(75) 99963-0999";
export const WHATSAPP_DEFAULT_MESSAGE = "Olá, vim pelo site e gostaria de um atendimento.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

/** Gera URL do WhatsApp com mensagem customizada */
export const buildWhatsAppURL = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PHONE_TEL = `tel:+${WHATSAPP_NUMBER}`;

// — Endereço —
export const ADDRESS = "R. Osvaldo Cruz, 295 - Centro, Feira de Santana - BA";
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.4316900138945!2d-38.96160562395648!3d-12.25959638798993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714376378e999999%3A0x6a00000000000000!2sR.%20Osvaldo%20Cruz%2C%20295%20-%20Centro%2C%20Feira%20de%20Santana%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1709850000000!5m2!1spt-BR!2sbr";

// — Redes Sociais —
export const INSTAGRAM_URL = "https://instagram.com/oralunicfsa";
export const INSTAGRAM_HANDLE = "@oralunicfsa";

// — Horário de Funcionamento —
export const BUSINESS_HOURS = "Segunda a Sexta — 8h às 18h";
export const BUSINESS_HOURS_DAYS = "Segunda a Sexta";
export const BUSINESS_HOURS_TIME = "8h às 18h";

// — Marca —
export const BRAND_NAME = "Oral Unic";
export const BRAND_UNIT = "Feira de Santana";
export const BRAND_SLOGAN = "Cuidado odontológico completo e especializado em cada detalhe.";
export const BRAND_YEAR = "2026";
export const LOGO_PATH = "/logo_official.png";

// — Navegação (usada no Navbar e Footer) —
export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Especialidades", href: "/#services" },
  { label: "Sobre Nós", href: "/#sobre-nos" },
  { label: "Contato", href: "/#contato" },
];
