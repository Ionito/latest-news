import { ErrorFallback } from '@/components';
import { Loader } from '@/components/ui';
import { Home } from '@/pages/Home';
import { fetchNews } from '@/utils/fetchNews';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_home/')({
  component: Home,
  loaderDeps: ({ search: { q } }) => ({ q }),
  pendingComponent: Loader,
  loader: ({ deps: { q } }) => {
    return fetchNews(q);
  },
  errorComponent: () => <ErrorFallback />,
});
