import React from "react";
import ReactDOM from "react-dom/client";
import App_router from "./App";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={App_router} />;
  </React.StrictMode>
);

reportWebVitals();
