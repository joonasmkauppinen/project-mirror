import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';

import {
  taskInit,
  taskGetTaskQuestionsCount,
  taskGetCurrentQuestionData,
} from '../../../utils/task';

const ChatTab = ({ visible }) => {
  taskInit(2).then(response => {
    console.log('Task is initialized');
    console.log(response);
    console.log(`Task has Number of questions: ${taskGetTaskQuestionsCount()}`);
    console.log('Current Question:');
    console.log(taskGetCurrentQuestionData());
  });

  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t('TABS.chat')}</Header>
        <IconButton icon={'robot'} onClick={() => {}} />
      </TabTitle>
      <Text>This is the chat tab</Text>
      <Text>Question: #/#</Text>
      <Text>Percent: #</Text>
    </TabContainer>
  );
};

ChatTab.propTypes = {
  visible: PropTypes.bool,
};

export default ChatTab;
