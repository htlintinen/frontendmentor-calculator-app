import { FC } from "react";
import "./ThemeToggle.css";

export enum Themes {
  Theme1 = 1,
  Theme2 = 2,
  Theme3 = 3,
}

export interface ThemeToggleProps {
  theme: Themes;
}

const ThemeToggle: FC<ThemeToggleProps> = () => {
  return (
    <div className="themetoggle">
      <table>
        <tr className="firstrow">
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr className="secondrow">
          <td className="td1">
            <div className="selected"></div>
          </td>
          <td className="td2">
            <div></div>
          </td>
          <td className="td3">
            <div></div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ThemeToggle;
