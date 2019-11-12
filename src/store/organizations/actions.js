import { apiCall } from '../../utils/apicall';

export const STORE_ORGS = 'STORE_ORGS';
export const LIKE_ORG = 'LIKE_ORG';
export const START_LOADING = 'START_LOADING';
export const RECORD_ERROR = 'RECORD_ERROR';

export const loadOrgs = () => async dispatch => {
  dispatch({ type: START_LOADING });
  try {
    const orgs = await apiCall('organizations');
    dispatch({
      type: STORE_ORGS,
      organizations: orgs.organizations,
    });
  } catch (err) {
    dispatch({ type: RECORD_ERROR });
  }
};

export const likeOrganization = org => async dispatch => {
  const params = { organization_id: org.id };
  const res = await apiCall('organizations-like', params);
  console.log(res);
  dispatch({
    type: LIKE_ORG,
    org: res,
  });
};
