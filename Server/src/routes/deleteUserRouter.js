import { Router } from "express";
import { deletedUser} from "../controllers/userController.js";

const deleteUserRouter = Router();

deleteUserRouter.get("/:id", deletedUser);

export default deleteUserRouter;
