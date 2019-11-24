/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class PreviousResults extends React.Component {
  render() {
    const { previousResults } = this.props;
    const previousResultsRow = previousResults.map((result) => (
      <div className="result-row" key={result}>
        <p className="operation">{result.operation}</p>
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

PreviousResults.propTypes = {
  previousResults: PropTypes.arrayOf(
    PropTypes.shape({
      opeartion: PropTypes.string,
      result: PropTypes.string
    })
  ).isRequired
};

export default PreviousResults;
