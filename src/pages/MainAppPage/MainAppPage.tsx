import React, { FC } from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import styles from '../PageContainer.module.css';

const MainAppPage: FC = () => (
  <div className={styles.container}>
    <Header>Main app page</Header>
    <Text>App tabs will be on this page.</Text>
  </div>
);

export default MainAppPage;
