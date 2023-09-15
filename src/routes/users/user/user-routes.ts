import { Router } from "express";

import { userLogin } from "../../../usecases/login/users/user";
import { createUserController } from "../../../usecases/users/user/create-user";


const userRouter = Router();

userRouter.post("/login/user", (request, response) => {
  return userLogin.login(request, response);
});

userRouter.post("/create/user", (request, response) => {
  return createUserController.handle(request, response);
});

export { userRouter };
