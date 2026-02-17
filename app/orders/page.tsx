"use client";

import { useOrders } from "@/features/orders/hooks/useOrders";
import { OrdersTable } from "@/features/orders/components/OrdersTable";
import { OrdersSummary } from "@/features/orders/components/OrdersSummary";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const { data, loading, error } = useOrders();
  const router = useRouter();
  
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if(storedToken === null) {
      console.log(storedToken);
      router.push("/login");
    }
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  if (!data?.success) {
    return <p>{data?.message}</p>;
  }

  const orders = data.data?.orders.data ?? [];
  const todayTotal = data.data?.today_total ?? 0;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Orders</h1>

      <OrdersSummary todayTotal={todayTotal} />

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <OrdersTable orders={orders} />
      )}
    </div>
  );
}
