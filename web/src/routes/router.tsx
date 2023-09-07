import { JSX, lazy } from "solid-js";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Test = lazy(() => import("../pages/Dashboard/Test"));
const Tests = lazy(() => import("../pages/Tests"));
const Mbti = lazy(() => import("../pages/Tests/Mbti"));
const Life = lazy(() => import("../pages/Tests/Life"));
const LoveLanguage = lazy(() => import("../pages/Tests/LoveLanguage"));
const SelfKnowledge = lazy(() => import("../pages/Tests/SelfKnowledge"));

const Global = lazy(() => import("../pages/Admin/Global"));
const GlobalDashboard = lazy(() => import("../pages/Admin/Global/Dashboard"));
const GlobalClinic = lazy(
  () => import("../pages/Admin/Global/Dashboard/Clinic")
);
const GlobalPerson = lazy(
  () => import("../pages/Admin/Global/Dashboard/Person")
);
const GlobalTest = lazy(() => import("../pages/Admin/Global/Dashboard/Test"));
const Clinic = lazy(() => import("../pages/Admin/Clinic"));
const ClinicDashboard = lazy(() => import("../pages/Admin/Clinic/Dashboard"));
const ClinicPerson = lazy(
  () => import("../pages/Admin/Clinic/Dashboard/Person")
);
const ClinicTest = lazy(() => import("../pages/Admin/Clinic/Dashboard/Test"));

type Route = {
  path: string;
  element: JSX.Element;
};

export const PRIVATE_ROUTES: Route[] = [
  { path: "/admin/global", element: <Global /> },
  { path: "/admin/global/dashboard", element: <GlobalDashboard /> },
  { path: "/admin/global/dashboard/test", element: <GlobalTest /> },
  { path: "/admin/global/dashboard/person", element: <GlobalPerson /> },
  { path: "/admin/global/dashboard/test/:test_id", element: <></> },
  { path: "/admin/global/dashboard/person/:person_id", element: <></> },
  { path: "/admin/global/dashboard/clinic", element: <GlobalClinic /> },
  { path: "/admin/global/dashboard/clinic/:clinic_id", element: <></> },
  { path: "/admin/clinic", element: <Clinic /> },
  { path: "/admin/clinic/:id/dashboard", element: <ClinicDashboard /> },
  { path: "/admin/clinic/:id/dashboard/test", element: <ClinicTest /> },
  { path: "/admin/clinic/:id/dashboard/person", element: <ClinicPerson /> },
  { path: "/admin/clinic/:id/dashboard/test/:test_id", element: <></> },
  { path: "/admin/clinic/:id/dashboard/person/:person_id", element: <></> },
];

export const PUBLIC_ROUTES: Route[] = [
  { path: "/", element: <Home /> },
  { path: "/admin", element: <Admin /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/test", element: <Test /> },
  { path: "/dashboard/test/:id", element: <></> },
  { path: "/tests", element: <Tests /> },
  { path: "/tests/mbti", element: <Mbti /> },
  { path: "/tests/selfknowledge", element: <SelfKnowledge /> },
  { path: "/tests/life", element: <Life /> },
  { path: "/tests/lovelanguage", element: <LoveLanguage /> },
];
