import React, { FC } from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.css';

const HomeTab: FC = () => (
  <div className={styles.container}>
    <Header>Home tab</Header>
    <Text>This is the home tab</Text>
  </div>
);

export default HomeTab;
