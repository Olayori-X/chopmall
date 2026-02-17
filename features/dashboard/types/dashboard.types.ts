export interface DashboardResponse {
  response: boolean;
  userdetails: {
    fullname: string;
    city: string;
    state: string;
    available: boolean;
  };
  business:{
    id: number;
    name: string;
    slug: string;
    logo?: string;
    user_id: number;
    whatsapp_number: string;
  }
  orders: number;
  groupedorders: {
    status: string;
    total: number;
  }[];
  sales: number;
}
