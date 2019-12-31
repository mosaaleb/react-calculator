import '../styles/Calculator.scss';
import React from 'react';
import Display from './Display';
import Message from './Message';
import ButtonPanel from './ButtonPanel';
import Expression from '../logic/Expression';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      message: '',
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
      expression: expression.slice(0, -1).trim()
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
      this.setState({ result: Expression.evaluate(expression) });
      this.setState({ message: '' });
    } catch (error) {
      this.setState({ message: error.message });
    }
  }

  handleExpressionChange(value) {
    const { expression } = this.state;
    const clickedValue = (/[\d.]$/.test(value) || /(\s[+\-×÷]\s)$/.test(expression)) ? value : ` ${value} `;
    this.setState({
      expression: expression + clickedValue
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
            result={result}
            expression={expression}
            cachedOperations={cachedOperations}
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
