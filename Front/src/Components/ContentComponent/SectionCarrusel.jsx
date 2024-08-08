import PropTypes from "prop-types";
import { useState } from "react";
import "./SectionCarrusel.css";
import frame22 from "../../assets/Frame22.png";
import frame23 from "../../assets/Frame23.png";
import frame24 from "../../assets/Frame24.png";
import frame25 from "../../assets/Frame25.png";
import frame26 from "../../assets/Frame26.png";
import arrowLeft from "../../assets/arrowLeft2.svg";
import arrowRight from "../../assets/arrow-right.svg";
import Bet from "./Bet";

const Section = ({ title, icon }) => {
  const betGames = [
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
      image: frame25,
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
      image: frame23,
      brandgameid: "4616cdbe-7abc-4510-846d-7e77048baefb",
    },
    {
      image: frame24,
      brandgameid: "dc554626-70c5-4d19-9cb6-3cf8a94e11ee",
    },
    {
      image: frame25,
      brandgameid: "fc9dc544-7eab-43df-b6a8-b2827834dd27",
    },
    {
      image: frame26,
      brandgameid: "97dab495-710b-4840-b00e-ec1a1a9c2dd0",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPageMobile = 9; // 3 columnas x 3 filas en móviles
  const itemsPerPageDesktop = 15; // 5 columnas x 3 filas en pantallas grandes

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(betGames.length / itemsPerPageMobile) - 1
      )
    );
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderGrid = () => {
    const isMobile = window.innerWidth <= 768;
    const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
    const startIndex = currentPage * itemsPerPage;
    const currentGames = betGames.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div
        className={`grid ${
          isMobile ? "grid-cols-3" : "grid-cols-5"
        } gap-4 md:gap-6 lg:gap-12`}
      >
        {currentGames.map((game, index) => (
          <div key={index} className="inline-block">
            <Bet currentGame={game} />
          </div>
        ))}
      </div>
    );
  };

  const renderPagination = () => {
    if (window.innerWidth > 768) return null; // Oculta la paginación en pantallas grandes

    const totalPages = Math.ceil(betGames.length / itemsPerPageMobile);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

    return (
      <div className="pagination flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="page-btn mx-2"
        >
          <img src={arrowLeft} alt="Prev" />
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`page-btn mx-2 ${page === currentPage ? "active" : ""}`}
          >
            <span
              className={`page-number ${page === currentPage ? "current" : ""}`}
            >
              {page + 1}
            </span>
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="page-btn mx-2"
        >
          <img src={arrowRight} alt="Next" />
        </button>
      </div>
    );
  };

  return (
    <div className="bets-container">
      <h1 className="bets-title mb-2 flex items-center">
        <img src={icon} className="bet-icon mr-2" alt={title} />
        {title}
      </h1>
      {renderGrid()}
      {renderPagination()}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Section;
