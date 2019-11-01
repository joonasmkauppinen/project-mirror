import React from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.scss';

const ProfileTab = () => (
  <div className={styles.container}>
    <Header>Profile tab</Header>
    <Text>This is the profile tab</Text>
  </div>
);

export default ProfileTab;
