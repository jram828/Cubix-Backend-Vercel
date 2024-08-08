import { useDispatch } from "react-redux";
import { setGame } from "../../../Redux/Actions/createUser";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Game = (props) => {
  const distpatch = useDispatch();

  // console.log('id actions:',props.currentGame.brandgameid)
  const handleOnClickGame = () => {
    console.log("el brandid del handleonclick:", props.currentGame.brandgameid);
    window.localStorage.setItem(
      "currentGame",
      JSON.stringify(props.currentGame)
    );
    // window.location.reload();
    distpatch(setGame(props.currentGame.brandgameid))
  };

  return (
    <div>
      <Link to={"/game"} onClick={handleOnClickGame} className="link ">
        <img
          src={props.currentGame.image}
          alt={"Image Juego"}
          className="w-28 md:w-56"
        />
      </Link>
    </div>
  );
};

Game.propTypes = {
  currentGame: PropTypes.shape({
    image: PropTypes.string.isRequired,
    brandgameid: PropTypes.string.isRequired,
  }).isRequired,
};

export default Game;
