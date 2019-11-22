import '../styles/Button.scss';
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { value } = this.props;
    return <button type="button">{value}</button>;
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired
};

export default Button;
