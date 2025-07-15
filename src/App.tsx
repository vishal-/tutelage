import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "./organisms/Header";
import InstallPrompt from "./components/InstallPrompt";
import { AppRoutes } from "./app.config";

function App() {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: "dark",
        },
      })}
    >
      <HashRouter>
        <CssBaseline />

        <Container maxWidth="sm">
          <Header />

          <Routes>
            {Object.keys(AppRoutes).map((route) => (
              <Route
                key={`app_path_${route}`}
                path={AppRoutes[route].path}
                Component={AppRoutes[route].component}
              />
            ))}

            <Route
              path="/"
              element={<Navigate to={AppRoutes["Home"].path} />}
            />
          </Routes>

          <InstallPrompt />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
