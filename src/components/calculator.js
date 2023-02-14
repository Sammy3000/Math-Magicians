/* eslint-disable */
import "./calculator.css";
import Card from "./card";
const Calculator = () => {
  return (
    <Card>
      <div className="container-grid">
        <div className="output">
          <div className="previousOperand">0</div>
          <div className="currentOperand"></div>
        </div>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="operand">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operand">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="operand">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="operand">+</button>
        <button className="span-two">0</button>
        <button>.</button>
        <button className="operand">=</button>
      </div>
    </Card>
  );
};

export default Calculator;
