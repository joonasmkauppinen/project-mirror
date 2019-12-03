import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import styles from './HomeTab.module.scss';
import TabTitle from '../../../components/TabTitle';
import TaskList from '../../../components/TaskList';
import PostList from '../../../components/PostList';
import { isEmpty } from 'lodash-es';
import LevelGauge from '../../../components/LevelGauge';

const HomeTab = ({
  visible,
  loadTasks,
  loadPosts,
  loadOrgs,
  loadUser,
  user,
}) => {
  useEffect(() => {
    if (visible) {
      loadTasks();
      loadPosts();
      loadOrgs();
      loadUser();
    }
  }, [visible, loadTasks, loadPosts, loadOrgs, loadUser]);
  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>
          <div className={styles.headerLight}>{t('HOME.title')}</div>
          {'\n'}
          {user.firstname}
        </Header>
        <div className={styles.level}>
          {!isEmpty(user) && user.gamification.level}
        </div>
      </TabTitle>
      {!isEmpty(user) && <LevelGauge user={user} />}

      <TaskList />
      <PostList />
    </TabContainer>
  );
};

HomeTab.propTypes = {
  visible: PropTypes.bool,
  loadTasks: PropTypes.func,
  loadPosts: PropTypes.func,
  loadOrgs: PropTypes.func,
  loadUser: PropTypes.func,
  user: PropTypes.object,
};

export default HomeTab;
