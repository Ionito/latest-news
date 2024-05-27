import styles from './footer.module.css';
interface Props extends React.PropsWithChildren {}

export const Footer = ({ children }: Props): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div>© 2023 Noticias. Todos los derechos reservados.</div>
      {children}
    </footer>
  );
};
