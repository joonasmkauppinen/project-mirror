import React from 'react';
import { useHistory } from 'react-router-dom';
import PageContainer from '../../hoc/PageContainer';
import Toolbar from '../../components/Toolbar';
import ScrollableContent from '../../hoc/ScrollableContent';
import styles from './TaskPage.module.scss';
import Text from '../../components/Text';
import Header from '../../components/Header';
import Button from '../../components/Button';

const TaskPage = () => {
  const { goBack } = useHistory();
  const handleRightIconClick = () => alert('TODO: show task info');
  return (
    <PageContainer>
      <Toolbar
        title="Task Screen"
        leftIcon="close"
        onLeftIconClick={goBack}
        rightIcon="info"
        onRightIconClick={handleRightIconClick}
      />
      <div className={styles.root}>
        <section className={styles.fillScreen}>
          <ScrollableContent>
            <Header>Question 1</Header>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
            <Text>Please replace me very soon.</Text>
          </ScrollableContent>
          <Button label="this will the next button" />
        </section>
        <section className={styles.fillScreen}>
          <ScrollableContent>
            <Header>Question 2 here</Header>
            <Text>This is not suppose to be here.</Text>
          </ScrollableContent>
          <Button label="this will the next button" />
        </section>
        {/* <div className={styles.red}></div>
        <div className={styles.green}></div> */}
      </div>
    </PageContainer>
  );
};

export default TaskPage;
