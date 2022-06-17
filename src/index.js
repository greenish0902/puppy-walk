import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// components
import Meta from "./Meta";
import App from "./App";

// styling
import { Reset } from "styled-reset"; // reset all styles; GloabalStyle 보다 먼저 적용되어야 함
import GlobalStyle from "./GlobalStyle";
import "./assets/scss/fonts.scss"; // import fonts
import "./assets/scss/palette.scss"; // import root color settings

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <Meta />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
