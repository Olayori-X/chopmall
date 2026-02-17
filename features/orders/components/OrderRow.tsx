"use client";

import { Order } from "../types/order.types";
import { useUpdateOrderStatus } from "../hooks/useUpdateOrderStatus";

export const OrderRow = ({ order }: { order: Order }) => {
  const { updateStatus, loadingId } = useUpdateOrderStatus();

  const isUpdating = loadingId === order.id;

  return (
    <div className="border rounded p-4 space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">
            Order #{order.id}
          </h3>
          <p className="text-sm text-gray-500">
            {new Date(order.created_at).toLocaleString()}
          </p>
        </div>

        <div className="text-right">
          <p className="font-bold">
            ₦{order.total_amount.toLocaleString()}
          </p>
          <p className="text-sm capitalize">{order.status}</p>
        </div>
      </div>

      {/* Items */}
      <div className="bg-gray-50 p-3 rounded space-y-2">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-sm"
          >
            <span>
              {item.product_name} × {item.quantity}
            </span>
            <span>
              ₦{(item.price * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Status Controls */}
      <div className="flex gap-2 flex-wrap">
        {["new", "processing", "completed", "cancelled"].map(
          (status) => (
            <button
              key={status}
              disabled={isUpdating || order.status === status}
              onClick={() =>
                updateStatus(order.id, status as any)
              }
              className={`px-3 py-1 rounded text-sm border ${
                order.status === status
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {isUpdating ? "Updating..." : status}
            </button>
          )
        )}
      </div>
    </div>
  );
};
