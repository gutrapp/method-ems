import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes/router";
import { ErrorPage } from "./pages/404";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {PUBLIC_ROUTES.map(({ element, path }) => (
          <Route path={path} element={element} />
        ))}
        {PRIVATE_ROUTES.map(({ element, path }) => (
          <Route path={path} element={element} />
        ))}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
