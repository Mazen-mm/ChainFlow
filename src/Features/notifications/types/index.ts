// Notification types inferred from API
export interface Notification {
  _id: string;
  type: string;
  title: string;
  message: string;
  priority: string;
  isRead: boolean;
  createdAt: string;
}

export interface NotificationListResponse {
  status: string;
  results: number;
  page: number;
  limit: number;
  total: number;
  data: Notification[];
}
