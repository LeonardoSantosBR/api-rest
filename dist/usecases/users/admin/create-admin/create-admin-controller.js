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

// api/usecases/users/admin/create-admin/create-admin-controller.ts
var create_admin_controller_exports = {};
__export(create_admin_controller_exports, {
  CreateAdminController: () => CreateAdminController
});
module.exports = __toCommonJS(create_admin_controller_exports);
var CreateAdminController = class {
  constructor(adminUseCase) {
    this.adminUseCase = adminUseCase;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateAdminController
});
