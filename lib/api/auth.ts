import api from "@/lib/axios";

export const verifyOtp = async (data: {
  otp: string;
  user_id: string;
}) => {
  const response = await api.post("/verify-otp", data);
  return response.data;
};


export const login = async (data: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/login", data);
  return response.data;
};