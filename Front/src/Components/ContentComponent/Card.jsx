import { Card } from "antd";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import groupCirculo from "../../assets/_Group_circulo.svg";
import casino from "../../assets/casino.svg";
import group2 from "../../assets/Group2.png";
import slot from "../../assets/slot.svg";
import group3 from "../../assets/Group3.png";
import bets from "../../assets/bets.svg";

const CustomCard = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="flex w-screen md:w-full gap-6 md:gap-16 mb-5 relative justify-center">
      <div
        className="relative w-full h-28 md:w-[380px] md:h-[164px] cursor-pointer"
        onClick={() => navigateTo("/Casino")}
      >
        <img src={groupCirculo} alt="Group" className="group-image" />
        <Card className="custom-card">
          <div className="Casino-container">
            <h2 className="Casino">Casino</h2>
          </div>
          <img
            src={casino}
            alt="Casino"
            className=" w-36 absolute right-3 top-8 md:h-44 md:w-44 md:-left-7 mt-0 opacity-10"
          />
        </Card>
      </div>

      <div
        className="relative w-full h-28 md:w-[380px] md:h-[164px] cursor-pointer"
        onClick={() => navigateTo("/Slot")}
      >
        <img src={group2} alt="Group" className="group-image" />
        <Card className="custom-card-slot">
          <div className="Casino-container">
            <h2 className="Casino">Slot</h2>
          </div>
          <img
            src={slot}
            alt="Slot"
            className=" ml-18 h-20 md:h-36 md:w-36 absolute left-0 top-8 md:top-2 md:bottom-[-1rem] opacity-10"
          />
        </Card>
      </div>

      <div
        className="relative w-full h-28 md:w-[380px] md:h-[164px] cursor-pointer"
        onClick={() => navigateTo("/Bets")}
      >
        <img src={group3} alt="Group" className="group-image" />
        <Card className="custom-card-best">
          <div className="Casino-container">
            <h2 className="Casino">Bets</h2>
          </div>
          <img
            src={bets}
            alt="Bets"
            className=" h-48 w-48 absolute bottom-[-4rem] left-[-1rem] opacity-10 rotate-90"
          />
        </Card>
      </div>
    </div>
  );
};

export default CustomCard;
