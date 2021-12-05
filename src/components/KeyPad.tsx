import { FC, useContext } from "react";
import ScreenContext from "../contexts/ScreenContext";
import Key, { KeyProps } from "./Key";
import "./KeyPad.css";

type parseCalcReturnType = {
  num1: number;
  num2: number;
  operation: operationType;
};

type operationType = "+" | "-" | "x" | "/" | undefined;

const parseCalc = (exp: string): parseCalcReturnType => {
  const [num1, num2] = exp.split(/\+|-|x|\//);
  return {
    num1: parseFloat(num1),
    num2: parseFloat(num2),
    operation: exp[exp.search(/\+|-|x|\//)] as operationType,
  };
};

const calculate = (
  num1: number,
  num2: number,
  operation: operationType
): string => {
  switch (operation) {
    case "+":
      return (num1 + num2).toString(10);
    case "-":
      return (num1 - num2).toString(10);
    case "x":
      return (num1 * num2).toString(10);
    case "/":
      return (num1 / num2).toString(10);
  }
  return "";
};

const KeyPad: FC = () => {
  const { screenValue, setScreenValue } = useContext(ScreenContext);

  const keys: Array<KeyProps> = [
    { text: "7", row: 1, column: 1, func: () => enter(7) },
    { text: "8", row: 1, column: 2, func: () => enter(8) },
    { text: "9", row: 1, column: 3, func: () => enter(9) },
    { text: "DEL", row: 1, column: 4, classes: "key-func", func: () => del() },
    { text: "4", row: 2, column: 1, func: () => enter(4) },
    { text: "5", row: 2, column: 2, func: () => enter(5) },
    { text: "6", row: 2, column: 3, func: () => enter(6) },
    { text: "+", row: 2, column: 4, func: () => calc("+") },
    { text: "1", row: 3, column: 1, func: () => enter(1) },
    { text: "2", row: 3, column: 2, func: () => enter(2) },
    { text: "3", row: 3, column: 3, func: () => enter(3) },
    { text: "-", row: 3, column: 4, func: () => calc("-") },
    { text: ".", row: 4, column: 1, func: () => dot() },
    { text: "0", row: 4, column: 2, func: () => enter(0) },
    { text: "/", row: 4, column: 3, func: () => calc("/") },
    { text: "x", row: 4, column: 4, func: () => calc("x") },
    {
      text: "RESET",
      row: 5,
      column: 1,
      classes: "key-func",
      span: true,
      func: () => reset(),
    },
    {
      text: "=",
      row: 5,
      column: 3,
      classes: "key-equals",
      span: true,
      func: () => equals(),
    },
  ];

  const enter = (value: number | string): void => {
    if (setScreenValue) {
      setScreenValue(`${screenValue}${value}`);
    }
  };

  const del = (): void => {
    if (setScreenValue) {
      setScreenValue(screenValue.slice(0, -1));
    }
  };
  /*
  const add = (): void => {
    const { num1, num2, operation } = parseCalc(screenValue);
    if (num1 && num2 && operation && setScreenValue) {
      setScreenValue(`${calculate(num1, num2, operation)}${operation}`);
    } else if (setScreenValue) {
      setScreenValue(`${screenValue}${operation}`);
    }
  };
*/
  const calc = (btn: string): void => {
    const { num1, num2, operation } = parseCalc(screenValue);
    if (!isNaN(num1) && !isNaN(num2) && operation && setScreenValue) {
      setScreenValue(`${calculate(num1, num2, operation)}${btn}`);
    } else if (setScreenValue) {
      setScreenValue(`${screenValue}${btn}`);
    }
  };
  /*
  const subtract = (): void => {
    console.log("-");
  };
*/
  const dot = (): void => {
    console.log(".");
  };
  /*
  const divide = (): void => {
    console.log("/");
  };
*/
  /*
  const multiply = (): void => {
    console.log("x");
  };
*/
  const reset = (): void => {
    if (setScreenValue) {
      setScreenValue("");
    }
  };

  const equals = (): void => {
    const { num1, num2, operation } = parseCalc(screenValue);
    if (!isNaN(num1) && !isNaN(num2) && operation && setScreenValue) {
      setScreenValue(calculate(num1, num2, operation));
    }
  };

  return (
    <div className="keypad">
      {keys.map((calckey) => (
        <Key
          key={calckey.text}
          text={calckey.text}
          func={calckey.func}
          row={calckey.row}
          column={calckey.column}
          classes={calckey.classes}
          span={calckey.span}
        />
      ))}
    </div>
  );
};

export default KeyPad;
