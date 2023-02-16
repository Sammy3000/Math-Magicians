/*eslint-disable*/
import React, { Component } from "react";
import "./calculator.css";
import calculate from "../logic/calculate";
import Card from "./card";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.btnClicked = (e) => {
      const clickedBtn = e.target.innerText;
      const Result = calculate(this.state, clickedBtn);
      this.setState(Result);
    };
  }
  render() {
    const { total, operation, next } = this.state;
    <Card>
      <div className="container-grid">
        <div className="output">
          <div>{total}</div>
          <div className="previousOperand">{operation}</div>
          <div className="currentOperand">{next}</div>
        </div>
        <button type="button" onClick={this.btnClicked}>
          AC
        </button>
        <button type="button" onClick={this.btnClicked}>
          +/-
        </button>
        <button type="button" onClick={this.btnClicked}>
          %
        </button>
        <button type="button" className="operand" onClick={this.btnClicked}>
          ÷
        </button>
        <button type="button" onClick={this.btnClicked}>
          7
        </button>
        <button type="button" onClick={this.btnClicked}>
          8
        </button>
        <button type="button" onClick={this.btnClicked}>
          9
        </button>
        <button type="button" className="operand" onClick={this.btnClicked}>
          x
        </button>
        <button type="button" onClick={this.btnClicked}>
          4
        </button>
        <button type="button" onClick={this.btnClicked}>
          5
        </button>
        <button type="button" onClick={this.btnClicked}>
          6
        </button>
        <button type="button" className="operand" onClick={this.btnClicked}>
          -
        </button>
        <button type="button" onClick={this.btnClicked}>
          1
        </button>
        <button type="button" onClick={this.btnClicked}>
          2
        </button>
        <button type="button" onClick={this.btnClicked}>
          3
        </button>
        <button type="button" className="operand" onClick={this.btnClicked}>
          +
        </button>
        <button type="submit" className="span-two" onClick={this.btnClicked}>
          0
        </button>
        <button type="button" onClick={this.btnClicked}>
          .
        </button>
        <button type="button" className="operand" onClick={this.btnClicked}>
          =
        </button>
      </div>
    </Card>;
  }
}

export default Calculator;
