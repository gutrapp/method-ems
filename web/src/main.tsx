import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {PRIVATE_ROUTES.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
        {PUBLIC_ROUTES.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
      <Route path="*" />
    </BrowserRouter>
  </React.StrictMode>
);
