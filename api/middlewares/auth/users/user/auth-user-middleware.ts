import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

async function AuthUserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(500).send("Não foi encontrado token");
  }

  const token = authorization.split(" ")[1];

  const user = jwt.verify(token, process.env.JWT_USER_PASS ?? "");

  if (!user) {
    return res.status(500).send("Não existe usuário");
  }

  next();
}

export { AuthUserMiddleware };
