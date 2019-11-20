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
  taskAnswerToCurrent,
  taskGetCurrentQuestionIndex,
  taskGetPercentageProgress,
} from '../../../utils/task';

const ChatTab = ({ visible }) => {
  taskInit(2).then(response => {
    console.log('Task is initialized');
    console.log(response);
    ref();
  });

  const ref = () => {
    document.getElementById('q1').innerHTML = taskGetCurrentQuestionIndex() + 1;
    document.getElementById('q2').innerHTML = taskGetTaskQuestionsCount();
    document.getElementById('perc').innerHTML = taskGetPercentageProgress();
    const qData = taskGetCurrentQuestionData();
    document.getElementById('qq').innerHTML = qData.prompt;
    console.log('Current Question:');
    console.log(taskGetCurrentQuestionData());
  };

  const gonext = () => {
    const answer = document.getElementById('ans').value;
    taskAnswerToCurrent(answer);
    ref();
  };

  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t('TABS.chat')}</Header>
        <IconButton icon={'robot'} onClick={() => {}} />
      </TabTitle>
      <Text>
        <span id="qq">This is the chat tab</span>
      </Text>
      <Text>
        Question: <span id="q1">#</span>/<span id="q2">#</span>
        <br />
        Percent: <span id="perc">0</span> %
      </Text>
      <input type="text" id="ans" />
      <input type="button" onClick={gonext} value="answer" />
    </TabContainer>
  );
};

ChatTab.propTypes = {
  visible: PropTypes.bool,
};

export default ChatTab;
