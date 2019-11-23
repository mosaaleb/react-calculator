import React from 'react';
import propTypes from 'prop-types';
import PreviousResults from './PreviousResults';
import CurrentResult from './CurrentResult';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div className="display">
        <PreviousResults />
        <CurrentResult result={result} />
      </div>
    );
  }
}

Display.defaultProps = {
  result: '234'
};

Display.propTypes = {
  result: propTypes.string
};

export default Display;
