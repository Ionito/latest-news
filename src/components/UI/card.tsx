import styles from './card.module.css';
import placeholder from '@/assets/placeholder.jpg';
type Props = {
  title: string;
  description: string;
  author: string;
  urlToImage: string | null;
};

export const Card = ({
  title,
  description,
  author,
  urlToImage,
}: Props): JSX.Element => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={urlToImage ?? placeholder}
          alt={title}
        />
      </div>

      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}> {author}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
