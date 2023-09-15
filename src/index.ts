//express cors
import express from "express";
import cors from "cors";

//routes
import { adminRouter } from "./routes/users/admin/admin-routes";
import { userRouter } from "./routes/users/user/user-routes";

const app = express();
app.use(express.json());
app.use(cors());

//routes using
app.use(adminRouter);
app.use(userRouter);

export { app };
