import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import styles from './HomeTab.module.scss';
import TabTitle from '../../../components/TabTitle';
import TaskList from '../../../components/TasksList';
import Dialog from '../../../components/Dialog/Dialog';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import PostList from '../../../components/PostList';
import { isEmpty } from 'lodash-es';

const HomeTab = ({
  visible,
  loadTasks,
  loadPosts,
  loadOrgs,
  loadUser,
  user,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  console.log(user);
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
      <TaskList />
      <PostList />
      <Button label="Show test dialog" onClick={() => setShowDialog(true)} />
      <Dialog
        header="Test dialog"
        visible={showDialog}
        onOutsideClick={() => setShowDialog(false)}
        positiveLabel="done"
        negativeLabel="close"
        onPositiveClicked={() => setShowDialog(false)}
        onNegativeClicked={() => setShowDialog(false)}
      >
        <Text>
          This is just a test dialog and should be removed from HomeTab after
          testing.
        </Text>
      </Dialog>
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
