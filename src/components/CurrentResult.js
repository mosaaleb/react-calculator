import React from 'react';
import propTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class CurrentResult extends React.Component {
  render() {
    const { result, operation } = this.props;
    return (
      <div className="current table result-row">
        <p className="operation">{operation}</p>
        <p className="result current-result">{result}</p>
      </div>
    );
  }
}


CurrentResult.defaultProps = {
  operation: '',
  result: '0'
};

CurrentResult.propTypes = {
  operation: propTypes.string,
  result: propTypes.string
};


export default CurrentResult;
