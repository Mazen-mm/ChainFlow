// Invoice types inferred from API
export interface Invoice {
  _id: string;
  invoiceNumber: string;
  order: string;
  totalAmount: number;
  createdAt: string;
}

export interface InvoiceListResponse {
  status: string;
  data: Invoice[];
}
