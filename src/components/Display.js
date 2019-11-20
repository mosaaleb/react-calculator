import React from 'react';
import propTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div>
        {result}
      </div>
    );
  }
}

Display.propTypes = {
  result: propTypes.string.isRequired
};

export default Display;
