// Team types inferred from API
export interface TeamInvite {
  email: string;
  role: 'admin' | 'manager' | 'staff';
  message?: string;
}

export interface TeamInviteResponse {
  status: string;
  message: string;
}

export interface TeamVerifyInvite {
  token: string;
  name: string;
  password: string;
}

export interface TeamVerifyInviteResponse {
  status: string;
  message: string;
}
