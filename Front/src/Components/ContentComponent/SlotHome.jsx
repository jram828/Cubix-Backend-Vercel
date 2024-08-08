import "./SlotHome.css";
import Card from "./Card";
import CarrouselGeneral from "./Carrousel";
import coins from "../../assets/Coins.png";
import bestGames from "../../assets/bestGames.svg";
import { NewModalSignUp } from "../newComponentSingup/modalNewSignUp";

const SlotHome = () => {
  return (
    <div className="custom-container">
      <div className="content-home flex md:flex-row md:pl-40">
        <div className="flex my-5  p-5 md:p-0 border-2 border-gray-700 md:border-none rounded-xl md:mt-20">
          <div className="left-section">
            <h1 className="Welcome text-base md:text-5xl">
              Welcome to <span className="Cubix">Cubix</span>
            </h1>
            <h5 className="parrafo text-sm md:text-base">
              Sign up now and start playing your favorite casino games with
            </h5>
            <h5 className="parrafo text-sm md:text-base">cryptocurrencies!</h5>
            <div className="mt-4 text-start hidden md:block">
              <NewModalSignUp />
            </div>
          </div>
          <div className="right-section">
            <img
              src={coins}
              alt="Descripción de la imagen"
              className="coins-image"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <Card />

        <CarrouselGeneral
          title="Best Live Games"
          icon={bestGames}
          route="/live-games"
        />
        <CarrouselGeneral
          title="Best Slots Games"
          icon={bestGames}
          route="/best-slot-games"
        />
      </div>
    </div>
  );
};

export default SlotHome;
