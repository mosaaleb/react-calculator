import '../styles/Calculator.scss';
import { evaluate } from 'mathjs';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '0',
      result: '0'
    };

    this.expressionChange = this.expressionChange.bind(this);
    this.resultCalculate = this.resultCalculate.bind(this);
  }

  expressionChange(expression) {
    this.setState({ expression });
  }

  resultCalculate() {
    this.setState({ result: evaluate(this.expression) });
  }

  render() {
    const { expression, result } = this.state;
    return (
      <div className="Calculator">
        <Display expression={expression} result={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default Calculator;
