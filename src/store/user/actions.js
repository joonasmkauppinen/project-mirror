import { apiCall } from '../../utils/apicall';

export const LOAD_USER = 'LOAD_USER';
export const LOADING_USER = 'LOADING_USER';
export const ERROR_USER = 'ERROR_POSTS';

export const loadUser = () => async dispatch => {
  dispatch({ type: LOADING_USER });
  try {
    const user = await apiCall('myinfo');
    dispatch({
      type: LOAD_USER,
      user: user,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: ERROR_USER, error: e });
  }
};
