import React, { useEffect } from 'react';
import styles from './TaskList.module.scss';
import PropTypes from 'prop-types';
import Text from '../Text';
import LoadingIndicator from '../LoadingIndicator';
import Button from '../Button';

const TaskList = ({ tasks, loading, error, loadTasks }) => {
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  return (
    <>
      <h1>Tasks</h1>
      <LoadingIndicator loading={loading} error={error}>
        {tasks.map(task => (
          <div key={task.id}>
            <div className={styles.tasksContainer}>
              <Text>{task.name}</Text>
              <Button
                label={'action'}
                onClick={() => {
                  console.log(task.name);
                }}
                style={{ width: '80px' }}
              />
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
