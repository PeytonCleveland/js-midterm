class Calculator {
  constructor() {
    this.displayValue = "0";
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
  }

  inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = this;

    if (waitingForSecondOperand === true) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
  }

  inputDecimal(dot) {
    if (this.waitingForSecondOperand === true) return;

    if (!this.displayValue.includes(dot)) {
      this.displayValue += dot;
    }
  }

  handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = this;
    const inputValue = parseFloat(displayValue);

    if (operator && this.waitingForSecondOperand) {
      this.operator = nextOperator;
      return;
    }

    if (firstOperand == null) {
      this.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = this.performCalculation[operator](
        currentValue,
        inputValue
      );

      this.displayValue = String(result);
      this.firstOperand = result;
    }

    this.waitingForSecondOperand = true;
    this.operator = nextOperator;
  }

  updateDisplay() {
    const display = document.querySelector(".calculator-screen");
    display.value = this.displayValue;
  }

  clear() {
    this.displayValue = "0";
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
  }

  performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand,
  };
}

const calculator = new Calculator();

calculator.updateDisplay();

// TODO: Connect the calculator's input keys to its methods
