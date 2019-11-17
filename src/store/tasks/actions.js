import { apiCall } from '../../utils/apicall';

export const LOAD_TASKS = 'LOAD_TASKS';
export const LOADING_TASKS = 'LOADING_TASKS';
export const ERROR_TASKS = 'ERROR_TASKS';

export const loadTasks = taskId => async dispatch => {
  dispatch({ type: LOADING_TASKS });
  try {
    let tasks;
    if (taskId) {
      tasks = await apiCall('tasks', { task_id: taskId });
    } else {
      tasks = await apiCall('tasks');
    }
    dispatch({
      type: LOAD_TASKS,
      tasks: tasks.tasks,
    });
  } catch (e) {
    dispatch({ type: ERROR_TASKS, error: e });
  }
};

export const clearTaskErrors = () => async dispatch => {
  dispatch({ type: ERROR_TASKS, error: '' });
};
