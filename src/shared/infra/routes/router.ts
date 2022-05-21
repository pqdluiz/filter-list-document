import { Router } from "express";
import { usersRouter } from "modules/users/http/infra/routes/usersRouter";

const router = Router();

router.use("/users", usersRouter);

export { router };
