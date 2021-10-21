import { FC } from "react";
import classNames from "classnames";
import "./Key.css";

export interface KeyProps {
  text: string;
  row: number;
  column: number;
  classes?: string;
  span?: boolean;
  func: () => void;
}

const Key: FC<KeyProps> = ({ text, row, column, classes, span, func }) => {
  return (
    <button
      className={classNames(
        "key",
        `gr${row}`,
        `gc${column}${span ? "-span" : ""}`,
        classes
      )}
      onClick={func}
    >
      {text}
    </button>
  );
};

export default Key;
