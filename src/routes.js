import { AboutPage } from "./pages/About";
import { HomePage } from "./pages/Home";
import { Projects } from "./pages/Projects";

export const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
    exact: true,
  },
  {
    path: "/projects",
    component: Projects,
    exact: true,
  },
];
