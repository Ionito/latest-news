import clsx from 'clsx';
import styles from './footer.module.css';

interface Props extends React.PropsWithChildren {}

export const Footer = ({ children }: Props): JSX.Element => {
  return (
    <footer className={clsx('container', styles.footer)}>
      <div>© 2023 Noticias. Todos los derechos reservados.</div>
      {children}
    </footer>
  );
};
