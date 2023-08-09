import { Admin } from "../../../../domain/entities/users/admin/admin";
import { MysqlAdminRepository } from "../../../../repositories/mysql/users/admin/mysql.admin-repository";
import { AdminDto } from "../admin-dto";

export class AdminUsecase {
  constructor(private readonly adminRepository: MysqlAdminRepository) {}

  async execute(admin: AdminDto) {
    let email = admin.email;
    const adminAlreadyExists = await this.adminRepository.findByEmail(email);

    if (adminAlreadyExists) {
      throw new Error("Administrador com esse email já existe.");
    }

    const newAdmin = new Admin(admin);
    await this.adminRepository.saveAdmin(newAdmin);
  }
}

// single reponsability = essa classe que detem toda a logica de como criar um usuario
// liskov substitution = essa classe é capaz de utilizar todas as funcoes do repository
