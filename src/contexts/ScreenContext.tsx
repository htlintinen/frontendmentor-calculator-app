import { createContext } from "react";

interface IScreenContext {
  screenValue: string;
  setScreenValue?: (val: string) => void;
}

const defaultState = {
  screenValue: "",
};

const ScreenContext = createContext<IScreenContext>(defaultState);

export default ScreenContext;
