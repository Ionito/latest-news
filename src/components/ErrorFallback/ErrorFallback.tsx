import styles from './ErrorFallback.module.css';

interface Props {
  reset?: () => void;
}

export const ErrorFallback = ({
  reset = () => window.location.assign(window.location.origin),
}: Props): JSX.Element => {
  return (
    <div className={styles.errorFallback} role="alert">
      <h2>Something went wrong :(</h2>
      <button onClick={reset}>Refresh</button>
    </div>
  );
};
