import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonPanel extends React.Component {
  render() {
    const buttons = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '=']
    ];

    const calcButtons = buttons.map((row, index) => <div key="">{ row.map((button) => <Button value={button}/>) }</div>);

    return (
      <div>
        {calcButtons}
      </div>
    );
  }
}

export default ButtonPanel;
