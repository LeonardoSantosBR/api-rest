import { Router } from "express";
import { userLogin } from "../usecases/login";
import { userController } from "../usecases/users";


const userRouter = Router();

userRouter.post("/login/user", (request, response) => {
  return userLogin.login(request, response);
});

userRouter.post("/create/user", (request, response) => {
  return userController.create(request, response);
});

export { userRouter };
