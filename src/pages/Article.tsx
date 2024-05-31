import type { Article as ArticleInterface } from '@/types';
import { useSearch } from '@tanstack/react-router';
import placeholder from '@/assets/placeholder.jpg';
import styles from './Article.module.css';
import { formatDate } from '@/utils/utils';

export const Article = (): JSX.Element => {
  const {
    title,
    author,
    content,
    urlToImage,
    publishedAt,
    description,
  }: ArticleInterface = useSearch({
    strict: false,
  });

  return (
    <div className="container">
      <h1>{title}</h1>
      <img
        className={styles.image}
        src={urlToImage ?? placeholder}
        alt={title}
      />
      <div className={styles.articleInfo}>
        <p>{author}</p>
        <p>{formatDate(publishedAt)}</p>
      </div>
      <p>{content ?? description}</p>
    </div>
  );
};
