import React from 'react';
import PropTypes from 'prop-types';


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
  result: PropTypes.number.isRequired,
  expression: PropTypes.string.isRequired
};

export default CurrentOperation;
