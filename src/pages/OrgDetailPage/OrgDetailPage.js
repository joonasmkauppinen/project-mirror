import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OrgDetailPage.module.scss';
import Toolbar from '../../components/Toolbar';
import PageContainer from '../../hoc/PageContainer';
import Subheader from '../../components/Subheader';

const OrgDetailPage = () => {
  const history = useHistory();
  const location = useLocation();
  const handleOnBackClick = () => history.goBack();
  const org = location.state;
  return (
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={org.name}
      />
      {org.image && (
        <img src={org.image} alt="organization" className={styles.orgImage} />
      )}
      <div className={styles.orgPageContent}>
        <Subheader>Telephone: {org.tel}</Subheader>
        <Subheader>
          <a href={org.www}>Link</a>
        </Subheader>
      </div>
    </PageContainer>
  );
};

OrgDetailPage.propTypes = {
  org: PropTypes.object,
};

export default OrgDetailPage;
