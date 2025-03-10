import axios from 'axios'

export const fetcher = axios.create({
    baseURL: import.meta.env.PUBLIC_API_URL,
    timeout: 5000,
    headers: {
        Authorization: `Bearer tu_token_secreto_here`
    }
})
