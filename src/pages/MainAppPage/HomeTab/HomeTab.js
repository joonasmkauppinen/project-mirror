import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import styles from './HomeTab.module.scss';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';
import TaskList from '../../../components/TasksList';
import Button from '../../../components/Button';

const HomeTab = ({ visible }) => {
  const { push } = useHistory();
  const navigateToTask = () => push('/task');

  return (
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
      <Button label="Test task" onClick={navigateToTask} />
      <TaskList />
    </TabContainer>
  );
};

HomeTab.propTypes = {
  visible: PropTypes.bool,
};

export default HomeTab;
