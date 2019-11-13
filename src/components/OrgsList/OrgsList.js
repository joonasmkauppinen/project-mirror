import React, { useEffect } from 'react';
import styles from './OrgsList.module.scss';
import PropTypes from 'prop-types';
import Text from '../Text';
import IconButton from '../IconButton';
import LoadingIndicator from '../LoadingIndicator';

const OrgsList = ({ organizations, loading, error, likeOrg, loadOrgs }) => {
  useEffect(() => {
    loadOrgs();
  }, [loadOrgs]);
  return (
    <>
      <h1>Organizations</h1>
      <LoadingIndicator loading={loading} error={error}>
        {organizations.map(org => (
          <div key={org.id}>
            <div className={styles.orgsContainer}>
              <Text>{org.name}</Text>
              <IconButton
                onClick={() => {
                  likeOrg(org);
                }}
                icon={'info'}
              />
            </div>
          </div>
        ))}
      </LoadingIndicator>
    </>
  );
};

OrgsList.propTypes = {
  organizations: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  likeOrg: PropTypes.func,
  loadOrgs: PropTypes.func,
};

export default OrgsList;
