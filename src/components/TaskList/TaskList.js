import React from 'react';
import styles from './TaskList.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Subheader from '../Subheader';
import { useHistory } from 'react-router-dom';
import Task from '../Task';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';

// eslint-disable-next-line no-unused-vars
const TaskList = ({ tasks, loading, error }) => {
  const { push } = useHistory();
  return (
    <>
      <Subheader>{t(D.HOME.tasks)}</Subheader>
      <LoadingIndicator loading={false} error={error}>
        {tasks.map(task => (
          <div key={task.id}>
            <div className={styles.tasksContainer}>
              <Task
                onClick={() => {
                  push(`/task/${task.id}`);
                }}
                title={task.name}
                description={task.description}
                points={task.xp}
                completed={task.answered}
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
};

export default TaskList;
