import React, { FC } from 'react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import styles from '../PageContainer.module.css';

const DiscoverTab: FC = () => (
  <div className={styles.container}>
    <Header>Discover tab</Header>
    <Text>This is the discover tab</Text>
  </div>
);

export default DiscoverTab;