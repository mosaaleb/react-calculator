import './Calculator.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="App">
        <Display result="0" />
        <ButtonPanel />
      </div>
    );
  }
}

export default Calculator;
