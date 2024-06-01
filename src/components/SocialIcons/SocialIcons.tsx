import twitterImg from '@/assets/twitter.svg';
import instagramImg from '@/assets/instagram.svg';
import linkedinImg from '@/assets/linkedin.svg';
import styles from './SocialIcons.module.css';

interface Props {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export const SocialIcons = ({
  twitter,
  instagram,
  linkedin,
}: Props): JSX.Element => {
  return (
    <div className={styles.socialIcons}>
      {twitter && (
        <a href={twitter} target="_blank" rel="noreferrer">
          <img src={twitterImg} alt="twitter" />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noreferrer">
          <img src={instagramImg} alt="instagram" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img src={linkedinImg} alt="linkedin" />
        </a>
      )}
    </div>
  );
};
