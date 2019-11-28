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
  const [refresh, setRefresh] = useState(false);
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
    const nextQuestionElement = document.getElementById(`question-${nro}`);
    nextQuestionElement.scrollIntoView({ behavior: 'smooth' });
    updateProgress();
  };

  const updateProgress = () => {
    const newPropgress = taskGetPercentageProgress();
    console.log('New progress: ', newPropgress);
    setProgress(newPropgress);
  };

  const handleOptionChange = (_event, index, value) => {
    console.log(value);
    taskAnswerToQuestionByIndex(index, value);
    setAllQuestions(taskGetAllQuestionsData());
    updateProgress();
    setRefresh(!refresh);
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
          {allQuestions.map(({ id, prompt, options }, qIndex) => {
            const values = Object.values(options);
            return (
              <section
                id={`question-${qIndex}`}
                key={id}
                className={styles.fillScreen}
                style={{
                  display: allQuestions[qIndex].logicalPolarity
                    ? 'flex'
                    : 'none',
                }}
              >
                <ScrollableContent>
                  <div style={{ display: 'none' }}>{refresh}</div>
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
