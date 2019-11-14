import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { value } = this.props;
    return <button>{value}</button>
  }
}

export default Button;
