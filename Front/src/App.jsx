import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import BetsPage from "./pages/bets/betsPage";
import GameScreen from "./Components/ContentComponent/GameScreen";
import BestLiveGames from "./pages/BestLiveGames/BestLiveGames";
import BestSlotGames from "./pages/BestSlotGames/BestSlotGames";
import CasinoPage from "./pages/Casino/casinoPage";
import SlotPage from "./pages/Slot/slotPage.jsx";
import PasswordReset from "./Components/recuperar-contraseña/PasswordReset";

function App() {
  return (
    <div>
      <Header />
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casino" element={<CasinoPage />} />
          <Route path="/bets" element={<BetsPage />} />
          <Route path="/slot" element={<SlotPage />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/live-games" element={<BestLiveGames />} />
          <Route path="/best-slot-games" element={<BestSlotGames />} />
          <Route path="/recovery" element={<PasswordReset />} />
        </Routes>
      </SideBar>
      <Footer />
    </div>
  );
}

export default App;
