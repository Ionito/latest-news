import { notFound } from '@tanstack/react-router';
import { axios } from './client';
import { ArticleResponse } from '@/types';

export const PAGE_SIZE = 10;

export const fetchNews: (q: string) => Promise<ArticleResponse> = async (q) => {
  const endpoint =
    q === '' || q === undefined
      ? `/top-headlines?country=ar&pageSize=${PAGE_SIZE}`
      : `/everything?q=${q}&language=es&pageSize=${PAGE_SIZE}&searchIn=title`;

  const response = await axios
    .get(endpoint)
    .then((r) => r.data)
    .catch((err) => {
      if (err.status === 404) {
        throw notFound();
      }
      throw err;
    });
  return response;
};
