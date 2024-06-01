import { Button } from '../ui';
import styles from './ErrorFallback.module.css';

interface Props {
  reset?: () => void;
}

export const ErrorFallback = ({
  reset = () => window.location.assign(window.location.origin),
}: Props): JSX.Element => {
  return (
    <div className={styles.errorFallback} role="alert">
      <h2>Algo salió mal :(</h2>
      <Button onClick={reset}>Refresh</Button>
    </div>
  );
};
