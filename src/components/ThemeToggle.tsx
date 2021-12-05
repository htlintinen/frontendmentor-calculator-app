import { FC } from "react";
import "./ThemeToggle.css";

export enum Theme {
  Theme1 = 1,
  Theme2 = 2,
  Theme3 = 3,
}

export interface ThemeToggleProps {
  theme: Theme;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ theme }) => {
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
            <div className={theme === Theme.Theme1 ? "selected" : ""}></div>
          </td>
          <td className="td2">
            <div className={theme === Theme.Theme2 ? "selected" : ""}></div>
          </td>
          <td className="td3">
            <div className={theme === Theme.Theme3 ? "selected" : ""}></div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ThemeToggle;
