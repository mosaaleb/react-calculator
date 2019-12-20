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

Display.propTypes = {
  result: PropTypes.number.isRequired,
  expression: PropTypes.string.isRequired,
  cachedOperations: PropTypes.arrayOf(
    PropTypes.shape({
      result: PropTypes.number,
      expression: PropTypes.string
    })
  ).isRequired
};

export default Display;
