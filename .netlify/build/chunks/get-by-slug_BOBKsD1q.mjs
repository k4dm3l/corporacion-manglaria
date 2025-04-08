import { a as fetcher } from './fetcher_BpbBtXqt.mjs';

const getBydSlug = async ({ type, slug }) => {
  try {
    const data = await fetcher.get(`/${type}/${slug}`).then((res) => res.data);
    return { data, error: false };
  } catch (e) {
    console.log("GET BY SLUG", { e });
    return { error: true, data: null };
  }
};

export { getBydSlug as g };
