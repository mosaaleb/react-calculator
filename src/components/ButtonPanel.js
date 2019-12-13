import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    const { onResultCalculate, onExpressionChange } = this.props;
    const buttons = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '=']
    ];

    const calculatorButtons = buttons.map((row) => (
      <div key={row.toString()} className="button-row">
        { row.map((button) => (
          <Button
            key={button}
            value={button}
            wide={button === '0' ? 1 : 0}
            onResultCalculate={onResultCalculate}
            onExpressionChange={onExpressionChange}
          />
        ))}
      </div>
    ));

    return (
      <div>
        {calculatorButtons}
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  onResultCalculate: PropTypes.func.isRequired,
  onExpressionChange: PropTypes.func.isRequired
};

export default ButtonPanel;
