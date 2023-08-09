import { User } from "../../../../domain/entities/users/user/user";
import { MysqlUserRepository } from "../../../../repositories/mysql/users/user/mysql-user-repository";
import { UserDto } from "../user.dto";

export class UserUsecase {
  constructor(private readonly userRepository: MysqlUserRepository) {}

  async execute(user: UserDto) {
    let email = user.email;
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("Usuário com esse email já existe.");
    }

    const newUser = new User(user);
    await this.userRepository.saveUser(newUser);
  }
}
