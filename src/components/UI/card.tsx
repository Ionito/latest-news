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
    <article>
      <img src={urlToImage ?? placeholder} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{description}</p>
    </article>
  );
};
