"use client";

import { useState } from "react";
import { updateOrderStatus } from "../api/orders.api";
import { OrderStatus } from "../types/order.types";

export const useUpdateOrderStatus = () => {
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const updateStatus = async (
    orderId: number,
    status: OrderStatus,
    onSuccess?: () => void
  ) => {
    try {
      setLoadingId(orderId);

      await updateOrderStatus(orderId, status);

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Status update failed", error);
    } finally {
      setLoadingId(null);
    }
  };

  return { updateStatus, loadingId };
};
