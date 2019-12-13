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
      result: 0,
      expression: '',
      cachedOperations: []
    };

    this.handleExpressionChange = this.handleExpressionChange.bind(this);
    this.handleResultCalculate = this.handleResultCalculate.bind(this);
  }

  appendToCachedOperations() {
    const { result, expression, cachedOperations } = this.state;
    this.setState({
      cachedOperations: cachedOperations.concat({ expression, result })
    });
  }

  clearCurrentOperation() {
    this.setState({
      result: 0,
      expression: ''
    });
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
    this.appendToCachedOperations();
    this.clearCurrentOperation();
  }

  render() {
    const { result, expression, cachedOperations } = this.state;
    return (
      <div className="Calculator">
        <Display
          cachedOperations={cachedOperations}
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
