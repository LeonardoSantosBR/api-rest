import { Request, Response } from "express";
import { UserService } from "./user-service";

export class UserController {
  constructor(private readonly userService: UserService) { }

  async create(request: Request, response: Response) {
    try {

    } catch (error: any) {
      return response.status(500).json({
        message: error.message || "unexpected error",
      });
    }
  }

  async findAll() { }

  async findOne() { }

  async update() { }

  async delete() { }
}
