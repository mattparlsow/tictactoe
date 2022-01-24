import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Game from "./components/Game";
import SplashScreen from "./components/SpashScreen";

function Router() {
  let state = useLocation();

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      {state.gameMode ? (
        <Route path="/play" element={<Game />} />
      ) : (
        <Route
          path="/"
          element={<Navigate to="/" element={<SplashScreen />} />}
        />
      )}
      <Route
        path="*"
        element={<Navigate to="/" element={<SplashScreen />} />}
      />
    </Routes>
  );
}

export default Router;
