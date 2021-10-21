import { FC } from "react";
import "./Screen.css";

export interface ScreenProps {
  value: string | undefined;
}

const Screen: FC<ScreenProps> = ({ value }) => {
  return (
    <div className="screen">
      <p>{value}</p>
    </div>
  );
};

export default Screen;
