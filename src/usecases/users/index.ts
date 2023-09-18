import { MysqlUserRepository } from "../../repositories/mysql/users/mysql-user-repository";
import { UserUsecase } from "./user-service";
import { UserController } from "./user-controller";

const mysqlUserRepository = new MysqlUserRepository();
const userUseCase = new UserUsecase(mysqlUserRepository);
const userController = new UserController(userUseCase);

export { userController };
