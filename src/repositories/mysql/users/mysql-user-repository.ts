import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { iUserImplementation } from "../../../implementations/users/user-implementation";
import { User } from "../../../domain/entities/users/user/user";

export class MysqlUserRepository implements iUserImplementation {
  async findByEmail(email: string): Promise<any> {
    const prisma = new PrismaClient();
    const findUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    return findUser;
  }

  async saveUser(user: User): Promise<any> {
    const prisma = new PrismaClient();

    let hashPassword = await bcrypt.hash(user.password, 5);
    let hashConfirmPassword = await bcrypt.hash(user.confirmPassword, 5);

    const newuser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        typeUser: user.typeUser,
        name: user.name,
        password: hashPassword,
        confirmPassword: hashConfirmPassword,
      },
    });
    return newuser;
  }
}
