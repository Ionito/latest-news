import { ErrorFallback } from '@/components';
import { Loader } from '@/components/ui';

import { Home } from '@/pages/Home';
import { fetchNews } from '@/utils/fetchNews';
import { createFileRoute } from '@tanstack/react-router';

type NewsSearch = { q: string; page?: number };

export const Route = createFileRoute('/_home/')({
  validateSearch: (search: Record<string, unknown>): NewsSearch => ({
    q: (search.q as string) ?? '',
    page: (search.page as number) ?? 1,
  }),
  component: Home,
  loaderDeps: ({ search: { q, page } }) => ({ q, page }),
  pendingComponent: Loader,
  loader: ({ deps: { q, page } }) => {
    return fetchNews(q, page);
  },
  errorComponent: () => <ErrorFallback />,
});
