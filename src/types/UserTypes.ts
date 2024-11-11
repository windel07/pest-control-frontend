export type UserRole = 'superuser' | 'administrator' | 'staff' | 'farmer';

export interface User {
  id: number;
  name: string;
  email?: string;
  first_name: string;
  last_name: string;
  role: UserRole;
}
