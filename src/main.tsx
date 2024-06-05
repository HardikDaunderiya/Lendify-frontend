import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Redux></Redux> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);