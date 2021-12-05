import { FC, useState } from "react";
import ScreenContext from "../contexts/ScreenContext";

const ScreenContextProvider: FC = ({ children }) => {
  const [val, setVal] = useState("");

  const setScreenValue = (newVal: string) => {
    setVal(newVal);
  };

  return (
    <ScreenContext.Provider
      value={{ screenValue: val, setScreenValue: setScreenValue }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenContextProvider;
