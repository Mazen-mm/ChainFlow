// Document types inferred from API
export interface Document {
  _id: string;
  fileName: string;
  uploadedBy: string;
  uploadedAt: string;
  url: string;
}

export interface DocumentListResponse {
  status: string;
  data: Document[];
}
