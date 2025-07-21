import Home from "./pages/Home";
import Time from "./pages/Time";

type AppRoutesType = {
  [route: string]: {
    path: string;
    component: React.ComponentType;
    title: string;
  };
};
export const AppRoutes: AppRoutesType = {
  Home: { path: "/", component: Home, title: "Choose your challenge" },
  Time: { path: "/time", component: Time, title: "What time is it?" }
};
