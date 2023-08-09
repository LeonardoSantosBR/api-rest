"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// api/repositories/mysql/users/admin/mysql.admin-repository.ts
var mysql_admin_repository_exports = {};
__export(mysql_admin_repository_exports, {
  MysqlAdminRepository: () => MysqlAdminRepository
});
module.exports = __toCommonJS(mysql_admin_repository_exports);
var import_client = require("@prisma/client");
var MysqlAdminRepository = class {
  findByEmail(email) {
    return __async(this, null, function* () {
      const prisma = new import_client.PrismaClient();
      try {
        const findAdmin = yield prisma.admin.findFirst({
          where: {
            email
          }
        });
        return findAdmin;
      } catch (error) {
        return;
      }
    });
  }
  saveAdmin(admin) {
    return __async(this, null, function* () {
      const prisma = new import_client.PrismaClient();
      try {
        const newadmin = yield prisma.admin.create({
          data: {
            id: admin.id,
            email: admin.email,
            typeUser: admin.typeUser,
            dateWsCreated: admin.dateWasCreated,
            name: admin.name,
            password: admin.password,
            confirmPassword: admin.confirmPassword
          }
        });
        return newadmin;
      } catch (error) {
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MysqlAdminRepository
});
