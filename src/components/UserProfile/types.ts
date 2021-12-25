export interface UserProfileProps {
  className?: string;
  name?: string;
  userRole?: UserRoles;
}

export type UserRoles = 'manager' | 'admin' | 'owner';
