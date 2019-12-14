// TODO: cached operations acts like queue with max 3 elements

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

    this.handleRemoveChar = this.handleRemoveChar.bind(this);
    this.handleClearScreen = this.handleClearScreen.bind(this);
    this.handleResultCalculate = this.handleResultCalculate.bind(this);
    this.handleExpressionChange = this.handleExpressionChange.bind(this);
  }

  updateCachedOperations() {
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

  handleRemoveChar() {
    const { expression } = this.state;
    this.setState({
      expression: expression.slice(0, -1)
    });
  }

  handleClearScreen() {
    this.updateCachedOperations();
    this.clearCurrentOperation();
  }

  handleResultCalculate() {
    const { expression } = this.state;
    this.setState({ result: evaluate(expression.replace(/×/g, '*').replace(/÷/g, '/')) });
  }

  handleExpressionChange(value) {
    const { expression } = this.state;
    this.setState({
      expression: expression + value
    });
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
          onRemoveChar={this.handleRemoveChar}
          onClearScreen={this.handleClearScreen}
          onResultCalculate={this.handleResultCalculate}
          onExpressionChange={this.handleExpressionChange}
        />
      </div>
    );
  }
}

export default Calculator;
