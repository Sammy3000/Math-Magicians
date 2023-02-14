import './calculator.css';
import Card from './card';

const Calculator = () => (
  <Card>
    <div className="container-grid">
      <div className="output">
        <div className="previousOperand">0</div>
        <div className="currentOperand" />
      </div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="operand">
        ÷
      </button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="operand">
        x
      </button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="operand">
        -
      </button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="operand">
        +
      </button>
      <button type="button" className="span-two">
        0
      </button>
      <button type="button">.</button>
      <button type="button" className="operand">
        =
      </button>
    </div>
  </Card>
);

export default Calculator;
