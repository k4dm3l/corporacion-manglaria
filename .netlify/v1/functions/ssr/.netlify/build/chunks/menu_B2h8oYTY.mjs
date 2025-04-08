import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, k as renderSlot, l as renderScript, r as renderTemplate } from './astro/server_jI5cH59c.mjs';
import 'kleur/colors';
import 'clsx';
import { c as createSvgComponent } from './Layout_5IGRvs6z.mjs';

const $$Astro = createAstro("https://www.corporacionmanglaria.org/");
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const { class: className, links = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([className], "class:list")}> <button id="open-menu"> ${renderSlot($$result, $$slots["default"])} </button> <div id="nav" class="w-full hidden h-screen flex-col fixed top-0 left-0 z-50 bg-primary-900 py-10"> <nav class="flex-1 w-full flex items-center gap-4 flex-col 00 justify-center overflow-auto py-10"> ${links.map(({ text, hash }) => renderTemplate`<a${addAttribute(hash, "href")} class="text-white/90 links text-2xl hover:text-white hover:underline"> ${text} </a>`)} </nav> <button id="close-menu" class="text-white absolute top-6 right-6"> <svg class="size-10" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> ${renderScript($$result, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/components/MobileMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/components/MobileMenu.astro", void 0);

const MenuIcon = createSvgComponent({"meta":{"src":"/_astro/menu.CcG9FO03.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"lucide lucide-menu-icon lucide-menu"},"children":"<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />"});

export { $$MobileMenu as $, MenuIcon as M };
