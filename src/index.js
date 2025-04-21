import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { StarwarsProvider } from "./context/StarwarsProvider";

ReactDOM.render(
  <React.StrictMode>
    <StarwarsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StarwarsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
