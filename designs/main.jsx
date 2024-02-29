import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'

import { Provider } from "react-redux";
import { mainStore } from "./redux/index";

import { ConnexionTokenContextProvider } from "./context/ConnexionTokenContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <ConnexionTokenContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ConnexionTokenContextProvider>
    </Provider>
  </React.StrictMode>
);
