import CarrouselGeneral from "./Carrousel";
import dado from "../../assets/dado.svg";
import slot from "../../assets/slot.svg";
import games from "../../assets/games.svg";
import "./GameScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setGame } from "../../../Redux/Actions/createUser";

const GameScreen = () => {
  const datos = JSON.parse(localStorage.getItem("loggedUser")) || {};

  const habaneroData = datos.habaneroData || {};
  const brandId = habaneroData.BrandId || "";
  const token = habaneroData.Token || "";

  const launchUrl = "https://app-test.insvr.com/play";
  const mode = "fun";
  const locale = "en";
  const lobbyUrl = "https://transfer-test.insvr.com/listgames";

  const brandgameId = useSelector((state) => state?.brandgameid);
  const dispatch=useDispatch();

  useEffect(()=>{
    
    if (!brandgameId ) {
      const newBrandId=JSON.parse(window.localStorage.getItem("currentGame")).brandgameid
      console.log('newBrandId:', newBrandId.brandgameid)
    dispatch(setGame(newBrandId))}
  
  },[dispatch])

  // const localStorageBrandgameId = JSON.parse(
  //   window.localStorage.getItem("currentGame")
  // );
  // const brandgameId = localStorageBrandgameId.brandgameid;
  console.log('brandgame id', brandgameId)

  const URL = `${launchUrl}?brandid=${brandId}&brandgameid=${brandgameId}&token=${token}&mode=${mode}&locale=${locale}&lobbyurl=${lobbyUrl}`;

  const URL_FUN = `https://app-test.insvr.com/play?brandid=c9eb1502-703e-ef11-991a-002248eb2b00&brandgameid=${brandgameId}&token=&mode=fun&locale=en&lobbyurl=https://transfer-test.insvr.com/listgames`;

  return (
    <div className="game-screen overflow-hidden w-full">
      <div className="flex flex-col bg-[#20242A] mr-20 p-2 mt-2 rounded-xl mb-10">
        <div className="flex items-center p-4">
          <img src={games} className="icon-games w-8" alt="Games" />
          <h1 className="Jackpot ml-2">Jackpot</h1>
        </div>
        <div className="flex justify-center">
          <div className="container-game text-white relative overflow-hidden pt-[56.25%]">
            <iframe
              src={!datos ? URL : URL_FUN}
              title="Mi iframe"
              
              className="border-none  absolute top-0 left-0 w-full h-full "
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="carrousel-container flex flex-col">
        <CarrouselGeneral
          title="Other Live Games"
          icon={dado}
          route="/other-live-games"
        />
        <CarrouselGeneral
          title="Other Slot Games"
          icon={slot}
          route="/other-slot-games"
        />
      </div>
    </div>
  );
};

export default GameScreen;
