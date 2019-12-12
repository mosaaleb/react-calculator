// TODO: cached operations acts like queue with max 3 elements

/* eslint-disable max-classes-per-file */
import React from 'react';
import propTypes from 'prop-types';
import CachedOperations from './CachedOperations';
import CurrentOperation from './CurrentOperation';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const cachedOperations = [
      {
        expression: '1 × 2 × 3',
        result: '6'
      },
      {
        expression: '7 + 7 × 3',
        result: '28'
      },
      {
        expression: '3 × -5 + 5',
        result: '-10'
      }
    ];
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
  expression: '3 × 6 + 12',
  result: '30'
};

Display.propTypes = {
  expression: propTypes.string,
  result: propTypes.string
};

export default Display;
// ×
