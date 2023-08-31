/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes/router";
import "./index.css";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      {PUBLIC_ROUTES.flatMap((value) => {
        return <Route path={value.path} element={value.element} />;
      })}
      {PRIVATE_ROUTES.flatMap((value) => {
        return <Route path={value.path} element={value.element} />;
      })}
    </Router>
  ),
  root!
);
