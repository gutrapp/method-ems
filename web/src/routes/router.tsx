import { Home } from "../pages/public/Home";
import { Login } from "../pages/public/Auth/Login";
import { Register } from "../pages/public/Auth/Register";
import { Admin } from "../pages/public/Auth/Admin";
import { lazy } from "react";
import { Layout } from "../components/Layout";

const Profile = lazy(() => import("../pages/public/Dashboard/Profile"));
const Test = lazy(() => import("../pages/public/Dashboard/Test"));
const TestId = lazy(() => import("../pages/public/Dashboard/TestId"));
const Tests = lazy(() => import("../pages/public/Tests"));
const Mbti = lazy(() => import("../pages/public/Tests/Mbti"));
const Life = lazy(() => import("../pages/public/Tests/Life"));
const SelfKnowledge = lazy(() => import("../pages/public/Tests/SelfKnowledge"));
const LoveLanguage = lazy(() => import("../pages/public/Tests/LoveLanguage"));

const Global = lazy(() => import("../pages/private/Global"));
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
const ClinicPage = lazy(() => import("../pages/private/Clinic"));
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
const ClinicResult = lazy(
  () => import("../pages/private/Clinic/Dashboard/Result")
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
  { path: "/register", element: <Register /> },
  { path: "/admin", element: <Admin /> },
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
    path: "/tests/result/:id/four_elements",
    element: (
      <Layout>
        <Mbti />
      </Layout>
    ),
  },
  {
    path: "/tests/result/:id/life",
    element: (
      <Layout>
        <Life />
      </Layout>
    ),
  },
  {
    path: "/tests/result/:id/selfknowledge",
    element: (
      <Layout>
        <SelfKnowledge />
      </Layout>
    ),
  },
  {
    path: "/tests/result/:id/lovelanguage",
    element: (
      <Layout>
        <LoveLanguage />
      </Layout>
    ),
  },
];

export const PRIVATE_ROUTES = [
  { path: "/admin/global", element: <Global /> },
  { path: "/admin/global/dashboard/test", element: <GlobalTest /> },
  { path: "/admin/global/dashboard/person", element: <GlobalPerson /> },
  { path: "/admin/global/dashboard/clinic", element: <GlobalClinic /> },
  { path: "/admin/global/dashboard/test/:id", element: <GlobalTestId /> },
  { path: "/admin/global/dashboard/person/:id", element: <GlobalPersonId /> },
  { path: "/admin/global/dashboard/clinic/:id", element: <GlobalClinicId /> },
  { path: "/admin/clinic", element: <ClinicPage /> },
  { path: "/admin/clinic/:id/dashboard/test", element: <ClinicTest /> },
  { path: "/admin/clinic/:id/dashboard/person", element: <ClinicPerson /> },
  { path: "/admin/clinic/:id/dashboard/result", element: <ClinicResult /> },
  {
    path: "/admin/clinic/:id/dashboard/result/:result_id",
    element: <ClinicPerson />,
  },
  {
    path: "/admin/clinic/:id/dashboard/test/:test_id",
    element: <ClinicTestId />,
  },
  {
    path: "/admin/clinic/:id/dashboard/person/:person_id",
    element: <ClinicPersonId />,
  },
];
