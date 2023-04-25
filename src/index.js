import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FireAuthProvider } from "./FireAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FireAuthProvider>
      <App />
    </FireAuthProvider>
  </React.StrictMode>
);
