import { FC } from "react";
import "./App.css";
import ThemeToggle, { Theme } from "./components/ThemeToggle";
import Screen from "./components/Screen";
import KeyPad from "./components/KeyPad";
import ScreenContextProvider from "./providers/ScreenContextProvider";

const App: FC = () => {
  return (
    <ScreenContextProvider>
      <div className="app">
        <header className="App-header"></header>
        <div className="content">
          <div className="headingrow">
            <h1>calc</h1>
            <p className="theme-p">THEME</p>
            <ThemeToggle theme={Theme.Theme2} />
          </div>
          <Screen />
          <KeyPad />
        </div>
        <div className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/htlintinen">Heikki Lintinen</a>
          .
        </div>
      </div>
    </ScreenContextProvider>
  );
};

export default App;
