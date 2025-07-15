import Home from "./pages/Home";
import Time from "./pages/Time";

type AppRoutesType = {
  [route: string]: {
    path: string;
    component: React.ComponentType;
  };
};
export const AppRoutes: AppRoutesType = {
  Home: { path: "/home", component: Home },
  Time: { path: "/time", component: Time },
};
