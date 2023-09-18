import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { MysqlUserRepository } from "../../repositories/mysql/users/mysql-user-repository";

export class UserLogin {
  constructor(private readonly userRepository: MysqlUserRepository) {}

  async login(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        throw new Error("Email não encontrado ou está errado.");
      }

      const verifyPass = await bcrypt.compare(password, user.password);

      if (!verifyPass) {
        throw new Error("Senha está incorreta.");
      }

      const token = jwt.sign(
        { id: user.id, typeUser: user.typeUser },
        process.env.JWT_USER_PASS || "",
        {
          expiresIn: "8h",
        }
      );

      let { password: _, ...userLogin } = user;

      return response.status(200).json({
        user: userLogin,
        token: token,
      });
    } catch (error: any) {
      return response.status(500).json({
        error: error.message,
      });
    }
  }
}
