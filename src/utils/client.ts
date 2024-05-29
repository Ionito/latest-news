import redaxios from 'redaxios';

export const axios = redaxios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: { 'X-Api-Key': import.meta.env.VITE_APP_API_KEY },
});
