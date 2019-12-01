/*eslint-disable eqeqeq*/
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
import { InView } from 'react-intersection-observer';

const TaskPage = () => {
  const [loadingTask, setLoadingTask] = useState(true);
  const [progress, setProgress] = useState(0);
  const [allQuestions, setAllQuestions] = useState([]);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState();
  const [inViewQuestionIndex, setInViewQuestionIndex] = useState();
  const [refresh, setRefresh] = useState(false);
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    (async () => {
      await taskInit(id);
      setAllQuestions(taskGetAllQuestionsData());
      setLoadingTask(false);
    })();
  }, [id]);

  useEffect(() => {
    console.log('previous question index: ', previousQuestionIndex);
    console.log('in view question index: ', inViewQuestionIndex);
    console.log('next question index: ', nextQuestionIndex);
  }, [inViewQuestionIndex, nextQuestionIndex, previousQuestionIndex]);

  useEffect(() => {
    if (nextQuestionIndex > inViewQuestionIndex) {
      document
        .getElementById(`question-${nextQuestionIndex}`)
        .classList.add(styles.visible);
    }
  }, [nextQuestionIndex, inViewQuestionIndex]);

  const checkNextQuestionIndex = () => {
    const next = allQuestions.findIndex(
      ({ logicalPolarity }, index) =>
        index > inViewQuestionIndex && logicalPolarity,
    );
    setNextQuestionIndex(next);
  };

  const checkPreviousQuestionIndex = () => {
    const previous = allQuestions.reduce((prevIndex, question, index) => {
      if (index < inViewQuestionIndex && question.logicalPolarity) return index;
      return prevIndex;
    }, 0);

    setPreviousQuestionIndex(previous);
  };

  const handleRightIconClick = () => alert('TODO: show task info');

  const handleOnNextPress = () => {
    if (inViewQuestionIndex == nextQuestionIndex) {
      console.log('Question not answered yet!');
      return;
    }

    if (inViewQuestionIndex < nextQuestionIndex) {
      const nextQuestionElement = document.getElementById(
        `question-${nextQuestionIndex}`,
      );
      nextQuestionElement.scrollIntoView({ behavior: 'smooth' });
    }

    if (inViewQuestionIndex == taskGetCurrentQuestionIndex()) {
      taskGoNext();
      const nro = taskGetCurrentQuestionIndex();
      console.log(`Nyt pitäs siirtyy kysymykseen numero (indexi): ${nro}`);
      const nextQuestionElement = document.getElementById(`question-${nro}`);
      nextQuestionElement.scrollIntoView({ behavior: 'smooth' });
      updateProgress();
    }
  };

  const updateProgress = () => {
    const newPropgress = taskGetPercentageProgress();
    console.log('New progress: ', newPropgress);
    setProgress(newPropgress);
  };

  const handleOptionChange = (index, value) => {
    taskAnswerToQuestionByIndex(index, value);
    setAllQuestions(taskGetAllQuestionsData());
    checkNextQuestionIndex();
    checkPreviousQuestionIndex();
    updateProgress();
    setRefresh(!refresh);
  };

  const handleInViewChange = (inView, entry) => {
    if (inView) {
      const index = entry.target.dataset.questionIndex;
      setInViewQuestionIndex(index);
    }
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
            const classes = [styles.fillScreen];
            qIndex === 0 && classes.push(styles.visible);
            return (
              <InView
                as="section"
                onChange={handleInViewChange}
                threshold={0.75}
                data-question-index={qIndex}
                id={`question-${qIndex}`}
                key={id}
                className={classes.join(' ')}
              >
                <ScrollableContent>
                  <div style={{ display: 'none' }}>{refresh}</div>
                  <Header>{prompt}</Header>
                  {values.map(({ value, id }, oIndex) => {
                    return (
                      <label key={`q${qIndex}-${oIndex}`}>
                        <input
                          onChange={() => handleOptionChange(qIndex, id)}
                          type="radio"
                          name={`q${qIndex}`}
                          value={value}
                        />
                        <Text style={{ display: 'inline-block' }}>{value}</Text>
                      </label>
                    );
                  })}
                </ScrollableContent>
                <NextButton label="seuraava" onClick={handleOnNextPress} />
              </InView>
            );
          })}
        </div>
      )}
    </PageContainer>
  );
};

export default TaskPage;
