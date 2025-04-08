import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, e as renderTransition } from '../../chunks/astro/server_D1kBYqUl.mjs';
import 'kleur/colors';
import { $ as $$Nav } from '../../chunks/Nav_ClZen4xF.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CTdYMAkX.mjs';
import { f as formatDate } from '../../chunks/dates_BRPpJnld.mjs';
import { a as actions } from '../../chunks/_astro_actions_CgMaGk3k.mjs';
import { marked } from 'marked';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.corporacionmanglaria.org/");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { data, error } = await Astro2.callAction(actions.getBySlug, {
    type: "project",
    slug: Astro2.params.slug ?? ""
  });
  if (error || !data) return Astro2.redirect("/404");
  const content = marked.parse(data?.content || "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data?.title, "description": data?.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<section class="px-8 py-10 max-w-5xl mx-auto mb-20 flex flex-col items-center"> <h1 class="text-5xl mt-10 md:text-6xl font-montserrat font-bold text-black text-center mb-4"> ${data?.title} </h1> <p class="text-gray-600 text-sm mb-6">${formatDate(data?.createdAt)}</p> <picture class="aspect-video rounded-2xl w-full overflow-hidden mb-6 md:mb-10"> <img${addAttribute(data?.image, "src")}${addAttribute(data?.title, "alt")} class="w-full h-full  object-cover brightness-50 group-hover:brightness-100 transition-all duration-300"${addAttribute(renderTransition($$result2, "7nakqioh", "", `img-${data?._id}`), "data-astro-transition-scope")}> </picture> <div class="max-w-4xl text-slate-600 text-lg prose">${unescapeHTML(content)}</div> </section> <section class="px-8 mb-20 flex justify-center"> <a href="/projects" class="bg-secondary-600 px-5 py-3 rounded-md hover:bg-secondary-800 transition text-black">← Regresar</a> </section> ` })}`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/pages/projects/[slug].astro", "self");

const $$file = "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
