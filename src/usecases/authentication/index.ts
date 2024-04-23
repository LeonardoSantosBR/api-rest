import { PrismaClient } from "@prisma/client";
import { MysqlUserRepository } from "../../repositories/mysql/users/mysql-user-repository";
import { AuthenticationController } from "./authentication.controller";

const prisma = new PrismaClient();
const mysqlUserRepository = new MysqlUserRepository(prisma);
const authController = new AuthenticationController(mysqlUserRepository);

export { authController };
