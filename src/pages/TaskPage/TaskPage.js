import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import D from '../../utils/dictionary';
// import { t } from '../../utils/translate';
import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';
import ScrollableContent from '../../hoc/ScrollableContent';
import styles from './TaskPage.module.scss';
import Text from '../../components/Text';
import Header from '../../components/QuestionHeader';
import { taskInit, taskGetAllQuestionsData } from '../../utils/task';
import NextButton from '../../components/QuestionNextButton';

const TaskPage = () => {
  const [progress] = useState(0);
  const second = useRef(null);
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    (async () => {
      const response = await taskInit(id);
      console.log(response);
      console.log(taskGetAllQuestionsData());
    })();
  }, [id]);

  const handleRightIconClick = () => alert('TODO: show task info');
  const buttonClick = () => {
    second.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageContainer>
      <Toolbar
        taskProgress={progress}
        leftIcon="close"
        onLeftIconClick={goBack}
        rightIcon="info"
        onRightIconClick={handleRightIconClick}
      />
      <div className={styles.root}>
        {taskGetAllQuestionsData().map(({ id, prompt, options }) => {
          return (
            <section key={id} className={styles.fillScreen}>
              <ScrollableContent>
                <Header>{prompt}</Header>
                <Text>{JSON.stringify(options, null, 2)}</Text>
              </ScrollableContent>
              <NextButton label="seuraava" onClick={buttonClick} />
            </section>
          );
        })}
      </div>
    </PageContainer>
  );
};

export default TaskPage;
