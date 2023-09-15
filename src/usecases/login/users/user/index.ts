import { MysqlUserRepository } from "../../../../repositories/mysql/users/user/mysql-user-repository";
import { UserLogin } from "./user-login";

const mysqlUserRepository = new MysqlUserRepository();
const userLogin = new UserLogin(mysqlUserRepository);

export { userLogin };
