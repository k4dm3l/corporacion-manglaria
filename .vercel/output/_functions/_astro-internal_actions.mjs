import axios from 'axios';
import './chunks/_astro_actions_CgMaGk3k.mjs';
import * as z from 'zod';
import { d as defineAction } from './chunks/server_BQIKLfCv.mjs';

const fetcher = axios.create({
  baseURL: "https://cms.corporacionmanglaria.org/api/content",
  timeout: 1e4,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${"tu_token_secreto_here"}`
  }
});

const getAll = defineAction({
  input: z.object({
    type: z.string(),
    page: z.string().optional().default("1"),
    limit: z.string().optional().default("10")
  }),
  handler: async ({ type, page, limit }) => fetcher.get(`/${type}?page=${page}&limit=${limit}`).then((res) => res.data)
});

const getBySlug = defineAction({
  input: z.object({
    type: z.string(),
    slug: z.string()
  }),
  handler: async ({ type, slug }) => fetcher.get(`/${type}/${slug}`).then((res) => res.data)
});

const server = {
  getAll,
  getBySlug
};

export { server };
