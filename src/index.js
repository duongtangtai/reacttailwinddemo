import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
);

//npm install --save-dev @babel/plugin-proposal-private-property-in-object