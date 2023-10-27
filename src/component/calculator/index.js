import React, { useState, Component } from 'react';
import './index.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
    };
  }

  handleButtonPress = (value) => {
    if (this.state.display === '0') {
      this.setState({
        display: value,
      });
    } else {
      this.setState((prevState) => ({
        display: prevState.display + value,
      }));
    }
  };

  clearDisplay = () => {
    this.setState({
      display: '0',
    });
  };

  calculateResult = () => {
    try {
      const result = eval(this.state.display);
      this.setState({
        display: result.toString(),
      });
    } catch (error) {
      this.setState({
        display: 'Error',
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button onClick={() => this.handleButtonPress('7')}>7</button>
          <button onClick={() => this.handleButtonPress('8')}>8</button>
          <button onClick={() => this.handleButtonPress('9')}>9</button>
          <button onClick={() => this.handleButtonPress('+')}>+</button>
          <button onClick={() => this.handleButtonPress('4')}>4</button>
          <button onClick={() => this.handleButtonPress('5')}>5</button>
          <button onClick={() => this.handleButtonPress('6')}>6</button>
          <button onClick={() => this.handleButtonPress('-')}>-</button>
          <button onClick={() => this.handleButtonPress('1')}>1</button>
          <button onClick={() => this.handleButtonPress('2')}>2</button>
          <button onClick={() => this.handleButtonPress('3')}>3</button>
          <button onClick={() => this.handleButtonPress('*')}>*</button>
          <button onClick={() => this.handleButtonPress('0')}>0</button>
          <button onClick={this.clearDisplay}>C</button>
          <button onClick={this.calculateResult}>=</button>
          <button onClick={() => this.handleButtonPress('%')}>%</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
