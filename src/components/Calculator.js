import '../styles/Calculator.scss';
import { evaluate } from 'mathjs';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Message from './Message';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      expression: '',
      cachedOperations: [],
      message: ''
    };

    this.handleRemoveChar = this.handleRemoveChar.bind(this);
    this.handleClearScreen = this.handleClearScreen.bind(this);
    this.handleResultCalculate = this.handleResultCalculate.bind(this);
    this.handleExpressionChange = this.handleExpressionChange.bind(this);
  }

  updateCachedOperations() {
    const { result, expression, cachedOperations } = this.state;
    if (cachedOperations.length > 2) {
      this.setState({
        cachedOperations: cachedOperations.shift()
      });
    }
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
    const { message } = this.state;
    if (message === '') {
      this.updateCachedOperations();
      this.clearCurrentOperation();
    }
  }

  handleResultCalculate() {
    const { expression } = this.state;
    try {
      this.setState({ result: evaluate(expression.replace(/×/g, '*').replace(/÷/g, '/')) });
      this.setState({ message: '' });
    } catch (error) {
      this.setState({ message: 'Invalid opertion' });
    }
  }

  handleExpressionChange(value) {
    const { expression } = this.state;
    this.setState({
      expression: expression + value
    });
  }

  render() {
    const {
      result, expression, cachedOperations, message
    } = this.state;
    return (
      <>
        <Message message={message} show={message !== ''} />
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
      </>
    );
  }
}

export default Calculator;
