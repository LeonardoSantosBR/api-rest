import { PrismaClient, User } from "@prisma/client";
import { iUserImplementation } from "../../implementations/users/user-implementation";

import {
  createParams,
  findAllParams,
  findOneParams,
  updateOrDeleteParams,
} from "../../types/users/users.inferfaces";

export class MysqlUserRepository implements iUserImplementation {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: createParams): Promise<User> {
    const newUser = await this.prisma.user.create(data);
    return newUser;
  }

  async findAll(params: findAllParams): Promise<User[]> {
    const query = await this.prisma.user.findMany(params);
    return query;
  }

  async findOne(params: findOneParams): Promise<User | null> {
    const query = await this.prisma.user.findFirst(params);
    return query
  }

  async findByEmail(params: findOneParams): Promise<any> {
    const findUser = await this.prisma.user.findFirst(params);
    return findUser;
  }

  async update(params: updateOrDeleteParams): Promise<boolean> {
    await this.prisma.user.update(params);
    return true;
  }

  async delete(params: updateOrDeleteParams): Promise<boolean> {
    await this.prisma.user.update(params);
    return true;
  }
}
