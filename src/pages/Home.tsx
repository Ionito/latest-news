import { NewsCard } from '@/components';
import { Link, useLoaderData } from '@tanstack/react-router';
import clsx from 'clsx';
import styles from './Home.module.css';

export const Home = (): JSX.Element => {
  const { articles } = useLoaderData({ from: '/_home/' });

  return (
    <div className={clsx('container', styles.homeContainer)}>
      {articles.map((a) => (
        <Link key={a.title} to={`/article`} search={{ ...a }}>
          <NewsCard {...a} />
        </Link>
      ))}
    </div>
  );
};
