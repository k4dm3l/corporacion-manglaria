import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, e as renderTransition } from './astro/server_D1kBYqUl.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from './dates_BRPpJnld.mjs';
import { a as actions } from './_astro_actions_CgMaGk3k.mjs';
/* empty css                         */

const $$Astro = createAstro("https://www.corporacionmanglaria.org/");
const $$LatestEntities = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LatestEntities;
  const { entity, link, text } = Astro2.props;
  const { data, error } = await Astro2.callAction(actions.getAll, {
    type: entity,
    page: Astro2.url.searchParams.get("page") || "1",
    limit: "3"
  });
  const { data: posts = [] } = data ?? {};
  return renderTemplate`${maybeRenderHead()}<section> ${error ? renderTemplate`<section class="flex flex-col items-center justify-center text-center px-6 text-slate-600"> <h2 class="text-2xl font-semibold text-slate-700 mb-2">
Aún no hay historias
</h2> <p class="max-w-md text-lg text-slate-500">
Estamos tejiendo palabras, pronto verás publicaciones aquí
                    que inspiran, informan y transforman. ¡Vuelve pronto!
</p> </section>` : renderTemplate`<div> <section class="px-8 py-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative"> ${posts.map(
    ({
      title,
      slug,
      image,
      description,
      createdAt,
      _id
    }) => renderTemplate`<a${addAttribute(`/blog/${slug}`, "href")} class="group flex flex-col onverflow-hidden"> <picture class="rounded-lg mb-3 aspect-video w-full overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover fil brightness-50 group-hover:brightness-100 transition-all duration-300"${addAttribute(renderTransition($$result, "d2it5cjq", "", `img-${_id}`), "data-astro-transition-scope")}> </picture> <div class="p-2"> <span class="text-sm text-primary-500 font-league font-semibold"> ${formatDate(createdAt)} </span> <h3 class="text-xl font-montserrat font-bold line-clamp-2"> ${title} </h3> <p class="text-slate-600 font-light text-sm line-clamp-3"> ${description} </p> </div> </a>`
  )} </section> <div class="flex justify-center"> <a${addAttribute(link, "href")} class="bg-secondary-600 px-5 py-3 rounded-md hover:bg-secondary-800 transition text-black"> ${text} </a> </div> </div>`} </section>`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/components/LatestEntities.astro", "self");

const $$file = "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/components/LatestEntities.astro";
const $$url = undefined;

export { $$LatestEntities as default, $$file as file, $$url as url };
