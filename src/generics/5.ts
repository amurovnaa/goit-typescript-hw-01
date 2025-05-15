export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}
type UserRoleDescriptions = Record<UserRole, string>;

const RoleDescription: UserRoleDescriptions = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
