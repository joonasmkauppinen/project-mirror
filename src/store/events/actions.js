import { apiCall } from '../../utils/apicall';

export const LOAD_EVENTS = 'LOAD_EVENTS';
export const LOADING_EVENTS = 'LOADING_EVENTS';
export const ERROR_EVENTS = 'ERROR_EVENTS';

export const loadEvents = orgId => async dispatch => {
  dispatch({ type: LOADING_EVENTS });
  try {
    let events;
    if (orgId) {
      events = await apiCall('events', { organization_id: orgId });
    } else {
      events = await apiCall('events');
    }
    dispatch({
      type: LOAD_EVENTS,
      events: events.events,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: ERROR_EVENTS, error: e });
  }
};
