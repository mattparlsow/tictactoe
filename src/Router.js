import { Route, Routes } from "react-router-dom";
import App from "./App";
import GameView from "./components/GameView";
import SplashScreen from "./components/SpashScreen";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/play/:gameMode" element={<GameView />} />
    </Routes>
  );
}

export default Router;
