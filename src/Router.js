import { Route, Routes } from "react-router-dom";
import App from "./App";
import GameView from "./components/GameView";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/play/:gameMode" element={<GameView />} />
    </Routes>
  );
}

export default Router;
