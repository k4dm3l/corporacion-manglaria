import { a as createComponent, m as maybeRenderHead, d as renderComponent, b as addAttribute, r as renderTemplate } from './astro/server_D1kBYqUl.mjs';
import 'kleur/colors';
import { A as APP_LINKS, C as CircleLogo } from './Layout_CTdYMAkX.mjs';
import { $ as $$MobileMenu, M as MenuIcon } from './menu_CzDBp_NJ.mjs';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="h-20 flex justify-between items-center w-full relative z-50 px-8 border-b border-b-slate-100"> <a href="/" class="flex items-center gap-2"> ${renderComponent($$result, "CircleLogo", CircleLogo, { "class": "size-12" })} <span class="text-primary-900 text-2xl font-bold hidden lg:inline-block">
Manglaria
</span> </a> <nav class="hidden md:flex gap-4 justify-center"> ${APP_LINKS.map(({ text, hash }) => renderTemplate`<a${addAttribute(hash, "href")} class="text-primary-900 links text-base hover:text-primary-950 hover:underline"> ${text} </a>`)} </nav> ${renderComponent($$result, "MobileMenu", $$MobileMenu, { "class": "md:hidden", "links": APP_LINKS }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuIcon", MenuIcon, { "class": "fill-primary-900 stroke-primary-900 size-10" })} ` })} </header>`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/components/Nav.astro", void 0);

export { $$Nav as $ };
