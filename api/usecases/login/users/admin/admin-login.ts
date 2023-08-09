import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { MysqlAdminRepository } from "../../../../repositories/mysql/users/admin/mysql.admin-repository";

export class AdminLogin {
  constructor(private readonly adminRepository: MysqlAdminRepository) {}

  async login(request: Request, response: Response) {
    try {
      const { email, password } = request.body;
      const admin = await this.adminRepository.findByEmail(email);

      if (!admin) {
        throw new Error("Email inválido");
      }
      const verifyPass = await bcrypt.compare(password, admin.password);

      if (!verifyPass) {
        throw new Error("Senha inválido");
      }

      const token = jwt.sign(
        { id: admin.id, typeUser: admin.typeUser },
        process.env.JWT_ADMIN_PASS ?? "",
        {
          expiresIn: "8h",
        }
      );

      let { password: _, ...adminLogin } = admin;

      return response.status(200).json({
        admin: adminLogin,
        token: token,
      });
    } catch (error: any) {
      return response.status(500).json({
        message: error.message || "unexpected error",
      });
    }
  }
}
