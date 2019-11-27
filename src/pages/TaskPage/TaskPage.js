import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import D from '../../utils/dictionary';
// import { t } from '../../utils/translate';
import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';
import ScrollableContent from '../../hoc/ScrollableContent';
import styles from './TaskPage.module.scss';
import Text from '../../components/Text';
import Header from '../../components/QuestionHeader';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
  taskInit,
  taskGetAllQuestionsData,
  taskGetCurrentQuestionIndex,
  taskGetPercentageProgress,
} from '../../utils/task';
import NextButton from '../../components/QuestionNextButton';

const TaskPage = () => {
  const [loadingTask, setLoadingTask] = useState(true);
  const [progress, setProgress] = useState(0);
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    (async () => {
      const response = await taskInit(id);
      setLoadingTask(false);
      console.log(response);
      console.log(taskGetAllQuestionsData());
    })();
  }, [id]);

  const handleRightIconClick = () => alert('TODO: show task info');
  const buttonClick = () => {};
  const handleOptionChange = (event, index) => {
    console.log('q index: ', index);
    const value = event.target.value;
    console.log(value);
    taskGetCurrentQuestionIndex(index, value);
    const newProgress = taskGetPercentageProgress();
    console.log('new progress: ', newProgress);
    setProgress(taskGetPercentageProgress);
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
      {loadingTask ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.root}>
          {taskGetAllQuestionsData().map(({ id, prompt, options }, qIndex) => {
            console.log('options: ', options);
            const values = Object.values(options);
            console.log('values: ', values);
            return (
              <section key={id} className={styles.fillScreen}>
                <ScrollableContent>
                  <Header>{prompt}</Header>
                  {values.map(({ value, mathValue }, oIndex) => {
                    return (
                      <label key={`q${qIndex}-${oIndex}`}>
                        <input
                          onChange={event => handleOptionChange(event, qIndex)}
                          type="radio"
                          name={`q${qIndex}`}
                          value={mathValue}
                        />
                        <Text style={{ display: 'inline-block' }}>{value}</Text>
                        <br />
                      </label>
                    );
                  })}
                </ScrollableContent>
                <NextButton label="seuraava" onClick={buttonClick} />
              </section>
            );
          })}
        </div>
      )}
    </PageContainer>
  );
};

export default TaskPage;
