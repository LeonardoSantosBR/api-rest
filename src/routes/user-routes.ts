import { Router } from "express";
import { userController } from "../usecases/users";


const userRouter = Router();

userRouter.post("/create/user", (request, response) => {
  return userController.create(request, response);
});

export { userRouter };
