import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import Hello from "./Hello";
import i18n from "./i18n";

import "./styles.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Hello />
    </I18nextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
