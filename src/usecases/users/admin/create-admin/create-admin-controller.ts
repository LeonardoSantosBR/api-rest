import { Request, Response } from "express";
import { AdminUsecase } from "./create-admin-usecase";

export class CreateAdminController {
  constructor(private readonly adminUseCase: AdminUsecase) {}

  async handle(request: Request, response: Response) {
    try {
      const {
        email,
        typeUser,
        dateWasCreated,
        name,
        password,
        confirmPassword,
      } = request.body;

      await this.adminUseCase.execute({
        email,
        typeUser,
        dateWasCreated,
        name,
        password,
        confirmPassword,
      });

      return response.status(200).send("administrador registrado salvo.");
    } catch (error: any) {
      return response.status(500).json({
        message: error.message || "unexpected error",
      });
    }
  }
}
