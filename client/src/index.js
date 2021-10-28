import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import {ModalContextProvider} from "./context/modalContext/ModalContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
