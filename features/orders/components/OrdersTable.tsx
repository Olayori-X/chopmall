import { Order } from "../types/order.types";
import { OrderRow } from "./OrderRow";

export const OrdersTable = ({ orders }: { orders: Order[] }) => {
  return (
    <div className="space-y-3">
      {orders.map((order) => (
        <OrderRow key={order.id} order={order} />
      ))}
    </div>
  );
};
