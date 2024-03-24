import { MysqlUserRepository } from "../../repositories/mysql/users/mysql-user-repository";
import { AuthenticationController } from "./authentication.controller";

const mysqlUserRepository = new MysqlUserRepository();
const authController = new AuthenticationController(mysqlUserRepository);

export { authController };
