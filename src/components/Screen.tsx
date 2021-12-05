import { FC, useContext } from "react";
import ScreenContext from "../contexts/ScreenContext";
import "./Screen.css";

const Screen: FC = () => {
  const { screenValue } = useContext(ScreenContext);

  return (
    <div className="screen">
      <p>{screenValue}</p>
    </div>
  );
};

export default Screen;
