export interface Business {
  id: number;
  name: string;
  slug: string;
  whatsapp_number: string;
  logo?: string | null;
}

export interface BusinessStatusResponse {
  success: boolean;
  message: string;
}

export interface CreateBusinessResponse {
  success: boolean;
  message: string;
  data: Business;
}
