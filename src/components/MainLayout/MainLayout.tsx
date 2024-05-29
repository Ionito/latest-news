import { Footer, Header } from '@/components';

import styles from './MainLayout.module.css';
import React from 'react';

interface Props extends React.PropsWithChildren {
  header?: React.ReactNode;
}

export const MainLayout = ({ children, header }: Props): JSX.Element => {
  return (
    <div className={styles.mainLayout}>
      <Header>{header}</Header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
