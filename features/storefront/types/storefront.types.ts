export interface Product {
  id: number;
  name: string;
  price: number;
  is_available: boolean;
  image?: string;
}

export interface Business {
  id: number;
  name: string;
  slug: string;
  whatsapp_number: string;
  products: Product[];
}

export interface StorefrontResponse {
  success: boolean;
  message?: string;
  data?: Business;
}

export interface OrderItemPayload {
  name: string;
  price: number;
  qty: number;
}

export interface CreateOrderResponse {
  success: boolean;
  message: string;
  data?: {
    order_id: number;
    total: number;
    whatsapp_url: string;
  };
}
