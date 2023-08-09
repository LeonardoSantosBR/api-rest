import { MysqlAdminRepository } from "../../../../repositories/mysql/users/admin/mysql.admin-repository";
import { AdminUsecase } from "./create-admin-usecase";
import { CreateAdminController } from "./create-admin-controller";

const mysqladminrepository = new MysqlAdminRepository();
const adminUseCase = new AdminUsecase(mysqladminrepository);
const createAdminController = new CreateAdminController(adminUseCase);

export { createAdminController, adminUseCase };
