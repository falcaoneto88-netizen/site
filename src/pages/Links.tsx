import { motion } from 'framer-motion';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { EditableImage } from '../components/EditableWrappers';

const LINKS_DATA = [
  {
    id: 'links_banner_review',
    src: '/assets/links/banner_review.png',
    href: 'https://g.page/r/Cb9PKINg28wpEAE/review',
    alt: 'Faça uma avaliação no Google',
    half: true,
  },
  {
    id: 'links_banner_whatsapp',
    src: '/assets/links/banner_whatsapp.png',
    href: 'https://wa.me/557599630999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento.',
    alt: 'WhatsApp - Agende sua consulta',
    half: false,
  },
];

const CARDS_DATA = [
  {
    id: 'links_card_site',
    src: '/assets/links/card_site.png',
    href: 'https://www.oralunic.com.br/feira-de-santana-ba',
    alt: 'Nosso Site',
  },
  {
    id: 'links_card_instagram',
    src: '/assets/links/card_instagram.png',
    href: 'https://www.instagram.com/oralunic.feira',
    alt: 'Nosso Instagram',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const LinksContent = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <motion.img
          src="/assets/links/bg_pattern.jpg"
          alt=""
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.05, 1], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[600px] px-4 py-8 flex flex-col items-center gap-4">
        {/* Banners */}
        {LINKS_DATA.map((link, i) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={link.half ? 'w-1/2 block' : 'w-full block'}
          >
            <EditableImage
              id={link.id}
              defaultSrc={link.src}
              alt={link.alt}
              className="w-full h-auto rounded-lg"
            />
          </motion.a>
        ))}

        {/* Two cards side by side */}
        <div className="w-full grid grid-cols-2 gap-0">
          {CARDS_DATA.map((card, i) => (
            <motion.a
              key={card.id}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={i + LINKS_DATA.length}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="block"
            >
              <EditableImage
                id={card.id}
                defaultSrc={card.src}
                alt={card.alt}
                className="w-full h-auto"
              />
            </motion.a>
          ))}
        </div>

        {/* Banner: Maps */}
        <motion.a
          href="https://share.google/03whI3mdEwLFeJIzm"
          target="_blank"
          rel="noopener noreferrer"
          custom={LINKS_DATA.length + CARDS_DATA.length}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full block"
        >
          <EditableImage
            id="links_banner_maps"
            defaultSrc="/assets/links/banner_maps.png"
            alt="Nossa Localização"
            className="w-full h-auto rounded-lg"
          />
        </motion.a>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 w-full py-8 flex flex-col items-center gap-3 bg-black"
      >
        <a href="https://agenciamds.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/links/mds_logo.png"
            alt="MDS Agency"
            className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
        <p className="text-primary-foreground/50 text-xs">
          Oral Unic © Todos os direitos reservados
        </p>
      </motion.footer>

      <EditorToolbar />
    </div>
  );
};

const Links = () => (
  <EditorProvider projectId="links">
    <LinksContent />
  </EditorProvider>
);

export default Links;
