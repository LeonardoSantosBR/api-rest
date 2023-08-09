"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// api/usecases/users/admin/create-admin/create-admin-usecase.ts
var create_admin_usecase_exports = {};
__export(create_admin_usecase_exports, {
  AdminUsecase: () => AdminUsecase
});
module.exports = __toCommonJS(create_admin_usecase_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdminUsecase
});
