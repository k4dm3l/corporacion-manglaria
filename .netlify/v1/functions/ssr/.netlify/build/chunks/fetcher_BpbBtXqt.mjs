import axios from 'axios';

function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

console.log({
  baseURL: "https://cms.corporacionmanglaria.org/api/content",
  Authorization: `Bearer ${"tu_token_secreto_here"}`
});
const fetcher = axios.create({
  baseURL: "https://cms.corporacionmanglaria.org/api/content",
  timeout: 1e4,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${"tu_token_secreto_here"}`
  }
});

export { fetcher as a, formatDate as f };
