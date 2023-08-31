import { JSX } from "solid-js";
import Home from "../pages/Home";
import Login from "../pages/Login";

type Route = {
  path: string;
  element: JSX.Element;
};

export const PRIVATE_ROUTES: Route[] = [
  { path: "/admin/global", element: <></> },
  { path: "/admin/global/dashboard", element: <></> },
  { path: "/admin/global/dashboard/test", element: <></> },
  { path: "/admin/global/dashboard/person", element: <></> },
  { path: "/admin/global/dashboard/test/:test_id", element: <></> },
  { path: "/admin/global/dashboard/person/:person_id", element: <></> },
  { path: "/admin/global/dashboard/clinic", element: <></> },
  { path: "/admin/global/dashboard/clinic/:clinic_id", element: <></> },
  { path: "/admin/clinic", element: <></> },
  { path: "/admin/clinic/:id/dashboard", element: <></> },
  { path: "/admin/clinic/:id/dashboard/test", element: <></> },
  { path: "/admin/clinic/:id/dashboard/person", element: <></> },
  { path: "/admin/clinic/:id/dashboard/test/:test_id", element: <></> },
  { path: "/admin/clinic/:id/dashboard/person/:person_id", element: <></> },
];

export const PUBLIC_ROUTES: Route[] = [
  { path: "/", element: <Home /> },
  { path: "/admin", element: <></> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <></> },
  { path: "/dashboard/test", element: <></> },
  { path: "/dashboard/test/:id", element: <></> },
  { path: "/tests/mbti", element: <></> },
  { path: "/tests/selfknowledge", element: <></> },
  { path: "/tests/life", element: <></> },
  { path: "/tests/lovelanguage", element: <></> },
];
