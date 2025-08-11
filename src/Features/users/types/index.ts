// User types inferred from API
export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'staff' | 'platform_admin';
  status: 'active' | 'invited';
}

export interface UserListResponse {
  status: string;
  data: User[];
}
