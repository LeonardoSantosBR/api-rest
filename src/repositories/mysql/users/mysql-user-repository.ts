import bcrypt from "bcrypt";
import { PrismaClient, User } from "@prisma/client";
import { iUserImplementation } from "../../../implementations/users/user-implementation";

export class MysqlUserRepository implements iUserImplementation {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: any): Promise<User> {
    const newUser = await this.prisma.user.create({ data: data });
    return newUser;
  }

  async findByEmail(email: string): Promise<any> {
    const findUser = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return findUser;
  }
}
