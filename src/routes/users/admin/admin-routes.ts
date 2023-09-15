import { Router } from "express";

import { adminLogin } from "../../../usecases/login/users/admin";
import { createAdminController } from "../../../usecases/users/admin/create-admin";

const adminRouter = Router();

adminRouter.post("/login/admin", (request, response) => {
  return adminLogin.login(request, response);
});

adminRouter.post("/create/admin", (request, response) => {
  return createAdminController.handle(request, response);
});

export { adminRouter };
