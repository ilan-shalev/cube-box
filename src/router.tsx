import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import ProjectsPage from './components/pages/ProjectsPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage
  },
  {
    path: "projects",
    Component: ProjectsPage,    
  },
]);