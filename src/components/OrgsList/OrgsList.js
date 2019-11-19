import React from 'react';
import styles from './OrgsList.module.scss';
import PropTypes from 'prop-types';
import Text from '../Text';
import IconButton from '../IconButton';
import LoadingIndicator from '../LoadingIndicator';
import Subheader from '../Subheader';

// eslint-disable-next-line no-unused-vars
const OrgsList = ({ organizations, loading, error, likeOrg }) => {
  return (
    <>
      <Subheader>Organizations</Subheader>
      <LoadingIndicator loading={false} error={error}>
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
  error: PropTypes.string,
  likeOrg: PropTypes.func,
};

export default OrgsList;
