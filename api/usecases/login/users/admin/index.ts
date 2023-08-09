import { MysqlAdminRepository } from "../../../../repositories/mysql/users/admin/mysql.admin-repository";
import { AdminLogin } from "./admin-login";

const mysqlAdminRepositoy = new MysqlAdminRepository();
const adminLogin = new AdminLogin(mysqlAdminRepositoy);

export { adminLogin };
