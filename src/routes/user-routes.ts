import { Router } from "express";
import { userController } from "../usecases/users";

const userRouter = Router();

userRouter.post("/user", (request, response) => {
  return userController.create(request, response);
});

userRouter.get("/user", (request, response) => {
  return userController.findAll(request, response);
});

userRouter.get("/user/:id", (request, response) => {
  return userController.findOne(request, response);
});

userRouter.patch("/user/:id", (request, response) => {
  return userController.update(request, response);
});

userRouter.delete("/user/:id", (request, response) => {
  return userController.delete(request, response);
});

export { userRouter };
