import { apiCall } from '../../utils/apicall';

export const LOAD_ORGS = 'LOAD_ORGS';
export const LIKE_ORG = 'LIKE_ORG';
export const LOADING_ORGS = 'LOADING_ORGS';
export const ERROR_ORGS = 'ERROR_ORGS';

export const loadOrgs = () => async dispatch => {
  dispatch({ type: LOADING_ORGS });
  try {
    const orgs = await apiCall('organizations');
    dispatch({
      type: LOAD_ORGS,
      organizations: orgs.organizations,
    });
  } catch (err) {
    dispatch({ type: ERROR_ORGS, error: err });
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
