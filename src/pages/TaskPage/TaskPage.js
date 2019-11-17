import React from 'react';
import { useHistory } from 'react-router-dom';
import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';
import ScrollableContent from '../../hoc/ScrollableContent';
import Text from '../../components/Text';

const TaskPage = () => {
  const { goBack } = useHistory();

  return (
    <PageContainer>
      <Toolbar leftIcon="back" onLeftIconClick={goBack} title="Task Screen" />
      <ScrollableContent>
        <Text>test task wip...</Text>
      </ScrollableContent>
    </PageContainer>
  );
};

export default TaskPage;
