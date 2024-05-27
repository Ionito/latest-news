import { Footer, Header } from '@/components';
import styles from './MainLayout.module.css';

interface Props extends React.PropsWithChildren {}

export const MainLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles['main-layout']}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
