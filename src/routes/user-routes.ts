import { Router } from "express";
import { authController } from "../usecases/authentication";
import { userController } from "../usecases/users";


const userRouter = Router();

userRouter.post("/auth/user", (request, response) => {
  return authController.signIn(request, response);
});

userRouter.post("/create/user", (request, response) => {
  return userController.create(request, response);
});

export { userRouter };
