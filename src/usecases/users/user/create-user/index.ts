import { MysqlUserRepository } from "../../../../repositories/mysql/users/user/mysql-user-repository";
import { UserUsecase } from "./create-user-usecase";
import { CreateUserController } from "./create-user-controller";

const mysqlUserRepository = new MysqlUserRepository();
const userUseCase = new UserUsecase(mysqlUserRepository);
const createUserController = new CreateUserController(userUseCase);

export { createUserController };
