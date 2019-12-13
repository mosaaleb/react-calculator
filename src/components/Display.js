// TODO: cached operations acts like queue with max 3 elements

/* eslint-disable max-classes-per-file */
import React from 'react';
import propTypes from 'prop-types';
import CachedOperations from './CachedOperations';
import CurrentOperation from './CurrentOperation';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const cachedOperations = [];
    const { expression, result } = this.props;
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
  result: '0'
};

Display.propTypes = {
  expression: propTypes.string,
  result: propTypes.string
};

export default Display;
