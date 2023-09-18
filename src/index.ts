//express cors
import express from "express";
import cors from "cors";

//routes
import { userRouter } from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use(cors());

//routes using
app.use(userRouter);

export { app };
