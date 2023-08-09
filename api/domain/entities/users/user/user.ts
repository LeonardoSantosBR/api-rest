import crypto from "crypto";

export class User {
  id!: string;
  email!: string;
  typeUser!: string;
  name!: string;
  password!: string;
  confirmPassword!: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = crypto.randomUUID();
    }
  }
}
