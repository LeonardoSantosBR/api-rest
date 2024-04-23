import { User } from "@prisma/client";

export interface iUserImplementation {
  create(user: any): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
