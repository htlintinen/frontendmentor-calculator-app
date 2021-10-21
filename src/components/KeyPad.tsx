import { FC } from "react";
import Key, { KeyProps } from "./Key";
import "./KeyPad.css";

const enter = (value: number | string): void => {
  console.log(value);
};

const del = (): void => {
  console.log("del");
};

const add = (): void => {
  console.log("+");
};

const subtract = (): void => {
  console.log("-");
};

const dot = (): void => {
  console.log(".");
};

const divide = (): void => {
  console.log("/");
};

const multiply = (): void => {
  console.log("x");
};

const reset = (): void => {
  console.log("RESET");
};

const equals = (): void => {
  console.log("=");
};

const keys: Array<KeyProps> = [
  { text: "7", row: 1, column: 1, func: () => enter(7) },
  { text: "8", row: 1, column: 2, func: () => enter(8) },
  { text: "9", row: 1, column: 3, func: () => enter(9) },
  { text: "DEL", row: 1, column: 4, classes: "key-func", func: () => del() },
  { text: "4", row: 2, column: 1, func: () => enter(4) },
  { text: "5", row: 2, column: 2, func: () => enter(5) },
  { text: "6", row: 2, column: 3, func: () => enter(6) },
  { text: "+", row: 2, column: 4, func: () => add() },
  { text: "1", row: 3, column: 1, func: () => enter(1) },
  { text: "2", row: 3, column: 2, func: () => enter(2) },
  { text: "3", row: 3, column: 3, func: () => enter(3) },
  { text: "-", row: 3, column: 4, func: () => subtract() },
  { text: ".", row: 4, column: 1, func: () => dot() },
  { text: "0", row: 4, column: 2, func: () => enter(0) },
  { text: "/", row: 4, column: 3, func: () => divide() },
  { text: "x", row: 4, column: 4, func: () => multiply() },
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

const KeyPad: FC = () => {
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
