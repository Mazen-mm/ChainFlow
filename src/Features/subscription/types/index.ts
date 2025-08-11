// Subscription types inferred from API
export interface Subscription {
  subscriptionId: string;
  planId: string;
  status: string;
}

export interface SubscriptionResponse {
  status: string;
  message: string;
  data: Subscription;
}
