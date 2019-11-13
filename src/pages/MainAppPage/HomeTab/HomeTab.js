import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import styles from './HomeTab.module.scss';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';
import TaskList from '../../../components/TasksList';

const HomeTab = ({ visible }) => (
  <TabContainer active={visible}>
    <TabTitle>
      <Header>
        <div className={styles.headerLight}>{t('HOME.title')}</div>
        {'\n'}
        User
      </Header>
      <IconButton
        icon={'info'}
        onClick={() => {}}
        style={{ alignSelf: 'flex-start' }}
      />
    </TabTitle>
    <TaskList />
  </TabContainer>
);

HomeTab.propTypes = {
  visible: PropTypes.bool,
};

export default HomeTab;
