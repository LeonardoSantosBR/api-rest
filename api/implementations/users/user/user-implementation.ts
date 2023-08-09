import { User } from "../../../domain/entities/users/user/user";

export interface iUserImplementation {
  findByEmail(email: string): Promise<any>;
  saveUser(user: User): Promise<any>;
}
