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
      expression: '',
      result: '0'
    };

    this.handleExpressionChange = this.handleExpressionChange.bind(this);
    this.handleResultCalculate = this.handleResultCalculate.bind(this);
  }

  handleExpressionChange(value) {
    const { expression } = this.state;
    this.setState({
      expression: expression + value
    });
  }

  handleResultCalculate() {
    const { expression } = this.state;
    this.setState({ result: evaluate(expression.replace(/×/g, '*').replace(/÷/g, '/')) });
  }

  render() {
    const { expression, result } = this.state;
    return (
      <div className="Calculator">
        <Display
          expression={expression}
          result={result}
        />
        <ButtonPanel
          onExpressionChange={this.handleExpressionChange}
          onResultCalculate={this.handleResultCalculate}
        />
      </div>
    );
  }
}

export default Calculator;
