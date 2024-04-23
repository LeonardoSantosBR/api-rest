import { PrismaClient } from "@prisma/client";
import { MysqlUserRepository } from "../../repositories/mysql/users/mysql-user-repository";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication-service";

const prisma = new PrismaClient();
const mysqlUserRepository = new MysqlUserRepository(prisma);
const AuthService = new AuthenticationService();
const authController = new AuthenticationController(
  mysqlUserRepository,
  AuthService
);

export { authController };
