export type OrderStatus =
  | "new"
  | "processing"
  | "completed"
  | "cancelled";

export interface OrderItem {
  id: number;
  product_name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  total_amount: number;
  status: OrderStatus;
  created_at: string;
  items: OrderItem[];
}

export interface PaginatedOrders {
  data: Order[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface OrdersDashboardResponse {
  success: boolean;
  message?: string;
  data?: {
    orders: PaginatedOrders;
    today_total: number;
  };
}
