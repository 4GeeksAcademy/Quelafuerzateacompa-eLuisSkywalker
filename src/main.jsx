import React from "react";
import ReactDOM from "react-dom/client"; // Cambia a react-dom/client
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { StarwarsProvider } from "./context/StarwarsProvider";
import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <StarwarsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StarwarsProvider>
);