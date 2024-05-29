import { Card } from '@/components/ui';
import { useLoaderData } from '@tanstack/react-router';

export const Home = (): JSX.Element => {
  const { articles } = useLoaderData({ from: '/_home/' });

  return (
    <div className="container">
      {articles.map((a) => (
        <Card key={a.title} {...a} />
      ))}
    </div>
  );
};
