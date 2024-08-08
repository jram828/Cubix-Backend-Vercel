import PropTypes from "prop-types";
import { Carousel } from "antd";
import {  useLocation, useNavigate } from "react-router-dom";
import "./Carrousel.css";
import frame22 from "../../assets/Frame22.png";
import frame23 from "../../assets/Frame23.png";
import frame24 from "../../assets/Frame24.png";
import frame25 from "../../assets/Frame25.png";
import frame26 from "../../assets/Frame26.png";
import Game from "./game";

const CarrouselGeneral = ({ title, icon, route }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomeRoute =
    location.pathname === "/" || location.pathname === "/home";
  const navigateTo = route;

  const games = [
    { image: frame22, brandgameid: "1f648402-beea-4447-abef-46716d616cfd" },
    {
      image: frame23,
      brandgameid: "82f6cd9b-46ed-4037-8bd9-6170afd0a6b8",
    },
    {
      image: frame24,
      brandgameid: "07a28563-0caf-4d12-85ca-c0278e79a949",
    },
    {
      image: frame25,
      brandgameid: "7b64d747-8e3d-4d98-bafd-f1f9c128e3e1",
    },
    {
      image: frame26,
      brandgameid: "9ddefca4-43c7-4bc0-b75e-a67a2d2c2540",
    },
    {
      image: frame23,
      brandgameid: "562950aa-245b-4974-84b4-c053eb6b648b",
    },
    {
      image: frame22,
      brandgameid: "675132bb-de01-407e-8b65-f764f553e98e",
    },
    {
      image: frame24,
      brandgameid: "842971b7-d925-43d0-a4b4-22666abc8e40",
    },
    {
      image:  frame25,
      brandgameid: "bbd12982-8089-4edc-b9d8-a6206697916b",
    },
    {
      image: frame26,
      brandgameid: "883b702e-eae1-4552-bf13-df55ddd3b8a5",
    },
    {
      image: frame22,
      brandgameid: "923d02af-1002-4bba-9fb3-074e4163ea80",
    },
    {
      image:  frame23,
      brandgameid: "4616cdbe-7abc-4510-846d-7e77048baefb",
    },
    {
      image: frame24,
      brandgameid: "dc554626-70c5-4d19-9cb6-3cf8a94e11ee",
    },
    {
      image:  frame25,
      brandgameid: "fc9dc544-7eab-43df-b6a8-b2827834dd27",
    },
    {
      image:  frame26,
      brandgameid: "97dab495-710b-4840-b00e-ec1a1a9c2dd0",
    },
  ];

  // Dividir imágenes en bloques de 3 para móviles y 5 para pantallas grandes
  const renderCarouselItems = () => {
    const isMobile = window.innerWidth <= 768;
    const itemsPerPage = isMobile ? 3 : 5;
    const elements = [];

    for (let i = 0; i < games.length; i += itemsPerPage) {
      const chunk = games.slice(i, i + itemsPerPage).map((game, index) => (
        <div key={i + index} className="inline-block">
          <Game currentGame={game} />
        </div>
      ));

      if (isHomeRoute && !isMobile && i === 0) {
        chunk.push(
          <button
            key="see-all"
            onClick={() => navigate(navigateTo)}
            className="bg-[#2c323a] h-56 absolute bottom-6 rounded-lg px-4 text-white"
          >
            See All
          </button>
        );
      }

      elements.push(
        <div key={i} className="flex justify-center items-center">
          {chunk}
        </div>
      );
    }

    return elements;
  };

  return (
    <div className="text-white">
      <div className="bets-title mb-2 flex items-center justify-start">
        <img src={icon} className="bet-icon mr-2" alt={title} />
        <h1>{title}</h1>
      </div>
      <Carousel
        arrows
        infinite={false}
        dots={false}
        className="custom-carousel w-screen md:w-[85rem] bg-[#181C20]"
        draggable
      >
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
};

CarrouselGeneral.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default CarrouselGeneral;
