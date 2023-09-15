import { Request, Response } from "express";
import { UserUsecase } from "./create-user-usecase";

export class CreateUserController {
  constructor(private readonly userUseCase: UserUsecase) {}

  async handle(request: Request, response: Response) {
    try {
      const { email, typeUser, name, password, confirmPassword } = request.body;

      if (typeUser !== "usuario") {
        throw new Error("Rota destinado a usuários");
      }

      await this.userUseCase.execute({
        email,
        typeUser,
        name,
        password,
        confirmPassword,
      });

      return response.status(200).send("Usuário registrado salvo.");
    } catch (error: any) {
      return response.status(500).json({
        message: error.message || "unexpected error",
      });
    }
  }
}
