import React from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class PreviousResults extends React.Component {
  render() {
    return (
      <div className="previous">
        <div className="table result-row">
          <p className="operation">23 * 322</p>
          <p className="result">40</p>
        </div>
        <div className="table result-row">
          <p className="operation">23 * 322</p>
          <p className="result">40</p>
        </div>
        <div className="table result-row">
          <p className="operation">23 * 322</p>
          <p className="result">40</p>
        </div>
      </div>
    );
  }
}

export default PreviousResults;
