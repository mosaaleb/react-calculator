import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleRemoveChar() {
    const { onRemoveChar } = this.props;
    onRemoveChar();
  }

  handleClearScreen() {
    const { onClearScreen } = this.props;
    onClearScreen();
  }

  handleResultCalculate() {
    const { onResultCalculate } = this.props;
    onResultCalculate();
  }

  handleExpressionChange(btnValue) {
    const { onExpressionChange } = this.props;
    onExpressionChange(btnValue);
  }

  handleClick(e) {
    if (e.target.value === '=') {
      this.handleResultCalculate();
    } else if (e.target.value === 'AC') {
      this.handleClearScreen();
    } else if (e.target.value === '←') {
      this.handleRemoveChar();
    } else {
      this.handleExpressionChange(e.target.value);
    }
  }

  render() {
    const { value, wide } = this.props;
    const classNames = `key-button ${wide === 1 ? 'double-size' : ''} button-black`;

    return (
      <button type="button" value={value} className={classNames} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  wide: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onRemoveChar: PropTypes.func.isRequired,
  onClearScreen: PropTypes.func.isRequired,
  onResultCalculate: PropTypes.func.isRequired,
  onExpressionChange: PropTypes.func.isRequired
};

export default Button;
