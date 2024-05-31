import { ErrorFallback } from '@/components';
import { Loader } from '@/components/UI';
import { Home } from '@/pages/Home';
import { fetchNews } from '@/utils/fetchNews';
import { createFileRoute } from '@tanstack/react-router';

type NewsSearch = { q: string };

export const Route = createFileRoute('/_home/')({
  validateSearch: (search: Record<string, unknown>): NewsSearch => ({
    q: (search.q as string) ?? '',
  }),
  component: Home,
  loaderDeps: ({ search: { q } }) => ({ q }),
  pendingComponent: Loader,
  loader: ({ deps: { q } }) => {
    return fetchNews(q);
  },
  errorComponent: () => <ErrorFallback />,
});
