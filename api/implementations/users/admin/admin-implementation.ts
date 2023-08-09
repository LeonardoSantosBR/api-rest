export interface iAdminImplementation {
  findByEmail(id: string): Promise<any>;
  saveAdmin(admin: any): Promise<any>;
}
