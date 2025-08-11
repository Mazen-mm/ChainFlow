// Partner Connection types inferred from API
export interface PartnerConnection {
  _id: string;
  requester: string;
  recipient: string;
  status: string;
  createdAt: string;
  message?: string;
}

export interface PartnerConnectionListResponse {
  status: string;
  data: PartnerConnection[];
}
