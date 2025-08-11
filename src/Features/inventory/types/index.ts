// Inventory types inferred from API
export interface InventoryItem {
  _id: string;
  product: {
    productName: string;
    sku: string;
  };
  onHand: number;
  reserved: number;
  minimumThreshold: number;
  status: string;
  location: {
    locationName: string;
  };
  lastUpdated?: string;
}

export interface InventoryListResponse {
  status: string;
  results: number;
  page: number;
  limit: number;
  total: number;
  data: InventoryItem[];
}

export interface InventoryDetailResponse {
  status: string;
  data: InventoryItem;
}
