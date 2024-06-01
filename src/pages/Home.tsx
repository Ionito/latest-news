import { EmptyBanner, NewsCard } from '@/components';
import { Link, useLoaderData } from '@tanstack/react-router';
import clsx from 'clsx';
import styles from './Home.module.css';
import { Pagination } from '@/components/Pagination/Pagination';

export const Home = (): JSX.Element => {
  const { articles, totalResults } = useLoaderData({ from: '/_home/' });

  if (articles.length === 0) return <EmptyBanner />;

  return (
    <>
      <div className={clsx('container', styles.homeContainer)}>
        {articles.map((a) => (
          <Link key={a.title} to={`/article`} search={{ ...a }}>
            <NewsCard {...a} />
          </Link>
        ))}
      </div>
      <Pagination total={totalResults} />
    </>
  );
};
