import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { value, wide, color } = this.props;
    const classNames = `key-button ${wide === 1 ? 'double-size' : ''} ${color === 'black' ? 'button-black' : 'button-orange'}`;

    return <button type="button" className={classNames}>{value}</button>;
  }
}

Button.defaultProps = {
  color: 'orange'
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.number.isRequired
};

export default Button;
