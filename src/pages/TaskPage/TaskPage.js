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
  taskGetPercentageProgress,
  taskAnswerToQuestionByIndex,
  taskGoNext,
  taskGetCurrentQuestionIndex,
} from '../../utils/task';
import NextButton from '../../components/QuestionNextButton';

const TaskPage = () => {
  const [loadingTask, setLoadingTask] = useState(true);
  const [progress, setProgress] = useState(0);
  const [allQuestions, setAllQuestions] = useState([]);
  const [rnd, setRnd] = useState(0);
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    (async () => {
      const response = await taskInit(id);
      setAllQuestions(taskGetAllQuestionsData());
      setLoadingTask(false);
      console.log(response);
    })();
  }, [id]);

  const handleRightIconClick = () => alert('TODO: show task info');
  const buttonClick = () => {
    taskGoNext();
    const nro = taskGetCurrentQuestionIndex();
    console.log(`Nyt pitäs siirtyy kysymykseen numero (indexi): ${nro}`);
    updateProgress();
  };
  const refreshStateVisibilities = () => {
    setAllQuestions(taskGetAllQuestionsData());
  };
  const updateProgress = () => {
    setProgress(taskGetPercentageProgress);
  };
  const handleOptionChange = (_event, index, value) => {
    taskAnswerToQuestionByIndex(index, value);
    refreshStateVisibilities();
    console.log(allQuestions);
    const newProgress = taskGetPercentageProgress();
    console.log('new progress: ', newProgress);
    updateProgress();
    setRnd(Math.random() * 1000000);
  };
  console.log('Päivitetään...');
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
          {allQuestions.map(({ id, prompt, options }, qIndex) => {
            const values = Object.values(options);
            return (
              <section
                key={id}
                className={styles.fillScreen}
                style={{
                  display: allQuestions[qIndex].logicalPolarity
                    ? 'flex'
                    : 'none',
                }}
              >
                <ScrollableContent>
                  <Text style={{ display: 'none' }}>{rnd}</Text>
                  <Header>{prompt}</Header>
                  {values.map(({ value, id }, oIndex) => {
                    return (
                      <label key={`q${qIndex}-${oIndex}`}>
                        <input
                          onChange={event =>
                            handleOptionChange(event, qIndex, id)
                          }
                          type="radio"
                          name={`q${qIndex}`}
                          value={value}
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
