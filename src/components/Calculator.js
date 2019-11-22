import '../styles/Calculator.scss';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default Calculator;
