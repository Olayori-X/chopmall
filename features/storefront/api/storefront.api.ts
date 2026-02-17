import api from "@/lib/axios";
import {
  StorefrontResponse,
  CreateOrderResponse,
  OrderItemPayload,
} from "../types/storefront.types";

export const fetchStorefront = async (slug: string) => {
  const url = slug ? `/order/${slug}` : `/order`;
  const res = await api.get<StorefrontResponse>(url);
  return res.data;
};

export const createOrder = async (
  slug: string,
  payload: {
    customer_name: string;
    customer_phone: string;
    note?: string;
    items: OrderItemPayload[];
  }
) => {
  const res = await api.post<CreateOrderResponse>(
    `/order/${slug}`,
    payload
  );

  return res.data;
};
