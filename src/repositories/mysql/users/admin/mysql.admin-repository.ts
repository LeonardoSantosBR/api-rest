import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { iAdminImplementation } from "../../../../implementations/users/admin/admin-implementation";
import { Admin } from "../../../../domain/entities/users/admin/admin";

export class MysqlAdminRepository implements iAdminImplementation {
  async findByEmail(email: string): Promise<any> {
    const prisma = new PrismaClient();
    const findAdmin = await prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
    return findAdmin;
  }

  async saveAdmin(admin: Admin): Promise<any> {
    const prisma = new PrismaClient();

    let hashPassword = await bcrypt.hash(admin.password, 10);
    let hashConfirmPassword = await bcrypt.hash(admin.confirmPassword, 10);

    const newadmin = await prisma.admin.create({
      data: {
        id: admin.id,
        email: admin.email,
        typeUser: admin.typeUser,
        dateWsCreated: admin.dateWasCreated,
        name: admin.name,
        password: hashPassword,
        confirmPassword: hashConfirmPassword,
      },
    });
    return newadmin;
  }
}
