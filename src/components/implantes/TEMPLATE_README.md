# Template: Landing Page de Especialidade

## ⚠️ REGRA FUNDAMENTAL
**Toda nova landing page DEVE usar a página de Implantes (`/implantes-dentarios`) como referência absoluta de layout, tipografia e responsividade.** Nunca invente tamanhos de fonte, espaçamentos ou estruturas. Copie exatamente do modelo e apenas troque copy/imagens.

---

## Estrutura de Seções (ordem obrigatória)

| # | Seção | Tipo | Fundo | Componente Base |
|---|-------|------|-------|-----------------|
| 1 | **Hero** | Imersivo | Claro (`#fff`) | `ImplantHero` — mobile: img topo + texto abaixo; desktop: img direita + fade lateral |
| 2 | **Marquee** (2x) | Decorativo | Transparente | `FuturisticMarquee` — texto repetido animado |
| 3 | **O que é** | Conteúdo | Claro (`#FDFCF8`) | `WhatIsImplant` — grid 2 cols: imagem esquerda + texto direita |
| 4 | **Problema/Consciência** | Destaque | Roxo (`#540247`) | `ProblemAwareness` — timeline com ícones e cards glass |
| 5 | **Especialistas** | Conteúdo | Claro (`#FDFCF8`) | `SpecialistsDetail` — cards horizontais com foto + info |
| 6 | **Procedimentos/Serviços** | Destaque | Roxo (`#540247`) | `ImplantProcedures` — grid de cards verticais com imagens |
| 7 | **Benefícios** | Imersivo | Claro (`#FDFCF8`) | `ImplantBenefits` — layout Hero invertido (img direita) |
| 8 | **Depoimentos** | Conteúdo | Claro (`#FDFCF8`) | `ImplantTestimonials` — cards glass do Google |
| 9 | **Marquee** (2x) | Decorativo | Transparente | `FuturisticMarquee` |
| 10 | **Contato** | Conversão | Roxo (via SectionFade) | `ContactV2` — formulário WhatsApp |
| 11 | **FAQ** | Conteúdo | Background | `FAQV2` — accordion |
| 12 | **CTA Final** | Conversão | Roxo (`#540247`) | `ImplantCTA` — texto central + botão WhatsApp |
| 13 | **Mapa** | Info | Neutro | `MapSection` — Google Maps embed |

---

## Padrão Tipográfico (REFERÊNCIA OBRIGATÓRIA)

### Tabela de tamanhos Mobile → Desktop

| Elemento | Mobile | Desktop | Exemplo |
|----------|--------|---------|---------|
| H1/H2 (todos os títulos) | `text-2xl` (24px) | `text-[30px]` (30px) | Hero, WhatIs, Specialists, Benefits, Testimonials, CTA, Problem, Procedures |
| Subtexto / Parágrafos body | `text-sm` (14px) | `text-sm` (14px) | Descrições, subtextos, parágrafos em todas as seções |
| Card títulos (Proc) | `text-sm` (14px) | `text-base` (16px) | Títulos dos cards de procedimentos |
| Card desc (Problem) | `text-xs` (12px) | `text-xs` (12px) | Descrição dos cards de problema |
| Badge/Tag | `text-[9px]` | `text-[10px]` | "AVALIAÇÕES DO GOOGLE" |
| Badge Problem | `text-[10px]` | `text-xs` | "Você sabia?" |
| Testimonial nome | `text-sm` | `text-base` | Nome do paciente |
| Testimonial texto | `text-xs` | `text-sm` | Depoimento |
| Marquee | `text-2xl` | `text-4xl lg:text-6xl` | Texto animado |
| Specialist nome | `text-base` | `text-lg` | Nome do doutor |

### Fontes
- **Títulos**: `font-serif` (Playfair Display)
- **Corpo**: `font-sans` (Poppins) ou sem classe (herda Poppins)
- **Peso padrão**: `font-light` para corpo, `font-medium` para títulos Hero/Benefits
- **Destaque**: `font-bold` / `font-semibold` para nomes e títulos de cards

---

## Espaçamento Padrão

| Elemento | Valor |
|----------|-------|
| Seção padding vertical | `py-14 md:py-24` |
| Container | `container mx-auto px-4 md:px-6` |
| Problem container | `container mx-auto px-6 md:px-8 max-w-6xl` |
| Gap entre título e conteúdo | `mb-10 md:mb-16` |
| Hero mobile padding | `px-6 pt-6 pb-10` |
| Benefits mobile padding | `px-6 pt-6 pb-10` |
| Seções imersivas (Hero, Benefits) | Sem `py-*`, layout interno controla |

---

## Cores (tokens CSS)

| Token | Valor HEX | Uso |
|-------|-----------|-----|
| Primary (roxo) | `#540247` | Fundo escuro, títulos destaque |
| Accent (dourado) | `#D2A170` | Destaques no Problem |
| Background claro | `#FDFCF8` | Fundo seções claras |
| Texto escuro | `#000000` | Títulos principais |
| Texto corpo | `#555555` | Parágrafos |
| Card accent (verde) | `#00BFA6` | Especialidade nos cards de doutores |
| Botão WhatsApp | `#16a34a` | CTA WhatsApp |

---

## Componentes Obrigatórios

- `EditableSectionColors` — controle de cores por seção
- `EditableText` / `EditableImage` / `EditableElement` — editor visual
- `SectionFade` — transição suave entre seções de cores diferentes
- Constantes de `src/lib/constants.ts` — WhatsApp, endereço, marca

---

## Como Criar Nova Landing Page

1. **Copiar** todos os componentes de `src/components/implantes/` para `src/components/[nova-especialidade]/`
2. **Renomear** prefixos de IDs editáveis (ex: `implant_` → `harmonizacao_`)
3. **Substituir** copy e imagens mantendo EXATAMENTE os mesmos tamanhos de fonte
4. **Criar** página em `src/pages/[NovaPagina].tsx` seguindo `ImplantesDentarios.tsx`
5. **Registrar** rota em `App.tsx`
6. **Verificar** mobile e desktop lado a lado com Implantes

### ❌ NUNCA FAZER
- Inventar novos tamanhos de fonte
- Alterar espaçamentos de seção
- Mudar a ordem das seções
- Usar cores fora dos tokens definidos
- Criar layouts mobile diferentes do modelo

### ✅ SEMPRE FAZER
- Comparar com Implantes antes de finalizar
- Testar mobile e desktop lado a lado
- Usar `text-xs` mobile / `text-base` desktop em parágrafos
- Manter `py-14 md:py-24` em todas as seções
- Limpar cache após alterações (`CACHE_VERSION` em `main.tsx`)
