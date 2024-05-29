import logo from '@/assets/logo.svg';
import clsx from 'clsx';
import styles from './Header.module.css';

interface Props extends React.PropsWithChildren {}

export const Header = ({ children }: Props): JSX.Element => {
  return (
    <header className={clsx(styles.header, 'container')}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>Latest News</h1>
      </div>

      {children}
    </header>
  );
};
