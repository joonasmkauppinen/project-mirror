import React, { useEffect } from 'react';
import styles from './TaskList.module.scss';
import PropTypes from 'prop-types';
import Text from '../Text';
import LoadingIndicator from '../LoadingIndicator';
import Button from '../Button';
import Subheader from '../Subheader';

// eslint-disable-next-line no-unused-vars
const TaskList = ({ tasks, loading, error, loadTasks }) => {
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  return (
    <>
      <Subheader>Tasks</Subheader>
      <LoadingIndicator loading={false} error={error}>
        {tasks.map(task => (
          <div key={task.id}>
            <div className={styles.tasksContainer}>
              <Text>{task.name}</Text>
              <div>
                <Button
                  label={'action'}
                  onClick={() => {
                    console.log(task.name);
                  }}
                  style={{ width: '80px' }}
                />
              </div>
            </div>
          </div>
        ))}
      </LoadingIndicator>
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  loadTasks: PropTypes.func,
};

export default TaskList;
