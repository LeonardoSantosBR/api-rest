import { Request, Response } from "express";
import { UserService } from "./user-service";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(request: Request, response: Response) {
    try {
      const body = request.body;

      if (!body.idPlan) throw new Error("É necessário enviar o plano.");

      if (!body.email) throw new Error("É necessário enviar o email.");

      if (!body.cpf) throw new Error("É necessário enviar o cpf.");

      if (!body.name) throw new Error("É necessário enviar o nome.");

      if (!body.cpf) throw new Error("É necessário enviar o cpf.");

      if (!body.password) throw new Error("É necessário enviar a senha.");

      const data = await this.userService.create(body);

      return data;
    } catch (error: any) {
      return response.status(500).json({
        message: error.message || "unexpected error",
      });
    }
  }

  async findAll() {}

  async findOne() {}

  async update() {}

  async delete() {}
}
