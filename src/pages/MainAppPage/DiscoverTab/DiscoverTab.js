import React from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.scss';
import { ReactComponent as InfoIcon } from '../../../assets/svg/info.svg';
import IconButton from '../../../components/IconButton';

const test = () => {
  console.log('Test');
};

const DiscoverTab = () => (
  <div className={styles.container}>
    <Header>Discover</Header>
    <Text>This is the discover tab</Text>
    <IconButton Icon={InfoIcon} onClick={test} />
  </div>
);

export default DiscoverTab;
