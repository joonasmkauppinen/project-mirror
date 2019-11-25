import React, { useState, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';
import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';
import ScrollableContent from '../../hoc/ScrollableContent';
import styles from './TaskPage.module.scss';
import Text from '../../components/Text';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { taskInit } from '../../utils/task';

const TaskPage = () => {
  const [progress, setProgress] = useState(0);
  const second = useRef(null);
  const { id } = useParams();
  const { goBack } = useHistory();
  const startButtonLabel = t(D.QUESTIONNAIRE.start);

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
        <section className={styles.fillScreen}>
          <ScrollableContent>
            <div
              style={{
                marginTop: '64px',
                flex: '1',
              }}
            >
              <Header>{id}</Header>
              <Text>Questionnaire description is going to be here.</Text>
            </div>
            <Button
              style={{ marginBottom: '64px' }}
              label={startButtonLabel}
              onClick={buttonClick}
            />
          </ScrollableContent>
        </section>
        <section ref={second} className={styles.fillScreen}>
          <ScrollableContent>
            <Header>Question 2 here</Header>
            <Text>This is not suppose to be here.</Text>
          </ScrollableContent>
          <Button label="this will the next button" onClick={buttonClick} />
        </section>
      </div>
    </PageContainer>
  );
};

export default TaskPage;
