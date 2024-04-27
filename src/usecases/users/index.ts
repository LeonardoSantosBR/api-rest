import { MysqlUserRepository } from "../../repositories/users/mysql-user-repository";
import { UserService } from "./user-service";
import { UserController } from "./user-controller";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const mysqlUserRepository = new MysqlUserRepository(prisma);
const userUseCase = new UserService(mysqlUserRepository);
const userController = new UserController(userUseCase);

export { userController };
