"use client";

import { useEffect, useState } from "react";
import { fetchOrders } from "../api/orders.api";
import { OrdersDashboardResponse } from "../types/order.types";

export const useOrders = () => {
  const [data, setData] =
    useState<OrdersDashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders()
      .then(setData)
      .catch((err) => {
        if (err.response?.status === 404) {
          setData(err.response.data);
        } else {
          setError("Failed to load orders");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
