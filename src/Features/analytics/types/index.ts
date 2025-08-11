// Analytics types inferred from API
export interface AnalyticsKpis {
  inventoryValue: number;
  orderedValue: number;
  remainingBudget: number;
  productCount: number;
  orderCount: number;
  partnerCount: number;
}

export interface AnalyticsKpisResponse {
  status: string;
  data: AnalyticsKpis;
}
