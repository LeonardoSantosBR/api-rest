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

  findOne(params: findOneParams): Promise<User | null>;

  findByEmail(params: findOneParams): Promise<User>;

  update(params: updateOrDeleteParams): Promise<boolean>;

  delete(params: updateOrDeleteParams): Promise<boolean>;
}
