import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    const buttons = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '=']
    ];

    const calculatorButtons = buttons.map((row) => (
      <div key={row.toString()} className="button-row">
        { row.map((button) => <Button value={button} key={button} wide={button === '0' ? 1 : 0} color="black" />) }
      </div>
    ));

    return (
      <div>
        {calculatorButtons}
      </div>
    );
  }
}

export default ButtonPanel;
