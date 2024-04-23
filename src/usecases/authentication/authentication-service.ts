import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export class AuthenticationService {
  constructor() {}

  async generateToken(user: { id: number; email: string }) {}

  async validateRefreshToken(token: string) {}
}
