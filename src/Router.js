import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Game from "./components/Game";
import GameSetupDialog from "./components/GameSetupDialog";
import SplashScreen from "./components/SpashScreen";

function Router() {
  let { state } = useLocation();

  // routes /play and /setup are "proctected". The state must be present or user gets redirected
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/play" element={state ? <Game /> : <Navigate to="/" />} />
      <Route
        path="/setup"
        element={state ? <GameSetupDialog /> : <Navigate to="/" />}
      />
      <Route
        path="*"
        element={<Navigate to="/" element={<SplashScreen />} />}
      />
    </Routes>
  );
}

export default Router;
