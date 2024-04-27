import { MysqlUserRepository } from "../../repositories/users/mysql-user-repository";
import { UserDto } from "./user.dto";

export class UserService {
  constructor(private readonly userRepository: MysqlUserRepository) {}

  async create(data: UserDto) {
    const newUser = await this.userRepository.create(data);
    return newUser;
  }

  async findAll(params: any) {}

  async findOne(params: any) {}

  async update(params: any) {}

  async delete(params: any) {}
}
