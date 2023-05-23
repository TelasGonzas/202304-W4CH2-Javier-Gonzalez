import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./components/app/App";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
