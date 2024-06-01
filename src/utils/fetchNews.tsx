import { notFound } from '@tanstack/react-router';
import { axios } from './client';
import { ArticleResponse } from '@/types';
import { getPageSize } from './utils';

export const fetchNews: (
  q: string,
  page?: number,
) => Promise<ArticleResponse> = async (q, page = 1) => {
  const page_size = getPageSize();
  const endpoint =
    q === '' || q === undefined
      ? `/top-headlines?country=ar&pageSize=${page_size}&page=${page}`
      : `/everything?q=${q}&language=es&pageSize=${page_size}&searchIn=title&page=${page}`;

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
