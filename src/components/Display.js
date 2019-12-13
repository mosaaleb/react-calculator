// TODO: cached operations acts like queue with max 3 elements

/* eslint-disable max-classes-per-file */
import React from 'react';
import PropTypes from 'prop-types';
import CachedOperations from './CachedOperations';
import CurrentOperation from './CurrentOperation';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { result, expression, cachedOperations } = this.props;
    return (
      <div className="display">
        <CachedOperations cachedOperations={cachedOperations} />
        <CurrentOperation result={result} expression={expression} />
      </div>
    );
  }
}

Display.defaultProps = {
  expression: '',
  result: 0
};

Display.propTypes = {
  cachedOperations: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string,
      result: PropTypes.number
    })
  ).isRequired,
  expression: PropTypes.string,
  result: PropTypes.number
};

export default Display;
