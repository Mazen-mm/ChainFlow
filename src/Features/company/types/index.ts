// Company types inferred from API
export interface Company {
  _id: string;
  companyName: string;
  status: string;
  createdAt: string;
}

export interface CompanyListResponse {
  status: string;
  results: number;
  page: number;
  limit: number;
  total: number;
  data: Company[];
}

export interface CompanyDetailResponse {
  status: string;
  data: Company;
}
