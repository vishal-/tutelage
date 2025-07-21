import { Link as RouterLink } from "react-router-dom";
import { AppRoutes } from "../app.config";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <List>
        {Object.keys(AppRoutes)
          .filter((routeKey) => routeKey !== "Home")
          .map((routeKey) => (
            <ListItem key={routeKey} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={AppRoutes[routeKey].path}
              >
                <ListItemText primary={AppRoutes[routeKey].title} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default HomePage;
