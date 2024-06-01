import logo from '@/assets/logo.svg';
import clsx from 'clsx';
import styles from './Header.module.css';
import { Link } from '@tanstack/react-router';

interface Props extends React.PropsWithChildren {}

export const Header = ({ children }: Props): JSX.Element => {
  return (
    <header className={clsx(styles.header, 'container')}>
      <Link search={{ q: '', page: 1 }} to={'/'} className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>Latest News</h1>
      </Link>

      {children}
    </header>
  );
};
