import { Route, Routes } from "react-router-dom";
import App from "./App";
import Game from "./components/Game";
import SplashScreen from "./components/SpashScreen";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/play" element={<Game />} />
    </Routes>
  );
}

export default Router;
