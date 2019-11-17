import React from 'react';
import { useHistory } from 'react-router-dom';
import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';
import ScrollableContent from '../../hoc/ScrollableContent';
import Text from '../../components/Text';

const TaskPage = () => {
  const { goBack } = useHistory();
  const handleRightIconClick = () => alert('TODO: show task info');
  return (
    <PageContainer>
      <Toolbar
        title="Task Screen"
        leftIcon="close"
        onLeftIconClick={goBack}
        rightIcon="info"
        onRightIconClick={handleRightIconClick}
      />
      <ScrollableContent>
        <Text>test task wip...</Text>
      </ScrollableContent>
    </PageContainer>
  );
};

export default TaskPage;
