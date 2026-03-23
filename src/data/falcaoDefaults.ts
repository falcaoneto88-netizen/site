/**
 * Static default content for the Dr. João Falcão site.
 * Previously stored in Supabase project_content table.
 * All image URLs now point to local /assets/ paths.
 */
export const falcaoDefaults: Record<string, unknown> = {
    // ── Hero Section ──
    falcao_hero_slider_enabled: true,
    falcao_hero_before: '/assets/dr-joao-falcao/hero_before.png',
    falcao_hero_after: '/assets/dr-joao-falcao/hero_after.png',
    falcao_hero_before_meta: { x: 50, y: 52, zoom: 100, borderRadius: 0 },
    falcao_hero_doctor_img: '/assets/dr-joao-falcao/hero_doctor.png',
    falcao_hero_doctor_img_meta: { x: 65, y: 50, zoom: 100, borderRadius: 0 },
    falcao_hero_img_mobile: '/assets/dr-joao-falcao/hero_mobile.png',
    falcao_hero_img_mobile_meta: { x: 50, y: 51, zoom: 100, borderRadius: 0 },
    falcao_hero_bg_desktop: '/assets/dr-joao-falcao/hero_bg.jpg',
    falcao_hero_tag_desktop: 'Remodelação Glútea',
    falcao_hero_title_1_desktop: 'O Método que Transforma o Formato dos Glúteos ',
    falcao_hero_title_accent_desktop: 'Sem Cirurgia',

    // ── Method Section ──
    falcao_method_img_desktop: '/assets/dr-joao-falcao/method_desktop.png',
    falcao_method_img_desktop_meta: { x: 87, y: 46, zoom: 100, borderRadius: 0 },
    falcao_method_img_mobile: '/assets/dr-joao-falcao/method_mobile.png',
    falcao_method_img_mobile_meta: { x: 82, y: 41, zoom: 100, borderRadius: 0 },

    // ── Carousel Row 1 ──
    falcao_carousel_images: [
        { id: 'falcao_res_c1_01', src: '/assets/dr-joao-falcao/carousel/c1_01.png', label: 'Resultado 1' },
        { id: 'falcao_res_c1_02', src: '/assets/dr-joao-falcao/carousel/c1_02.png', label: 'Resultado 2' },
        { id: 'falcao_res_c1_03', src: '/assets/dr-joao-falcao/carousel/c1_03.png', label: 'Resultado 3' },
        { id: 'falcao_res_c1_04', src: '/assets/dr-joao-falcao/carousel/c1_04.png', label: 'Resultado 4' },
        { id: 'falcao_res_c1_05', src: '/assets/dr-joao-falcao/carousel/c1_05.png', label: 'Resultado 5' },
        { id: 'falcao_res_c1_06', src: '/assets/dr-joao-falcao/carousel/c1_06.png', label: 'Resultado 6' },
        { id: 'falcao_res_c1_07', src: '/assets/dr-joao-falcao/carousel/c2_01.png', label: 'Resultado 7' },
    ],

    // ── Carousel Row 2 ──
    falcao_carousel_images_2: [
        { id: 'falcao_res_c2_01', src: '/assets/dr-joao-falcao/carousel/c2_02.png', label: 'Resultado 1' },
        { id: 'falcao_res_c2_02', src: '/assets/dr-joao-falcao/carousel/c2_03.png', label: 'Resultado 2' },
        { id: 'falcao_res_c2_03', src: '/assets/dr-joao-falcao/carousel/c2_04.png', label: 'Resultado 3' },
        { id: 'falcao_res_c2_04', src: '/assets/dr-joao-falcao/carousel/c2_05.png', label: 'Resultado 4' },
        { id: 'falcao_res_c2_05', src: '/assets/dr-joao-falcao/carousel/c2_06.png', label: 'Resultado 5' },
        { id: 'falcao_res_c2_06', src: '/assets/dr-joao-falcao/carousel/c2_07.png', label: 'Resultado 6' },
        { id: 'falcao_res_c2_07', src: '/assets/dr-joao-falcao/carousel/c2_08.png', label: 'Resultado 7' },
        { id: 'falcao_res_c2_08', src: '/assets/dr-joao-falcao/carousel/c2_09.png', label: 'Resultado 8' },
    ],

    // ── CTA Section Fade ──
    falcao_cta_fade_bottom: '#d4b87a',
    falcao_cta_fade_height: '15',
    falcao_cta_fade_top: '#ceb074',

    // ── Doctor / Differentials Section ──
    falcao_diff_bg_img: '/assets/dr-joao-falcao/diff_bg.png',

    // ── Evaluation Section ──
    falcao_eval_img_desktop: '/assets/dr-joao-falcao/eval_desktop.png',
    falcao_eval_img_desktop_meta: { x: 50, y: 55, zoom: 100, borderRadius: 0 },
    falcao_eval_img_mobile: '/assets/dr-joao-falcao/eval_mobile.png',
    falcao_eval_img_mobile_meta: { x: 49, y: 47, zoom: 100, borderRadius: 0 },

    // ── Problem Section Images ──
    falcao_prob_1_img: '/assets/dr-joao-falcao/problems/prob_1.png',
    falcao_prob_1_img_meta: { x: 50, y: 62, zoom: 121, borderRadius: 0 },
    falcao_prob_2_img: '/assets/dr-joao-falcao/problems/prob_2.png',
    falcao_prob_3_img: '/assets/dr-joao-falcao/problems/prob_3.png',
    falcao_prob_4_img: '/assets/dr-joao-falcao/problems/prob_4.png',
    falcao_prob_5_img: '/assets/dr-joao-falcao/problems/prob_5.png',
    falcao_prob_6_img: '/assets/dr-joao-falcao/problems/prob_6.png',

    // ── Testimonials / Artist Images ──
    falcao_artist_1: '/assets/dr-joao-falcao/artists/artist_1.jpeg',
    falcao_artist_2: '/assets/dr-joao-falcao/artists/artist_2.jpeg',
    falcao_artist_3: '/assets/dr-joao-falcao/artists/artist_3.jpeg',
    falcao_artist_3_meta: { x: 50, y: 50, zoom: 120, borderRadius: 0 },
    falcao_artist_4: '/assets/dr-joao-falcao/artists/artist_4.jpeg',
    falcao_artist_5: '/assets/dr-joao-falcao/artists/artist_5.jpeg',
    falcao_artist_6: '/assets/dr-joao-falcao/artists/artist_6.jpeg',

    // ── Text Override ──
    falcao_test_title_accent: 'procedimento',
    falcao_eval_step_2_desktop: 'Tirar dúvidas sobre o procedimento',
};
