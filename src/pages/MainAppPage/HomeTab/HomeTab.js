import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import styles from './HomeTab.module.scss';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';
import TaskList from '../../../components/TasksList';
import Dialog from '../../../components/Dialog/Dialog';
import Button from '../../../components/Button';
import Text from '../../../components/Text';

const HomeTab = ({ visible }) => {
  const [showDialog, setShowDialog] = useState(false);
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
      <TaskList />
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
};

export default HomeTab;
