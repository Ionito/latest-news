import styles from './ErrorFallback.module.css';

export const ErrorFallback = (): JSX.Element => {
  return (
    <div className={styles.errorFallback} role="alert">
      <h2>Something went wrong :(</h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};
