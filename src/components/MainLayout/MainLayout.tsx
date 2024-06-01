import { Footer, Header, SocialIcons } from '@/components';

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
      <Footer>
        <SocialIcons
          twitter="https://twitter.com"
          linkedin="https://linkedin.com"
          instagram="https://instagram.com"
        />
      </Footer>
    </div>
  );
};
