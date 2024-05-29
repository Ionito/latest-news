import { Article } from '@/pages/Article';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/article/_article/')({
  component: Article,
});
