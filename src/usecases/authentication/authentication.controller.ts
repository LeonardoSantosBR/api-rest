import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { MysqlUserRepository } from "../../repositories/users/mysql-user-repository";
import { AuthenticationService } from "./authentication-service";

export class AuthenticationController {
  constructor(
    private readonly userRepository: MysqlUserRepository,
    private readonly jwtService: AuthenticationService
  ) {}

  async signIn(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const user = await this.userRepository.findByEmail(email);

      if (!user) throw new Error("Email não encontrado ou está errado.");

      const verifyPass = await bcrypt.compare(password, user.password);

      if (!verifyPass) {
        throw new Error("Senha está incorreta.");
      }

      const token = await this.jwtService.generateToken({
        id: user.id,
        email: user.email,
      });

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
