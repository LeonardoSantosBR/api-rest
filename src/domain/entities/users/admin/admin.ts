import crypto from "crypto";

export class Admin {
  id!: string;
  email!: string;
  typeUser!: string;
  dateWasCreated!: string;
  name!: string;
  password!: string;
  confirmPassword!: string;

  constructor(props: Omit<Admin, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = crypto.randomUUID();
    }
  }
}