import { apiCall } from '../../utils/apicall';

export const LOAD_GAUGES = 'LOAD_GAUGES';
export const LOADING_GAUGES = 'LOADING_GAUGES';
export const ERROR_GAUGES = 'ERROR_GAUGES';

export const loadGauges = () => async dispatch => {
  dispatch({ type: LOADING_GAUGES });
  try {
    let { gauges } = await apiCall('gauges');
    dispatch({
      type: LOAD_GAUGES,
      gauges: gauges,
    });
  } catch (e) {
    dispatch({ type: ERROR_GAUGES, error: e });
  }
};
