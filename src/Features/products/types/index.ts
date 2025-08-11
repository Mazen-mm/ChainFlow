// Product types inferred from API
export interface Product {
  _id: string;
  productName: string;
  sku: string;
  unitPrice: number;
  unit: string;
  category: string;
  isActive: boolean;
  inventory?: {
    onHand: number;
    reserved: number;
    minimumThreshold: number;
  };
}

export interface ProductListResponse {
  status: string;
  results: number;
  page: number;
  limit: number;
  total: number;
  data: Product[];
}

export interface ProductDetailResponse {
  status: string;
  data: Product;
}
