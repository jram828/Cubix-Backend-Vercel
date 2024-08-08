import { getGame } from "../controllers/getGameController.js";

const getGameHandler = async (req, res) => {
  try {
    const response = await getGame(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export { getGameHandler};