import { AboutPage } from "./pages/About";
import { HomePage } from "./pages/Home";
import { Portfolios } from "./pages/Portfolio";
import { portfolioDetails } from "./pages/Portfolio/Portfolio Details";
import { Projects } from "./pages/Projects";
import { projectDetails } from "./pages/Projects/Project Details";

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
  {
    path: "/portfolios",
    component: Portfolios,
    exact: true,
  },
  {
    path: "/projects/projects-details",
    component: projectDetails,
    exact: true,
  },
  {
    path: "/portfolios/portfolios-details",
    component: portfolioDetails,
    exact: true,
  }
];
