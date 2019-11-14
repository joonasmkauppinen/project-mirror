import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Snackbar from '../Snackbar';

const LoadingIndicator = ({ loading, error, children }) => {
  return (
    <div>
      {possibleLoadingMessage(loading)}
      {possibleErrorMessage(error)}
      {children}
    </div>
  );
};

// TODO: Replace with loading spinner/something
const possibleLoadingMessage = loading => {
  if (loading) {
    return (
      <div>
        <Text>LÖÄDING</Text>
      </div>
    );
  }
};

// TODO: Replace with actual error message/toast/snackbar
const possibleErrorMessage = error => {
  if (error) {
    return <Snackbar type="error" length={3000} message={'ERRÖRR'} />;
  }
};

LoadingIndicator.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LoadingIndicator;
