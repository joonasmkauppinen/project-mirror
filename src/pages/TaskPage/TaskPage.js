/*eslint-disable eqeqeq*/
import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import D from '../../utils/dictionary';
// import { t } from '../../utils/translate';
import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';
import ScrollableContent from '../../hoc/ScrollableContent';
import styles from './TaskPage.module.scss';
import {
  taskInit,
  taskGetAllQuestionsData,
  taskGetPercentageProgress,
  taskAnswerToQuestionByIndex,
  taskGoNext,
  taskGetCurrentQuestionIndex,
  taskSubmitData,
  taskIsFinishedByIndex,
  taskReset,
  taskSetCurrentquestion,
  taskDescription,
  taskTitle,
} from '../../utils/task';
import Header from '../../components/QuestionHeader';
import LoadingSpinner from '../../components/LoadingSpinner';
import NextButton from '../../components/QuestionNextButton';
import { InView } from 'react-intersection-observer';
import RadioButton from '../../components/RadioButton';
import Icons from '../../assets/Icons';
import Button from '../../components/Button';
import Dialog from '../../components/Dialog';
import Text from '../../components/Text';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';

const TaskPage = () => {
  const [loadingTask, setLoadingTask] = useState(true);
  const [progress, setProgress] = useState(0);
  const [allQuestions, setAllQuestions] = useState([]);
  const [nextQuestionIndex, setNextQuestionIndex] = useState(0);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState();
  const [inViewQuestionIndex, setInViewQuestionIndex] = useState();
  const [submittingTask, setSubmittingTask] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);
  const root = useRef(null);
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

  const handleRightIconClick = () => setShowDescription(true);

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
    setLastQuestion(taskIsFinishedByIndex(index));
    console.log('lastQuestion = ' + lastQuestion);
    updateProgress();
  };

  const handleInViewChange = (inView, entry) => {
    if (inView) {
      const index = parseInt(entry.target.dataset.questionIndex);
      setInViewQuestionIndex(index);
      if (allQuestions[index]) {
        if (!allQuestions[index].answer.value) {
          taskSetCurrentquestion(index);
        } else {
          setLastQuestion(taskIsFinishedByIndex(index));
        }
      }
    }
  };

  const handleResultScreenInView = inView => {
    if (inView) {
      root.current.setAttribute('style', 'overflow-x: hidden;');
    }
  };

  const submitData = () => {
    setSubmittingTask(true);
    const resultScreen = document.getElementById('result-screen');
    setProgress(100);
    resultScreen.classList.add(styles.visible);
    resultScreen.scrollIntoView({ behavior: 'smooth' });
    taskSubmitData()
      .then(() => {
        console.log('ok! ');
        setSubmittingTask(false);
      })
      .catch(e => {
        console.log('Error: ' + e);
        setSubmittingTask(false);
      });
  };

  const endTask = () => {
    taskReset();
    goBack();
  };

  return (
    <PageContainer>
      <Toolbar
        taskProgress={progress}
        leftIcon="close"
        onLeftIconClick={() => setShowDialog(true)}
        rightIcon="info"
        onRightIconClick={handleRightIconClick}
      />
      {loadingTask ? (
        <LoadingSpinner />
      ) : (
        <div ref={root} className={styles.root}>
          {allQuestions.map(({ id, prompt, options }, qIndex) => {
            //const lastQuestion = taskIsFinishedByIndex(qIndex);
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
                  <Header>{prompt}</Header>
                  {values.map(({ value, id }, oIndex) => {
                    return (
                      <RadioButton
                        key={`q${qIndex}-${oIndex}`}
                        id={`q${qIndex}-${oIndex}`}
                        value={value}
                        name={`q${qIndex}`}
                        onChange={() => handleOptionChange(qIndex, id)}
                      />
                    );
                  })}
                </ScrollableContent>
                {lastQuestion ? (
                  <NextButton label="valmis" onClick={submitData} />
                ) : (
                  <NextButton label="seuraava" onClick={handleOnNextPress} />
                )}
              </InView>
            );
          })}
          <InView
            as="section"
            id="result-screen"
            className={styles.resultScreen}
            threshold={1}
            onChange={handleResultScreenInView}
          >
            {submittingTask ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className={styles.upperSection}>
                  <Icons.resultCheckmark />
                  <div className={styles.resultHeader}>Hienoa!</div>
                  <div className={styles.resultText}>
                    Verbaalinen tehtävän tulos.
                  </div>
                </div>
                <div className={styles.lowerSection}>
                  <Button label="valmis" onClick={endTask} />
                </div>
              </>
            )}
          </InView>
        </div>
      )}
      <Dialog
        header="Lopeta tehtävä?"
        visible={showDialog}
        onOutsideClick={() => setShowDialog(false)}
        positiveLabel="lopeta"
        negativeLabel="peruuta"
        onPositiveClicked={endTask}
        onNegativeClicked={() => setShowDialog(false)}
      >
        <Text>Jos jätät tehtävän kesken menetät vastauksesi.</Text>
      </Dialog>
      <Dialog
        header={taskTitle()}
        visible={showDescription}
        onOutsideClick={() => setShowDescription(false)}
        negativeLabel={t(D.DIALOG.close)}
        onNegativeClicked={() => setShowDescription(false)}
      >
        <Text>{taskDescription()}</Text>
      </Dialog>
    </PageContainer>
  );
};

export default TaskPage;
