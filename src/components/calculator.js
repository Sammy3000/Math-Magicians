/*eslint-disable*/
import React, { useState } from "react";
import "./calculator.css";
import calculate from "../logic/calculate";
import Card from "./card";

const Calculator = () => {
  const [currentState, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { total, next, operation } = currentState;

  const buttonClicked = (e) => {
    const clickedButton = e.target.innerText;
    const result = calculate(currentState, clickedButton);
    setState(result);
  };
  return (
    <Card>
      <div className="container-grid">
        <div className="output">
          {total}
          {""}
          {operation}
          {""}
          {next}
        </div>
        <button type="button" onClick={buttonClicked}>
          AC
        </button>
        <button type="button" onClick={buttonClicked}>
          +/-
        </button>
        <button type="button" onClick={buttonClicked}>
          %
        </button>
        <button type="button" className="operand" onClick={buttonClicked}>
          ÷
        </button>
        <button type="button" onClick={buttonClicked}>
          7
        </button>
        <button type="button" onClick={buttonClicked}>
          8
        </button>
        <button type="button" onClick={buttonClicked}>
          9
        </button>
        <button type="button" className="operand" onClick={buttonClicked}>
          x
        </button>
        <button type="button" onClick={buttonClicked}>
          4
        </button>
        <button type="button" onClick={buttonClicked}>
          5
        </button>
        <button type="button" onClick={buttonClicked}>
          6
        </button>
        <button type="button" className="operand" onClick={buttonClicked}>
          -
        </button>
        <button type="button" onClick={buttonClicked}>
          1
        </button>
        <button type="button" onClick={buttonClicked}>
          2
        </button>
        <button type="button" onClick={buttonClicked}>
          3
        </button>
        <button type="button" className="operand" onClick={buttonClicked}>
          +
        </button>
        <button type="submit" className="span-two" onClick={buttonClicked}>
          0
        </button>
        <button type="button" onClick={buttonClicked}>
          .
        </button>
        <button type="button" className="operand" onClick={buttonClicked}>
          =
        </button>
      </div>
    </Card>
  );
};

export default Calculator;
