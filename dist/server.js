"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// api/index.ts
var import_express2 = __toESM(require("express"));
var import_cors = __toESM(require("cors"));

// api/routes/users/admin/admin-routes.ts
var import_express = require("express");

// api/middlewares/users/admin/admin-middleware.ts
function AdminMiddleware(request, response, next) {
  console.log("passando pelo middleware");
  next();
}

// api/repositories/mysql/users/admin/mysql.admin-repository.ts
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

// api/domain/entities/users/admin/admin.ts
var import_crypto = __toESM(require("crypto"));
var Admin = class {
  constructor(props, id) {
    Object.assign(this, props);
    if (!id) {
      this.id = import_crypto.default.randomUUID();
    }
  }
};

// api/usecases/users/admin/create-admin/create-admin-usecase.ts
var AdminUsecase = class {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }
  execute(admin) {
    return __async(this, null, function* () {
      let email = admin.email;
      const adminAlreadyExists = yield this.adminRepository.findByEmail(email);
      if (adminAlreadyExists) {
        throw new Error("Usu\xE1rio com esse email j\xE1 existe.");
      }
      const newAdmin = new Admin(admin);
      yield this.adminRepository.saveAdmin(newAdmin);
    });
  }
};

// api/usecases/users/admin/create-admin/create-admin-controller.ts
var CreateAdminController = class {
  constructor(adminUseCase2) {
    this.adminUseCase = adminUseCase2;
  }
  handle(request, response) {
    return __async(this, null, function* () {
      try {
        const {
          email,
          typeUser,
          dateWasCreated,
          name,
          password,
          confirmPassword
        } = request.body;
        yield this.adminUseCase.execute({
          email,
          typeUser,
          dateWasCreated,
          name,
          password,
          confirmPassword
        });
        return response.status(200).send("administrador registrado salvo.");
      } catch (error) {
        return response.status(500).json({
          message: error.message || "unexpected error"
        });
      }
    });
  }
};

// api/usecases/users/admin/create-admin/index.ts
var mysqladminrepository = new MysqlAdminRepository();
var adminUseCase = new AdminUsecase(mysqladminrepository);
var createAdminController = new CreateAdminController(adminUseCase);

// api/routes/users/admin/admin-routes.ts
var adminRouter = (0, import_express.Router)();
adminRouter.post("/create/admin", AdminMiddleware, (request, response) => {
  return createAdminController.handle(request, response);
});

// api/index.ts
var app = (0, import_express2.default)();
app.use(import_express2.default.json());
app.use((0, import_cors.default)());
app.use(adminRouter);

// api/server.ts
var port = process.env.API_PORT;
app.listen(port, () => {
  console.log("\u{1F680} SERVER NA ATIVA \u{1F4BB}\u{1F916}.");
});
