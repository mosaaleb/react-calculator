import React from 'react';
import propTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class CurrentOperation extends React.Component {
  render() {
    const { result, expression } = this.props;
    return (
      <div className="current">
        <div className="result-row table">
          <p className="expression">{expression}</p>
          <p className="result current-result">{result}</p>
        </div>
      </div>
    );
  }
}

CurrentOperation.propTypes = {
  expression: propTypes.string.isRequired,
  result: propTypes.number.isRequired
};

export default CurrentOperation;
