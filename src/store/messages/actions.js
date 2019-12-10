import { apiCall } from '../../utils/apicall';
import { isUndefined } from 'lodash-es';

export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const LOADING_MESSAGES = 'LOADING_MESSAGES';
export const ERROR_MESSAGES = 'ERROR_MESSAGES';

export const loadMessages = () => async dispatch => {
  dispatch({ type: LOADING_MESSAGES });
  try {
    const mesg = await apiCall('messages');
    const messages = isUndefined(mesg.messages) ? [] : mesg.messages;
    dispatch({
      type: LOAD_MESSAGES,
      messages: messages,
    });
  } catch (e) {
    dispatch({ type: ERROR_MESSAGES, error: e });
  }
};
