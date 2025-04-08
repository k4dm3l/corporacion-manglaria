import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_D1kBYqUl.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.corporacionmanglaria.org/");
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="px-4"> <h2 class="text-5xl mt-10 md:text-6xl font-montserrat font-bold text-black text-center mb-2"> ${title} </h2> <p class="text-lg mb-4 text-balance text-center md:text-xl leading-[180%] text-slate-600"> ${description} </p> </div>`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/components/TitleSection.astro", void 0);

export { $$TitleSection as $ };
