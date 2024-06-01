import styles from './EmptyBanner.module.css';

export const EmptyBanner = (): JSX.Element => {
  return (
    <div className={styles.emptyBanner}>
      <div>
        <h2>Ops! 😬</h2>
        <p>Parece que no encontramos nada</p>
        <p>Intenta buscar algo diferente</p>
      </div>
    </div>
  );
};
