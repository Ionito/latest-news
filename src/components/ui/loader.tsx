import styles from './loader.module.css';

export const Loader = (): JSX.Element => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
};
