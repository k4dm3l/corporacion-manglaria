import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_jI5cH59c.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.corporacionmanglaria.org/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage = 1, totalPages = 1 } = Astro2.props;
  const prevPage = Math.max(currentPage - 1, 1);
  const nextPage = Math.min(currentPage + 1, totalPages);
  function getPageUrl(page) {
    const url = new URL(Astro2.url);
    url.searchParams.set("page", page.toString());
    return url.pathname + url.search;
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center gap-4 mt-8"> <a${addAttribute(getPageUrl(prevPage), "href")}${addAttribute(currentPage <= 1, "aria-disabled")}${addAttribute(["px-4 py-2 rounded bg-primary-900 text-white disabled:opacity-50", currentPage <= 1 ? "pointer-events-none opacity-50" : ""], "class:list")}>
← Anterior
</a> <a${addAttribute(getPageUrl(nextPage), "href")}${addAttribute(currentPage >= totalPages, "aria-disabled")}${addAttribute(["px-4 py-2 rounded bg-primary-900 text-white disabled:opacity-50", currentPage >= totalPages ? "pointer-events-none opacity-50" : ""], "class:list")}>
Siguiente →
</a> </div>`;
}, "/Users/diegocontrerasarchila/Documents/dev/corp-manglaria/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
