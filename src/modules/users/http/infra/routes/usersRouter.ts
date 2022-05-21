import { Router } from "express";
import { CreateUsersController, FindAllUsersController } from "../../../usecases";

const usersRouter = Router();
const findAllUserRouter = new FindAllUsersController();
const createUserRouter = new CreateUsersController();

usersRouter.get("/", findAllUserRouter.handle);
usersRouter.post("/", createUserRouter.handle);

export { usersRouter };
