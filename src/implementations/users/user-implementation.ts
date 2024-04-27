import { User } from "@prisma/client";
import {
  createParams,
  findAllParams,
  findOneParams,
  updateOrDeleteParams,
} from "../../types/users/users.inferfaces";

export interface iUserImplementation {
  create(user: createParams): Promise<User>;

  findAll(params: findAllParams): Promise<User[]>;

  findOne(params: findOneParams): Promise<User>;

  findByEmail(params: findOneParams): Promise<User>;

  update(params: updateOrDeleteParams): boolean;

  delete(params: updateOrDeleteParams): boolean;
}
