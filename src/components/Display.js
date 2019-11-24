import React from 'react';
import propTypes from 'prop-types';
import PreviousResults from './PreviousResults';
import CurrentResult from './CurrentResult';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const previousResults = [];
    const { result, operation } = this.props;
    return (
      <div className="display">
        <PreviousResults previousResults={previousResults} />
        <CurrentResult result={result} operation={operation} />
      </div>
    );
  }
}

Display.defaultProps = {
  operation: '',
  result: '0'
};

Display.propTypes = {
  operation: propTypes.string,
  result: propTypes.string
};

export default Display;
