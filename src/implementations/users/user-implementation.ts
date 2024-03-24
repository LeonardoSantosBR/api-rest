export interface iUserImplementation {
  findByEmail(email: string): Promise<any>;
  create(user: any): Promise<any>;
}
