import React, { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.buttonClicked = (e) => {
      const clickedButton = e.target.innerText;
      const outcome = calculate(this.state, clickedButton);
      this.setState(outcome);
    };
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container-cover">
        <div className="page-info">Lets do some math!</div>
        <div className="container-grid">
          <div className="output">
            <div>{total}</div>
            {operation}
            {next}
          </div>
          <button type="button" onClick={this.buttonClicked}>
            AC
          </button>
          <button type="button" onClick={this.buttonClicked}>
            +/-
          </button>
          <button type="button" onClick={this.buttonClicked}>
            %
          </button>
          <button
            type="button"
            className="operand"
            onClick={this.buttonClicked}
          >
            ÷
          </button>
          <button type="button" onClick={this.buttonClicked}>
            7
          </button>
          <button type="button" onClick={this.buttonClicked}>
            8
          </button>
          <button type="button" onClick={this.buttonClicked}>
            9
          </button>
          <button
            type="button"
            className="operand"
            onClick={this.buttonClicked}
          >
            x
          </button>
          <button type="button" onClick={this.buttonClicked}>
            4
          </button>
          <button type="button" onClick={this.buttonClicked}>
            5
          </button>
          <button type="button" onClick={this.buttonClicked}>
            6
          </button>
          <button
            type="button"
            className="operand"
            onClick={this.buttonClicked}
          >
            -
          </button>
          <button type="button" onClick={this.buttonClicked}>
            1
          </button>
          <button type="button" onClick={this.buttonClicked}>
            2
          </button>
          <button type="button" onClick={this.buttonClicked}>
            3
          </button>
          <button
            type="button"
            className="operand"
            onClick={this.buttonClicked}
          >
            +
          </button>
          <button
            type="submit"
            className="span-two"
            onClick={this.buttonClicked}
          >
            0
          </button>
          <button type="button" onClick={this.buttonClicked}>
            .
          </button>
          <button
            type="button"
            className="operand"
            onClick={this.buttonClicked}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
