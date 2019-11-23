import React from 'react';
import propTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class CurrentResult extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div className="current table result-row">
        <p className="operation">23 * 322</p>
        <p className="result current-result">{result}</p>
      </div>
    );
  }
}


CurrentResult.defaultProps = {
  result: '234'
};

CurrentResult.propTypes = {
  result: propTypes.string
};


export default CurrentResult;
