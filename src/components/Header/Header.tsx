import { Input } from '@/components/UI';
import styles from './Header.module.css';
import logo from '@/assets/logo.svg';
import search from '@/assets/search.svg';
import clsx from 'clsx';

interface Props extends React.PropsWithChildren {}

export const Header = ({}: Props): JSX.Element => {
  return (
    <header className={clsx(styles.header, 'container')}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>Latest News</h1>
      </div>

      <Input
        className={styles.input}
        placeholder="Buscar noticias..."
        endIcon={<img src={search} />}
      />
    </header>
  );
};
