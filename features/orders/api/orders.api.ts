import api from "@/lib/axios";
import {
  OrdersDashboardResponse,
  OrderStatus,
} from "../types/order.types";

export const fetchOrders = async () => {
  const res = await api.get<OrdersDashboardResponse>("/orders");
  return res.data;
};

export const updateOrderStatus = async (
  orderId: number,
  status: OrderStatus
) => {
  const res = await api.patch(`/orders/${orderId}/status`, {
    status,
  });

  return res.data;
};
