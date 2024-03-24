import { MysqlUserRepository } from "../../repositories/mysql/users/mysql-user-repository";
import { UserDto } from "./user.dto";

export class UserService {
  constructor(private readonly userRepository: MysqlUserRepository) { }

  async create(user: UserDto) { }
  async findAll(params: any) { }
  async findOne(params: any) { }
  async update(params: any) { }
  async delete(params: any) { }
}
