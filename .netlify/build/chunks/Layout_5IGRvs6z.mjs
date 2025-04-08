import { e as createAstro, f as createComponent, h as addAttribute, l as renderScript, r as renderTemplate, s as spreadAttributes, u as unescapeHTML, m as maybeRenderHead, i as renderComponent, n as renderHead, k as renderSlot } from './astro/server_jI5cH59c.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Astro$1 = createAstro("https://www.corporacionmanglaria.org/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/node_modules/astro/components/ClientRouter.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const FacebookIcon = createSvgComponent({"meta":{"src":"/_astro/facebook.BtUPXT4B.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"lucide lucide-facebook-icon lucide-facebook"},"children":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\" />"});

const InstagramIcon = createSvgComponent({"meta":{"src":"/_astro/instagram.CYesyIPD.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"lucide lucide-instagram-icon lucide-instagram"},"children":"<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\" /><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\" /><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\" />"});

const CircleLogo = createSvgComponent({"meta":{"src":"/_astro/circle-logo.C6iKhYoz.svg","width":1005,"height":1005,"format":"svg"},"attributes":{"viewBox":"0 0 1004.5 1004.5"},"children":"\n  <g id=\"Capa_10\" data-name=\"Capa 10\">\n    <circle cx=\"502.25\" cy=\"502.25\" r=\"502.25\" fill=\"#f5ea2f\" />\n  </g>\n  <g id=\"Capa_8\" data-name=\"Capa 8\">\n    <g>\n      <ellipse cx=\"506.56\" cy=\"338.37\" rx=\"147.43\" ry=\"195.01\" fill=\"#68358c\" stroke=\"#f5ea2f\" stroke-miterlimit=\"10\" stroke-width=\"13\" />\n      <ellipse cx=\"519.54\" cy=\"725.17\" rx=\"191.89\" ry=\"115.06\" transform=\"translate(-181.41 173.38) rotate(-16.17)\" fill=\"#68358c\" />\n      <path d=\"M373.75,582.27c-2.9-32.85,43.48-28.02,95.65-25.12,8.7.97,17.39.97,27.05.97,143.96,0,245.4-86.95,245.4-213.52,0-107.96-75.02-188.03-191.47-207.58-1.98-.2-3.87-.53-5.78-.79-6.34-.04-20.07-2.4-20.13-2.24-8.7-.97-19.32-.97-28.02-.97-144.92,0-250.23,85.99-250.23,210.62,0,77.29,41.54,142.99,110.14,180.67-60.87,9.66-90.82,29.95-90.82,64.73,0,40.58,38.65,48.31,90.82,46.38-93.72,28.02-115.94,91.78-115.94,128.5,0,70.53,77.29,107.24,198.06,107.24,192.26,0,325.59-92.75,325.59-219.31,0-213.52-380.66,28.02-390.32-69.56ZM495.49,173.59c60.87,0,105.31,68.6,105.31,170.04s-42.51,173.91-106.28,173.91-106.28-74.39-106.28-171.97,46.38-171.97,107.24-171.97ZM635.58,692.41c-.97,70.53-70.53,138.16-172.94,138.16-68.6,0-115.94-29.95-115.94-78.26,0-53.14,57-118.84,171.01-130.43,65.7-2.9,118.84,8.7,117.87,70.53Z\" fill=\"#68358c\" />\n      <path d=\"M492.86,151.92c-4.87,0-9.56,3.29-13.03,6.88-23.83,25.07-29.85,72.34-20.3,107.11,8.29,28.71,24.87,34.76,25.35,67.77,1,14.48-4.33,19.61-11.55,3.9-4.86-11.63-6.44-25.16-11.51-36.94-14.11-31.28-48.25-63.99-81.49-75.92-18.31-4.71-20.36,16.13-19.07,29.66,2.17,25.14,13.05,49.64,28.49,69.52,16.32,21.91,36.91,30.96,61.84,35.49,18.4,5.33,29.54,24.22,33.42,42,1.93,10.07,1.35,21.21.56,32.05-.67,10.66-4.15,19.95-14.47,9.09-9.48-9.7-13.83-23.15-19.68-35.12-4.88-10.22-11.42-18.14-19.94-26.09-19.29-18.38-52.69-40.4-82.54-33.78-5.59,1.39-9.61,4.13-11.54,8.3-6.08,17.2,5.07,42.28,14.74,57.2,23.82,34,49.1,46.68,90.39,44.77,17.38.05,34.6,18.96,40.38,34.27,4.42,14.27.93,31.74-.5,46.49-.8,6.55-.82,19.01-.82,19.01h30.42s-14.19-49.5-5.69-67.82c9.59-20.78,28.45-32.26,51.07-32.55,25.93-.12,49.82-13.91,66.87-32.96,12.21-13.36,22.02-30.15,25.81-47.33,1.61-7.82,5.16-19.2.78-26.06-2.98-4.38-9.92-7.41-14.82-7.02-20.49,1.53-44.84,9.51-63.18,21.84-16.22,10.59-29.22,29.62-37.87,46.61-5.9,11.22-12.54,26.07-22.7,33.34-11.18,7.06-6.83-17.29-7.56-22.84.3-14.35-2.32-29.42,5.42-41.3,9.52-14.51,26.02-22,41.41-28.7,46.69-17.59,89.05-57.08,75.22-110.77-1.96-7.14-6.05-13.96-12.9-15.47-19-.13-47.42,13.04-65.69,36.18-10.06,12.68-18.3,27.3-23.96,42.12-3.58,8.91-5.74,18.43-8.84,27.53-8.85,23.15-14.48,11.01-12.03-6.04.63-6.48,3-13,7.1-17.9,21.24-22.59,28.93-66.94,18.48-104.54-4.78-15.61-17.47-51.11-35.97-51.95h-.12Z\" fill=\"#f5ea2f\" />\n      <path d=\"M441.2,433.75c-3.63,5.26-13.87,4.67-22.4,2.34-18.76-4.87-35.85-17.52-48.98-32.72-12.39-13.86-24.98-35.27-16.22-40.78,5.66-3.57,22.17,4.04,31.48,9.19,17.4,10.11,36.41,22.76,48.62,37.84,7.37,9.37,11.44,17.72,7.55,24.07l-.04.06Z\" fill=\"#68358c\" />\n      <path d=\"M446.78,335.49c-5.74,4.55-16.31,1.06-24.44-3.79-17.97-10.4-31.35-28.55-39.63-48.3-7.98-18.12-13.42-44.28-2.19-47.67,7.27-2.19,21.87,10.47,29.79,18.52,14.62,15.55,30.03,34.25,37.38,53.61,4.34,11.97,5.57,21.94-.84,27.57l-.07.05Z\" fill=\"#68358c\" />\n      <path d=\"M496.4,287.14c-6,1.29-14.11-6.25-18.54-14.1-9.97-17.09-8.48-38.9-6.39-60.42,1.83-18.78,12.11-42.09,23.65-39.41,7.46,1.73,12.76,18.96,15.89,29.11,5.9,19.12,10.39,43.92,3.55,61.47-4.27,10.97-11.57,21.93-18.17,23.34Z\" fill=\"#68358c\" />\n      <path d=\"M545.01,330.2c-4.86-2.38-5.94-12.58-4.33-20.96,3.3-18.43,17.2-34,31.35-49.01,12.35-13.1,33.15-24.89,39.45-16.43,4.07,5.47.27,22.42-3.59,31.81-7.28,17.67-21.64,37.8-36.68,47.18-9.4,5.86-20.86,10.03-26.21,7.41Z\" fill=\"#68358c\" />\n      <path d=\"M551.44,434.71c-4.28-3.39-4.95-13.63-.8-20.72,8.55-14.6,21.95-27.86,37.93-38.6,13.94-9.38,37.44-18.71,42.12-9.27,3.03,6.11-7.46,22.7-12.67,30.6-9.81,14.88-24.32,32.01-40.25,37.25-9.96,3.28-21.62,4.47-26.33.74Z\" fill=\"#68358c\" />\n      <path d=\"M474.28,596.64l5.86,64.08s-33.44,3.48-69.67,71.07c0,0-9.62,22.7-34.59,48.1,0,0-51.87,39.71-65.1,71.76l22.62,8.58,32.14-53.54s-10.05,46.3-7.96,57.44l9.36,2.34,8.21-63.63s16.16-9.39,17.56-17.06c0,0,26.36,13.21,32.69,25.42,0,0-34.78,14.3-37.57,57.49l18.89,1.67s4.8-38.6,29.18-44.87c0,0-12.02,39.71-11.24,45.98l17.16-.33,3.83-28.93,19.57,28.15,10.92-.78-24.22-38.52s21.6-30.1,28.22-37.35l-.1,75.86,17.94-1.56-.07-16.78,25.78-27.84s8.78,16.87,10.18,39.16l14.82-3.12-4.1-32.56,7.66,6.27s-1.76,23.22.33,25.51l7.8-1.56-1.17-18.37,8.97,16.03,17.94-4.68s-18.55-28.77-24.12-32.95l13.24-41.11s9.75,17.42,26.48,24.39l21.07,36.41,19.5-9.36s-25.94-41.68-41.96-48.65c0,0-17.42-16.72-22.3-25.78,0,0,73.81,48.54,88.44,60.39l22.62-14.82s-91.55-66.47-124.3-67.17c0,0-31.72-57.92-65.68-72.16l3.66-68.78-28.49,6.13Z\" fill=\"#f5ea2f\" />\n      <path d=\"M407.24,769.25s25.52-4.02,32.49-9.59v40.13l-6.27,5.86s-22.3-20.9-33.44-27.17l7.22-9.22Z\" fill=\"#68358c\" />\n      <polygon points=\"539.36 800.76 560.96 755.48 569.26 768.71 554.31 810.97 539.36 800.76\" fill=\"#68358c\" />\n      <path d=\"M502.44,738.76l1.39,24.39s5.57,20.9,29.26,35.53l22.3-50.17s-38.32-9.75-52.95-9.75Z\" fill=\"#68358c\" />\n      <path d=\"M421.27,746.07s32.75-57.13,59.22-66.89l-2.09,42.5s-21.6,3.48-43.89,19.51c0,0-9.06,6.97-13.24,4.88Z\" fill=\"#68358c\" />\n      <path d=\"M502.44,683.91s37.36,19.85,45.12,42.11l-40.99-.85-4.13-41.26Z\" fill=\"#68358c\" />\n      <polygon points=\"519.72 821.1 494.85 841 487.26 799.42 519.72 821.1\" fill=\"#68358c\" />\n      <path d=\"M446.7,754.08s18.12-11.15,30.66-12.54l-1.39,20.21s-8.36,25.13-29.26,35.21v-42.87Z\" fill=\"#68358c\" />\n    </g>\n  </g>\n"});

const FOTER_LINKS = [
  {
    id: 1,
    text: "Inicio",
    hash: "/#home"
  },
  {
    id: 2,
    text: "Nosotros",
    hash: "/#about"
  },
  {
    id: 3,
    text: "Proyectos",
    link: "/projects"
  },
  {
    id: 4,
    text: "Galeria",
    hash: "/gallery"
  },
  {
    id: 5,
    text: "Blog",
    link: "/blog"
  },
  {
    id: 6,
    text: "Impacto",
    hash: "/#numbers"
  },
  {
    id: 7,
    text: "Equipo",
    hash: "/#team"
  },
  {
    id: 8,
    text: "¿Qué Hacemos?",
    hash: "/#work"
  }
];
const LANDING_LINKS = [
  {
    id: 1,
    text: "Inicio",
    hash: "/#home"
  },
  {
    id: 2,
    text: "Nosotros",
    hash: "/#about"
  },
  {
    id: 3,
    text: "Proyectos",
    hash: "/#projects"
  },
  {
    id: 4,
    text: "¿Qué Hacemos?",
    hash: "/#work"
  },
  {
    id: 5,
    text: "Blog",
    hash: "/#blog"
  },
  {
    id: 6,
    text: "Impacto",
    hash: "/#numbers"
  },
  {
    id: 7,
    text: "Equipo",
    hash: "/#team"
  },
  {
    id: 8,
    text: "Galeria",
    hash: "/gallery"
  }
];
const APP_LINKS = [
  {
    id: 2,
    text: "Nosotros",
    hash: "/#about"
  },
  {
    id: 3,
    text: "Proyectos",
    hash: "/projects"
  },
  {
    id: 4,
    text: "¿Qué Hacemos?",
    hash: "/#work"
  },
  {
    id: 5,
    text: "Blog",
    hash: "/blog"
  },
  {
    id: 6,
    text: "Impacto",
    hash: "/#numbers"
  },
  {
    id: 7,
    text: "Equipo",
    hash: "/#team"
  },
  {
    id: 8,
    text: "Galeria",
    hash: "/gallery"
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary-900 pt-20 pb-10 px-8 md:px-16 relative overflow-hidden"> <div class="flex flex-col items-center"> <div class="flex flex-col items-center"> <h3 class="text-white text-4xl font-montserrat font-bold text-center mb-2"> <span class="font-extralight">Corporación</span> <span class="bg-secondary-500 -skew-x-6 inline-block px-3 py-2 text-primary-900">Manglaria</span> </h3> <p class="text-white mb-4 text-lg opacity-60 text-center md:text-left">
“donde la cultura, la paz y el cuidado se encuentran.”
</p> <div class="flex gap-4 justify-center w-full"> <a class="opacity-60 duration-150 transition-all hover:opacity-70 hover:scale-105" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/share/1BTwsFXQUK/?mibextid=wwXIfr"> ${renderComponent($$result, "FacebookIcon", FacebookIcon, { "class": "stroke-white size-6" })} </a> <a class="opacity-60 duration-150 transition-all hover:opacity-70 hover:scale-105" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/manglariapacifico?igsh=MTc2cmFmajY3M2YzdQ%3D%3D&utm_source=qr"> ${renderComponent($$result, "InstagramIcon", InstagramIcon, { "class": "stroke-white size-6" })} </a> </div> </div> <nav class="mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-[repeat(8,auto)] md:gap-x-5"> ${FOTER_LINKS.map(({ text, link, hash }) => renderTemplate`<a${addAttribute(hash ? hash : link, "href")} class="text-white/80 sm:text-nowrap hover:text-white hover:underline cursor-pointer transition-colors duration-200"> ${text} </a>`)} </nav> </div> <div class="text-center text text-secondary-900/70">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Corporación Manglaria. Todos los derechos reservados.
</div> ${renderComponent($$result, "CircleLogo", CircleLogo, { "class": "absolute pointer-events-none hidden lg:block size-[500px] opacity-5 -right-[100px] -bottom-[100px] -rotate-45" })} </footer>`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://www.corporacionmanglaria.org/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const titleTemplate = title ? `${title} | Corporaci\xF3n Manglaria` : "Corporaci\xF3n Manglaria";
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Colectivo comunitario de Buenaventura que impulsa procesos sociales y culturales para transformar el territorio desde el cuidado, la solidaridad y los derechos humanos."><meta name="keywords" content="Buenaventura, colectivo, niñez, migración, entornos protectores, derechos humanos, cultura, territorio"><meta property="og:url" content="https://www.corporacionmanglaria.org/"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(titleTemplate, "content")}><meta property="og:description" content="Colectivo comunitario de Buenaventura que impulsa procesos sociales y culturales para transformar el territorio desde el cuidado, la solidaridad y los derechos humanos."><meta property="og:image" content=""><meta property="og:site_name"${addAttribute(titleTemplate, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="corporacionmanglaria.org"><meta property="twitter:url" content="https://www.corporacionmanglaria.org/"><meta name="twitter:title"${addAttribute(titleTemplate, "content")}><meta name="twitter:description" content="Colectivo comunitario de Buenaventura que impulsa procesos sociales y culturales para transformar el territorio desde el cuidado, la solidaridad y los derechos humanos."><meta name="twitter:image" content=""><title>${titleTemplate}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="text-poppins" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/layouts/Layout.astro", void 0);

export { $$Layout as $, APP_LINKS as A, CircleLogo as C, LANDING_LINKS as L, createSvgComponent as c };
