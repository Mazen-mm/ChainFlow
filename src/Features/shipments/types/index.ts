// Shipment types (example, adjust as needed)
export interface Shipment {
  _id: string;
  order: string;
  status: string;
  shippedAt?: string;
  deliveredAt?: string;
}

export interface ShipmentListResponse {
  status: string;
  data: Shipment[];
}
