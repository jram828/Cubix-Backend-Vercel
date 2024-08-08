import { Router } from "express";
import { getGameHandler} from "../handlers/getGameHandler.js";

const getGameRouter = Router();

getGameRouter.get("/", getGameHandler);

export default getGameRouter;

