import React, { useState } from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.scss';
import IconButton from '../../../components/IconButton';
import Toggle from '../../../components/Toggle';

const test = () => {
  console.log('Test');
};

const DiscoverTab = () => {
  const [value, setValue] = useState(false);
  return (
    <div className={styles.container}>
      <Header>Discover</Header>
      <Text>This is the discover tab</Text>
      <IconButton onClick={test} icon={'info'} />
      <Toggle isOn={value} handleToggle={() => setValue(!value)} />
    </div>
  );
};

export default DiscoverTab;
