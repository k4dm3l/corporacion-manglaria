import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D1kBYqUl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CTdYMAkX.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - No encontrado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-white"> <p class="text-9xl font-semibold text-slate-800 mb-4">404</p> <h1 class="text-4xl font-bold text-slate-800 mb-4">Oops, no encontramos esta página</h1> <p class="text-slate-500 text-lg mb-6">
Puede que el enlace esté roto o que la página haya sido movida.
</p> <a href="/" class="inline-block px-6 py-3 rounded-md bg-[#7a3eb6] text-white font-semibold  hover:bg-[#682fa5] transition">
Volver al inicio
</a> </section> ` })}`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/pages/404.astro", void 0);

const $$file = "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
