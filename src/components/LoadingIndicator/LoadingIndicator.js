import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '../Snackbar';
import LoadingSpinner from '../LoadingSpinner';

const LoadingIndicator = ({ loading, error, children }) => {
  return (
    <div>
      {possibleLoadingMessage(loading)}
      {possibleErrorMessage(error)}
      {children}
    </div>
  );
};

const possibleLoadingMessage = loading => {
  if (loading) {
    return <LoadingSpinner />;
  }
};

const possibleErrorMessage = error => {
  if (error) {
    return <Snackbar type="error" length={3} message={error} />;
  }
};

LoadingIndicator.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LoadingIndicator;
