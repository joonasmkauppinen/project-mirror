import React from 'react';
import styles from './OrgsList.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Subheader from '../Subheader';
import Card from '../Card';
import Icons from '../../assets/Icons';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const OrgsList = ({ organizations, loading, error, likeOrg }) => {
  const history = useHistory();
  const handleOrgClick = org => {
    history.push({
      pathname: `/orgs/${org.id}`,
      state: org,
    });
  };
  // TODO: use organization image
  return (
    <>
      <Subheader>{t(D.DISCOVER.organizations)}</Subheader>
      <LoadingIndicator loading={false} error={error}>
        <div className={styles.orgsContainer}>
          {organizations.map(org => (
            <div
              key={org.id}
              className={styles.org}
              onClick={() => handleOrgClick(org)}
            >
              <Card superClass={styles.orgCard}>
                <div className={styles.cardContent}>
                  <Icons.peili />
                  <p className={styles.cardText}>{org.name}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
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
