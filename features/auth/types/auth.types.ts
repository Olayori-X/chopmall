export interface LoginResponse {
  response: boolean;
  message: string;
  token?: string;
  user?: any;
  user_id?: string;
}
