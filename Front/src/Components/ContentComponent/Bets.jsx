import "./Bets.css";
import frame22 from "../../assets/Frame22.png";
import frame23 from "../../assets/Frame23.png";
import frame24 from "../../assets/.png";
import frame25 from "../../assets/Frame25.png";
import frame26 from "../../assets/Frame26.png";
import football from "../../assets/football.png";
const Bets = () => {
  // Array de imágenes de apuestas
  const betGames = [
    frame22,
    frame23,
    frame24,
    frame25,
    frame26,
    frame22,
    frame23,
    frame24,
    frame25,
    frame26,
  ];

  // Estilo para cada imagen de apuesta
  const gameStyle = {
    width: "207.6px",
    height: "229.51px",
    gap: "0px",
    borderRadius: "10.61px 0px 0px 0px",
    opacity: "1",
    boxShadow: "0px 4px 20px 0px #00000066",
  };

  // Función para renderizar cada imagen de apuesta
  const renderBetGames = () => {
    return betGames.map((game, index) => (
      <img key={index} src={game} alt={`Bet ${index + 1}`} style={gameStyle} />
    ));
  };

  return (
    <div className="bets-container">
      <h1 className="bets-title">
        <img src={football} className="bet-icon" alt="Football Icon" />
        Bets
      </h1>
      <div className="bet-games-container">{renderBetGames()}</div>
    </div>
  );
};

export default Bets;
