/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class CachedOperations extends React.Component {
  render() {
    const { cachedOperations } = this.props;

    const previousResultsRow = cachedOperations.map((result) => (
      <div className="result-row table" key={result}>
        <p className="expression">{result.expression}</p>
        <p className="result">{result.result}</p>
      </div>
    ));

    return (
      <div className="previous">
        {previousResultsRow}
      </div>
    );
  }
}

CachedOperations.propTypes = {
  cachedOperations: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.string,
      result: PropTypes.string
    })
  ).isRequired
};

export default CachedOperations;
