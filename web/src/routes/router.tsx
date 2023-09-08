import { Home } from "../pages/public/Home";
import { Login } from "../pages/public/Auth/Login";
import { Admin } from "../pages/public/Auth/Admin";
import { lazy } from "react";
import { Layout } from "../components/Layout";

const Dashboard = lazy(() => import("../pages/public/Dashboard"));
const Profile = lazy(() => import("../pages/public/Dashboard/Profile"));
const Test = lazy(() => import("../pages/public/Dashboard/Test"));
const TestId = lazy(() => import("../pages/public/Dashboard/TestId"));
const Tests = lazy(() => import("../pages/public/Tests"));
const Mbti = lazy(() => import("../pages/public/Tests"));
const Life = lazy(() => import("../pages/public/Tests"));
const SelfKnowledge = lazy(() => import("../pages/public/Tests"));
const LoveLanguage = lazy(() => import("../pages/public/Tests"));

const Global = lazy(() => import("../pages/private/Global"));
const GlobalDashboard = lazy(() => import("../pages/private/Global/Dashboard"));
const GlobalClinic = lazy(
  () => import("../pages/private/Global/Dashboard/Clinic")
);
const GlobalClinicId = lazy(
  () => import("../pages/private/Global/Dashboard/ClinicId")
);
const GlobalPerson = lazy(
  () => import("../pages/private/Global/Dashboard/Person")
);
const GlobalPersonId = lazy(
  () => import("../pages/private/Global/Dashboard/PersonId")
);
const GlobalTest = lazy(() => import("../pages/private/Global/Dashboard/Test"));
const GlobalTestId = lazy(
  () => import("../pages/private/Global/Dashboard/TestId")
);
const Clinic = lazy(() => import("../pages/private/Clinic"));
const ClinicDashboard = lazy(() => import("../pages/private/Clinic/Dashboard"));
const ClinicPerson = lazy(
  () => import("../pages/private/Clinic/Dashboard/Person")
);
const ClinicPersonId = lazy(
  () => import("../pages/private/Clinic/Dashboard/PersonId")
);
const ClinicTest = lazy(() => import("../pages/private/Clinic/Dashboard/Test"));
const ClinicTestId = lazy(
  () => import("../pages/private/Clinic/Dashboard/TestId")
);

export const PUBLIC_ROUTES = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/admin", element: <Admin /> },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/dashboard/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/dashboard/test",
    element: (
      <Layout>
        <Test />
      </Layout>
    ),
  },
  {
    path: "/dashboard/test/:id",
    element: (
      <Layout>
        <TestId />
      </Layout>
    ),
  },
  {
    path: "/tests",
    element: (
      <Layout>
        <Tests />
      </Layout>
    ),
  },
  {
    path: "/tests/mbti",
    element: (
      <Layout>
        <Mbti />
      </Layout>
    ),
  },
  {
    path: "/tests/life",
    element: (
      <Layout>
        <Life />
      </Layout>
    ),
  },
  {
    path: "/tests/selfknowledge",
    element: (
      <Layout>
        <SelfKnowledge />
      </Layout>
    ),
  },
  {
    path: "/tests/lovelanguage",
    element: (
      <Layout>
        <LoveLanguage />
      </Layout>
    ),
  },
];

export const PRIVATE_ROUTES = [
  { path: "/admin/global", element: <Global /> },
  { path: "/admin/global/dashboard", element: <GlobalDashboard /> },
  { path: "/admin/global/dashboard/test", element: <GlobalTest /> },
  { path: "/admin/global/dashboard/person", element: <GlobalPerson /> },
  { path: "/admin/global/dashboard/clinic", element: <GlobalClinic /> },
  { path: "/admin/global/dashboard/test/:id", element: <GlobalTestId /> },
  { path: "/admin/global/dashboard/person/:id", element: <GlobalPersonId /> },
  { path: "/admin/global/dashboard/clinic/:id", element: <GlobalClinicId /> },
  { path: "/admin/clinic", element: <Clinic /> },
  { path: "/admin/clinic/:id/dashboard", element: <ClinicDashboard /> },
  { path: "/admin/clinic/:id/dashboard/test", element: <ClinicTest /> },
  { path: "/admin/clinic/:id/dashboard/person", element: <ClinicPerson /> },
  {
    path: "/admin/clinic/:id/dashboard/test/:test_id",
    element: <ClinicTestId />,
  },
  {
    path: "/admin/clinic/:id/dashboard/person/:person_id",
    element: <ClinicPersonId />,
  },
];
