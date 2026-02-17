export interface Product {
  id: number;
  name: string;
  price: number;
  stock?: number;
  created_at: string;
  image?: string;
}

export interface ProductsResponse {
  success: boolean;
  data?: Product[];
  message?: string;
}
