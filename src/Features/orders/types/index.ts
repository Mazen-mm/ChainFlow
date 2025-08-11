// Order types inferred from API
export interface OrderItem {
  sku: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface Order {
  _id: string;
  orderNumber: string;
  buyer: string;
  supplier: string;
  status: string;
  totalAmount: number;
  createdAt: string;
  items?: OrderItem[];
  deliveryLocation?: string;
  requestedDeliveryDate?: string;
}

export interface OrderListResponse {
  status: string;
  results: number;
  page: number;
  limit: number;
  total: number;
  data: Order[];
}

export interface OrderDetailResponse {
  status: string;
  data: Order;
}
