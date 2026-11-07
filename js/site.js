/* Spinolagui — shared script: languages, header, album lightbox, Instagram popup, copy button. */
(function () {
  'use strict';

  /* ================= CONTENT ================= */

  // Album photos, grouped by category. "n" = file number in img/ (fotoNN.jpg and fotoNN-t.jpg).
  var ALBUM = {
    nature: [14, 13, 6, 7, 4, 5, 12],
    arch:   [17, 9, 8, 3, 15, 16],
    city:   [19, 18, 2, 1, 11, 10]
  };

  // Instagram footer posts. To use a real post, set "post" to its link,
  // e.g. 'https://www.instagram.com/p/ABC123xyz/' — the popup then shows the official embed.
  var IG_USER = 'spinolagui';
  var IG = [
    { n: 13, post: '' },
    { n: 6,  post: '' },
    { n: 9,  post: '' },
    { n: 11, post: '' },
    { n: 17, post: '' },
    { n: 18, post: '' }
  ];

  var ALT = {
    1:  { pt: 'Fachadas coloridas de sobrados numa rua do French Quarter, com palmeiras ao fundo', en: 'Colourful townhouse façades on a French Quarter street, palm trees behind', es: 'Fachadas coloridas de casas en una calle del French Quarter, con palmeras al fondo' },
    2:  { pt: 'Rua com casarões históricos, palmeiras e um arbusto florido em primeiro plano', en: 'Street of historic mansions with palm trees and a flowering bush in front', es: 'Calle con casonas históricas, palmeras y un arbusto en flor delante' },
    3:  { pt: 'Memorial de colunas brancas visto do gramado, sob céu claro', en: 'White-columned memorial seen from the lawn under a pale sky', es: 'Memorial de columnas blancas visto desde el césped, bajo un cielo claro' },
    4:  { pt: 'Estrada de terra num coqueiral, com nuvens no céu', en: 'Dirt road through a coconut grove under a cloudy sky', es: 'Camino de tierra en un cocotal, con nubes en el cielo' },
    5:  { pt: 'Coqueiros inclinados pelo vento à beira-mar, com bicicletas paradas na areia', en: 'Wind-bent palms by the sea, bicycles parked on the sand', es: 'Palmeras inclinadas por el viento junto al mar, con bicicletas en la arena' },
    6:  { pt: 'Mar azul com uma faixa de coqueiros no horizonte', en: 'Blue sea with a strip of palm trees on the horizon', es: 'Mar azul con una franja de palmeras en el horizonte' },
    7:  { pt: 'Vista aérea de um banco de areia branca entre o mar e a mata', en: 'Aerial view of a white sandbar between sea and forest', es: 'Vista aérea de un banco de arena blanca entre el mar y la selva' },
    8:  { pt: 'Igrejinha de madeira com torre pontuda atrás de um campo de flores roxas', en: 'Small wooden church with a pointed tower behind a field of purple flowers', es: 'Pequeña iglesia de madera con torre puntiaguda tras un campo de flores moradas' },
    9:  { pt: 'Casinhas de estilo holandês refletidas num lago', en: 'Dutch-style cottages reflected in a pond', es: 'Casitas de estilo holandés reflejadas en un lago' },
    10: { pt: 'Árvore de Natal iluminada contra o céu noturno', en: 'Lit Christmas tree against the night sky', es: 'Árbol de Navidad iluminado contra el cielo nocturno' },
    11: { pt: 'Escada de uma estação de metrô de Londres, vista de baixo, com o letreiro do Underground', en: 'London Underground station stairs seen from below, with the roundel sign', es: 'Escalera de una estación del metro de Londres vista desde abajo, con el letrero del Underground' },
    12: { pt: 'Morro coberto de mata com neblina e uma casa de telhado laranja', en: 'Forested hill in the mist with an orange-roofed house', es: 'Colina cubierta de selva con niebla y una casa de tejado naranja' },
    13: { pt: 'Mulher de costas olhando uma enseada de água turquesa entre árvores', en: 'Woman seen from behind looking at a turquoise cove between trees', es: 'Mujer de espaldas mirando una cala de agua turquesa entre árboles' },
    14: { pt: 'Praia de água verde-azulada emoldurada por troncos de árvores', en: 'Blue-green beach framed by tree trunks', es: 'Playa de agua verdeazulada enmarcada por troncos de árboles' },
    15: { pt: 'Prédio histórico ornamentado visto de baixo para cima', en: 'Ornate historic building seen from below', es: 'Edificio histórico ornamentado visto desde abajo' },
    16: { pt: 'Janela com cortinas de renda sobre uma pia de cozinha antiga', en: 'Window with lace curtains above an old kitchen sink', es: 'Ventana con cortinas de encaje sobre un fregadero antiguo' },
    17: { pt: 'Chalé de pedra com porta vermelha ao entardecer', en: 'Stone cottage with a red door at dusk', es: 'Cabaña de piedra con puerta roja al atardecer' },
    18: { pt: 'Arranha-céus de Manhattan vistos da Ponte do Brooklyn', en: 'Manhattan skyscrapers seen from the Brooklyn Bridge', es: 'Rascacielos de Manhattan vistos desde el puente de Brooklyn' },
    19: { pt: 'One World Trade Center refletindo o céu, com árvores em primeiro plano', en: 'One World Trade Center reflecting the sky, trees in the foreground', es: 'One World Trade Center reflejando el cielo, con árboles delante' }
  };

  var T = {
    pt: {
      skip: 'Pular para o conteúdo', nav_aria: 'Principal', lang_aria: 'Idioma',
      nav_album: 'Álbum', nav_presets: 'Presets', nav_contact: 'Contato',
      home_aria: 'Spinolagui, início',
      kicker: 'Fotografia de viagem',
      hero_h1: 'Memórias e lugares <em>por onde passei.</em>',
      hero_p: 'Sou o Guilherme. Fotografo praias, casas e cidades pelo caminho e guardo cada lugar do jeito que senti.',
      hero_cta: 'Ver o álbum', hero_cta2: 'Fale comigo',
      portrait_alt: 'Retrato de Guilherme, o fotógrafo',
      cat_nature: 'Praias e natureza', cat_nature_p: 'Mar, coqueiros e mata, do litoral brasileiro ao Caribe.',
      cat_arch: 'Arquitetura e casas', cat_arch_p: 'Chalés, igrejinhas e prédios históricos que pedem uma pausa.',
      cat_city: 'Cidades', cat_city_p: 'Ruas, metrôs e arranha-céus vistos de perto.',
      enlarge: 'Ampliar: {alt}',
      lb_label: 'Foto ampliada', close: 'Fechar', prev: 'Anterior', next: 'Próxima',
      ig_h: 'No Instagram', ig_follow: 'Seguir no Instagram', ig_open: 'Ver no Instagram',
      ig_post_aria: 'Abrir post {k} de {t} do Instagram', ig_label: 'Post do Instagram',
      ig_cap: 'Mais fotos e bastidores das viagens no meu perfil.',
      foot_rights: '© 2026 Guilherme Spinola',
      c_h1: 'Vamos conversar sobre fotos.',
      c_lead: 'Para orçamentos, parcerias ou para pedir uma foto do álbum em alta resolução, escolha o canal que for mais fácil para você.',
      c_open: 'Abrir', c_email: 'E-mail', copy: 'Copiar', copied: 'Copiado',
      c_wa_aria: 'Abrir o WhatsApp em nova aba', c_ig_aria: 'Abrir o Instagram em nova aba', c_tt_aria: 'Abrir o TikTok em nova aba',
      p_h1: 'Meus presets para Lightroom',
      p_lead: 'Textura suave, claridade surgindo entre as luzes e cores levemente alteradas. Instale no seu celular e aplique o meu estilo nas suas fotos.',
      p_h2: 'Como instalar no Lightroom mobile',
      p_sub: 'Siga os 6 passos abaixo. Funciona com as fotos e os arquivos já no seu celular.',
      ph: 'Foto do passo {n}', ph_aria: 'Espaço para a foto do passo {n}',
      s1t: 'Baixe os presets no celular', s1d: 'Toque no botão de download no fim desta página. Se o arquivo vier compactado (.zip), extraia antes, porque o Lightroom não abre arquivos compactados.',
      s2t: 'Abra uma foto no Lightroom', s2d: 'No aplicativo Lightroom, toque em qualquer foto da sua galeria para abri-la na tela de edição.',
      s3t: 'Abra as Predefinições', s3d: 'Na barra de ferramentas, toque em Predefinições (Presets).',
      s4t: 'Importe o arquivo', s4d: 'Abra o menu de opções (os três pontinhos) e toque em Importar predefinições (Import Presets).',
      s5t: 'Escolha o arquivo', s5d: 'Procure o arquivo dos presets que você baixou, selecione e confirme.',
      s6t: 'Aplique na sua foto', s6d: 'Os presets ficam em Suas predefinições (Yours). Toque em um deles para aplicar e ajuste a intensidade como quiser.',
      dl_h: 'Baixar os presets', dl_p: 'O link de download será liberado aqui em breve. Depois de baixar, volte aos passos acima para instalar.', dl_btn: 'Em breve'
    },
    en: {
      skip: 'Skip to content', nav_aria: 'Main', lang_aria: 'Language',
      nav_album: 'Album', nav_presets: 'Presets', nav_contact: 'Contact',
      home_aria: 'Spinolagui, home',
      kicker: 'Travel photography',
      hero_h1: 'Memories and the places <em>I’ve been.</em>',
      hero_p: 'I’m Guilherme. I photograph beaches, houses and cities along the way, and keep each place the way it felt.',
      hero_cta: 'View the album', hero_cta2: 'Get in touch',
      portrait_alt: 'Portrait of Guilherme, the photographer',
      cat_nature: 'Beaches & nature', cat_nature_p: 'Sea, palm trees and forest, from the Brazilian coast to the Caribbean.',
      cat_arch: 'Architecture & houses', cat_arch_p: 'Cottages, little churches and historic buildings worth a pause.',
      cat_city: 'Cities', cat_city_p: 'Streets, subways and skyscrapers up close.',
      enlarge: 'Enlarge: {alt}',
      lb_label: 'Enlarged photo', close: 'Close', prev: 'Previous', next: 'Next',
      ig_h: 'On Instagram', ig_follow: 'Follow on Instagram', ig_open: 'View on Instagram',
      ig_post_aria: 'Open Instagram post {k} of {t}', ig_label: 'Instagram post',
      ig_cap: 'More photos and behind-the-scenes from my trips on my profile.',
      foot_rights: '© 2026 Guilherme Spinola',
      c_h1: 'Let’s talk about photos.',
      c_lead: 'For quotes, partnerships, or to request a photo from the album in high resolution, choose whichever channel is easiest for you.',
      c_open: 'Open', c_email: 'Email', copy: 'Copy', copied: 'Copied',
      c_wa_aria: 'Open WhatsApp in a new tab', c_ig_aria: 'Open Instagram in a new tab', c_tt_aria: 'Open TikTok in a new tab',
      p_h1: 'My presets for Lightroom',
      p_lead: 'Soft texture, brightness emerging between the lights, and slightly shifted colors. Install them on your phone and bring my style to your own photos.',
      p_h2: 'How to install on Lightroom mobile',
      p_sub: 'Follow the 6 steps below. Works with photos and files already on your phone.',
      ph: 'Step {n} photo', ph_aria: 'Space for the step {n} photo',
      s1t: 'Download the presets to your phone', s1d: 'Tap the download button at the bottom of this page. If the file comes zipped (.zip), extract it first, because Lightroom cannot open compressed files.',
      s2t: 'Open a photo in Lightroom', s2d: 'In the Lightroom app, tap any photo in your library to open it in the editing view.',
      s3t: 'Open Presets', s3d: 'In the toolbar, tap Presets.',
      s4t: 'Import the file', s4d: 'Open the options menu (the three dots) and tap Import Presets.',
      s5t: 'Choose the file', s5d: 'Find the presets file you downloaded, select it and confirm.',
      s6t: 'Apply it to your photo', s6d: 'Your presets appear under Yours. Tap one to apply it and adjust the intensity as you like.',
      dl_h: 'Download the presets', dl_p: 'The download link will be available here soon. Once downloaded, go back to the steps above to install them.', dl_btn: 'Coming soon'
    },
    es: {
      skip: 'Saltar al contenido', nav_aria: 'Principal', lang_aria: 'Idioma',
      nav_album: 'Álbum', nav_presets: 'Presets', nav_contact: 'Contacto',
      home_aria: 'Spinolagui, inicio',
      kicker: 'Fotografía de viaje',
      hero_h1: 'Recuerdos y lugares <em>por los que he pasado.</em>',
      hero_p: 'Soy Guilherme. Fotografío playas, casas y ciudades por el camino y guardo cada lugar tal como lo sentí.',
      hero_cta: 'Ver el álbum', hero_cta2: 'Escríbeme',
      portrait_alt: 'Retrato de Guilherme, el fotógrafo',
      cat_nature: 'Playas y naturaleza', cat_nature_p: 'Mar, palmeras y selva, de la costa brasileña al Caribe.',
      cat_arch: 'Arquitectura y casas', cat_arch_p: 'Cabañas, iglesitas y edificios históricos que invitan a una pausa.',
      cat_city: 'Ciudades', cat_city_p: 'Calles, metros y rascacielos de cerca.',
      enlarge: 'Ampliar: {alt}',
      lb_label: 'Foto ampliada', close: 'Cerrar', prev: 'Anterior', next: 'Siguiente',
      ig_h: 'En Instagram', ig_follow: 'Seguir en Instagram', ig_open: 'Ver en Instagram',
      ig_post_aria: 'Abrir publicación {k} de {t} de Instagram', ig_label: 'Publicación de Instagram',
      ig_cap: 'Más fotos y detrás de cámaras de mis viajes en mi perfil.',
      foot_rights: '© 2026 Guilherme Spinola',
      c_h1: 'Hablemos de fotos.',
      c_lead: 'Para presupuestos, colaboraciones o para pedir una foto del álbum en alta resolución, elige el canal que te resulte más fácil.',
      c_open: 'Abrir', c_email: 'Correo electrónico', copy: 'Copiar', copied: 'Copiado',
      c_wa_aria: 'Abrir WhatsApp en una pestaña nueva', c_ig_aria: 'Abrir Instagram en una pestaña nueva', c_tt_aria: 'Abrir TikTok en una pestaña nueva',
      p_h1: 'Mis presets para Lightroom',
      p_lead: 'Textura suave, claridad que surge entre las luces y colores ligeramente alterados. Instálalos en tu móvil y aplica mi estilo a tus propias fotos.',
      p_h2: 'Cómo instalar en Lightroom móvil',
      p_sub: 'Sigue los 6 pasos de abajo. Funciona con las fotos y archivos que ya tienes en tu móvil.',
      ph: 'Foto del paso {n}', ph_aria: 'Espacio para la foto del paso {n}',
      s1t: 'Descarga los presets en tu móvil', s1d: 'Toca el botón de descarga al final de esta página. Si el archivo viene comprimido (.zip), extráelo primero, porque Lightroom no abre archivos comprimidos.',
      s2t: 'Abre una foto en Lightroom', s2d: 'En la app de Lightroom, toca cualquier foto de tu biblioteca para abrirla en la pantalla de edición.',
      s3t: 'Abre los ajustes preestablecidos', s3d: 'En la barra de herramientas, toca Ajustes preestablecidos (Presets).',
      s4t: 'Importa el archivo', s4d: 'Abre el menú de opciones (los tres puntos) y toca Importar ajustes preestablecidos (Import Presets).',
      s5t: 'Elige el archivo', s5d: 'Busca el archivo de presets que descargaste, selecciónalo y confirma.',
      s6t: 'Aplícalo a tu foto', s6d: 'Tus presets aparecen en Tuyos (Yours). Toca uno para aplicarlo y ajusta la intensidad como quieras.',
      dl_h: 'Descargar los presets', dl_p: 'El enlace de descarga estará disponible aquí pronto. Cuando lo descargues, vuelve a los pasos de arriba para instalarlos.', dl_btn: 'Próximamente'
    }
  };

  /* ================= HELPERS ================= */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var L = 'pt';
  function t(k, o) {
    var s = (T[L] && T[L][k]) || T.pt[k] || k;
    return s.replace(/\{(\w+)\}/g, function (m, x) { return o && o[x] != null ? o[x] : m; });
  }
  function alt(n) { return (ALT[n] && ALT[n][L]) || ''; }
  function el(tag, attrs) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  // Scroll lock shared by every overlay (counter so closing one never unlocks while another is open).
  var locks = 0;
  function lock() { if (locks++ === 0) document.documentElement.style.overflow = 'hidden'; }
  function unlock() { locks = Math.max(0, locks - 1); if (locks === 0) document.documentElement.style.overflow = ''; }

  /* ================= LANGUAGE ================= */
  function applyLang() {
    document.documentElement.lang = L === 'pt' ? 'pt-BR' : L;
    $$('[data-i]').forEach(function (e) { e.textContent = t(e.dataset.i, e.dataset); });
    $$('[data-h]').forEach(function (e) { e.innerHTML = t(e.dataset.h, e.dataset); });
    $$('[data-a]').forEach(function (e) {
      e.dataset.a.split(',').forEach(function (p) {
        var kv = p.split(':'); e.setAttribute(kv[0], t(kv[1], e.dataset));
      });
    });
    $$('[data-alt]').forEach(function (e) { e.alt = alt(+e.dataset.alt); });
    $$('[data-enl]').forEach(function (e) { e.setAttribute('aria-label', t('enlarge', { alt: alt(+e.dataset.enl) })); });
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === L ? 'true' : 'false'); });
    document.dispatchEvent(new Event('langchange'));
  }
  function initLang() {
    var s = null;
    try { s = localStorage.getItem('lang'); } catch (e) {}
    if (!T[s]) {
      var n = String(navigator.language || 'pt').slice(0, 2).toLowerCase();
      s = T[n] ? n : 'en';
    }
    L = s;
    $$('.lang button').forEach(function (b) {
      b.addEventListener('click', function () {
        L = b.dataset.l;
        try { localStorage.setItem('lang', L); } catch (e) {}
        applyLang();
      });
    });
  }

  /* ================= HEADER ================= */
  function initHeader() {
    var h = $('.hd'); if (!h) return;
    var on = false;
    function f() { var v = window.pageYOffset > 8; if (v !== on) { on = v; h.classList.toggle('sc', v); } }
    f(); window.addEventListener('scroll', f, { passive: true });
  }

  /* ================= PORTRAIT FALLBACK ================= */
  function initPortrait() {
    var p = $('.portrait'); if (!p) return;
    var img = $('img', p);
    function ok() { p.classList.add('ok'); }
    if (img.complete && img.naturalWidth) ok();
    else img.addEventListener('load', ok);
    img.addEventListener('error', function () { img.remove(); });
  }

  /* ================= OVERLAY BASE ================= */
  function overlay(root, onNav) {
    var last = null, sx = null;
    function open(trigger) { last = trigger || document.activeElement; root.hidden = false; lock(); $('.x', root).focus(); }
    function close() { if (root.hidden) return; root.hidden = true; unlock(); if (last && last.focus) last.focus(); }
    $('.x', root).addEventListener('click', close);
    $('.p', root).addEventListener('click', function () { onNav(-1); });
    $('.n', root).addEventListener('click', function () { onNav(1); });
    root.addEventListener('click', function (e) { if (e.target === root) close(); });
    document.addEventListener('keydown', function (e) {
      if (root.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') onNav(-1);
      else if (e.key === 'ArrowRight') onNav(1);
      else if (e.key === 'Tab') {
        var f = $$('button,a[href],iframe', root).filter(function (x) { return x.offsetParent !== null; });
        if (!f.length) return;
        var a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    });
    root.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var d = e.changedTouches[0].clientX - sx;
      if (Math.abs(d) > 50) onNav(d < 0 ? 1 : -1);
      sx = null;
    });
    return { open: open, close: close };
  }

  /* ================= ALBUM + LIGHTBOX ================= */
  function initAlbum() {
    var lbRoot = $('#lb'); if (!lbRoot) return;
    var order = [];
    Object.keys(ALBUM).forEach(function (cat) {
      var g = $('[data-cat="' + cat + '"]'); if (!g) return;
      ALBUM[cat].forEach(function (n, k) {
        var idx = order.length; order.push(n);
        var b = el('button', { type: 'button', 'data-enl': n, 'data-k': idx });
        var im = el('img', {
          src: 'img/foto' + String(n).padStart(2, '0') + '-t.jpg',
          width: 733, height: 1100, 'data-alt': n,
          loading: cat === 'nature' && k < 4 ? 'eager' : 'lazy', decoding: 'async'
        });
        b.appendChild(im); g.appendChild(b);
      });
      g.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (b) { show(+b.dataset.k); ov.open(b); }
      });
    });
    var i = 0, img = $('#lbimg'), c = $('#lbc');
    function show(k) {
      i = (k + order.length) % order.length;
      var n = order[i];
      img.src = 'img/foto' + String(n).padStart(2, '0') + '.jpg';
      img.alt = alt(n);
      c.textContent = (i + 1) + ' / ' + order.length;
    }
    var ov = overlay(lbRoot, function (d) { show(i + d); });
    document.addEventListener('langchange', function () { if (!lbRoot.hidden) show(i); });
  }

  /* ================= INSTAGRAM FOOTER + POPUP ================= */
  function initInstagram() {
    var grid = $('#igGrid'), root = $('#igp'); if (!grid || !root) return;
    IG.forEach(function (p, k) {
      var b = el('button', { type: 'button', 'data-k': k, 'data-a': 'aria-label:ig_post_aria', 'data-t': IG.length });
      b.dataset.k = k + 1; // for the aria label {k}
      b.appendChild(el('img', {
        src: 'img/foto' + String(p.n).padStart(2, '0') + '-t.jpg',
        width: 733, height: 1100, 'data-alt': p.n, loading: 'lazy', decoding: 'async'
      }));
      grid.appendChild(b);
    });
    grid.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (b) { show(+b.dataset.k - 1); ov.open(b); }
    });
    var i = 0, media = $('.igp-media', root), cap = $('.igp-cap', root), cnt = $('.igp-count', root), link = $('.igp-link', root);
    function embedUrl(u) {
      var m = /instagram\.com\/(p|reel|tv)\/([\w-]+)/.exec(u || '');
      return m ? 'https://www.instagram.com/' + m[1] + '/' + m[2] + '/embed/' : '';
    }
    function show(k) {
      i = (k + IG.length) % IG.length;
      var p = IG[i], e = embedUrl(p.post);
      media.innerHTML = '';
      root.classList.toggle('embed', !!e);
      if (e) {
        media.appendChild(el('iframe', { src: e, title: t('ig_label'), loading: 'lazy', allowtransparency: 'true' }));
      } else {
        media.appendChild(el('img', { src: 'img/foto' + String(p.n).padStart(2, '0') + '.jpg', alt: alt(p.n) }));
      }
      cap.textContent = alt(p.n) + '. ' + t('ig_cap');
      cnt.textContent = (i + 1) + ' / ' + IG.length;
      link.href = p.post || 'https://www.instagram.com/' + IG_USER + '/';
    }
    var ov = overlay(root, function (d) { show(i + d); });
    document.addEventListener('langchange', function () { if (!root.hidden) show(i); });
  }

  /* ================= COPY BUTTON ================= */
  function initCopy() {
    $$('[data-copy]').forEach(function (b) {
      b.addEventListener('click', function () {
        var v = b.dataset.copy;
        var done = function () { b.textContent = t('copied'); setTimeout(function () { b.textContent = t('copy'); }, 1800); };
        if (navigator.clipboard) navigator.clipboard.writeText(v).then(done, function () {});
        else { var ta = el('textarea', {}); ta.value = v; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) {} ta.remove(); }
      });
    });
  }

  initLang();
  initHeader();
  initPortrait();
  initAlbum();
  initInstagram();
  initCopy();
  applyLang();
})();
