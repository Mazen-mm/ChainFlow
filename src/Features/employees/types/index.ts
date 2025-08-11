// Employee types inferred from API and staff assignment
export interface Employee {
  _id: string;
  name: string;
  email: string;
  role: 'staff';
  status: 'active' | 'invited';
}

export interface EmployeeListResponse {
  status: string;
  data: Employee[];
}
