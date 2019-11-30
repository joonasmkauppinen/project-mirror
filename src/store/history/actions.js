import { apiCall } from '../../utils/apicall';

export const LOAD_HISTORY = 'LOAD_HISTORY';
export const LOADING_HISTORY = 'LOADING_HISTORY';
export const ERROR_HISTORY = 'ERROR_HISTORY';

export const loadHistory = ascending => async dispatch => {
  dispatch({ type: LOADING_HISTORY });
  try {
    let hist;
    if (ascending) {
      hist = await apiCall('history', { sort: 'ASC' });
    } else {
      hist = await apiCall('history', { sort: 'DESC' });
    }
    dispatch({
      type: LOAD_HISTORY,
      history: hist.history,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: ERROR_HISTORY, error: e });
  }
};
