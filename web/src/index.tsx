/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes/router";
import { AdminContextProvider } from "./context/AdminContext";
import { ClinicContextProvider } from "./context/ClinicContext";
import "./index.css";
import { PersonContextProvider } from "./context/PersonContext";

const root = document.getElementById("root");

render(
  () => (
    <AdminContextProvider>
      <ClinicContextProvider>
        <PersonContextProvider>
          <Router>
            {PUBLIC_ROUTES.flatMap((value) => {
              return <Route path={value.path} element={value.element} />;
            })}
            {PRIVATE_ROUTES.flatMap((value) => {
              return <Route path={value.path} element={value.element} />;
            })}
          </Router>
        </PersonContextProvider>
      </ClinicContextProvider>
    </AdminContextProvider>
  ),
  root!
);
