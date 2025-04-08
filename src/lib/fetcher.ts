import axios from "axios";

console.log({
  baseURL: import.meta.env.PUBLIC_API_URL,
  Authorization: `Bearer ${import.meta.env.PUBLIC_API_TOKEN}`,
})

export const fetcher = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.PUBLIC_API_TOKEN}`,
  },
});

