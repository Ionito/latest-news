import { ErrorFallback } from '@/components';
import { ErrorBoundary } from 'react-error-boundary';

interface Props extends React.PropsWithChildren {}

export const AppProviders = ({ children }: Props): JSX.Element => {
  return <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>;
};
