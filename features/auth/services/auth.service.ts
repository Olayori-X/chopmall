import api from "@/lib/axios";

export const signup = async (data: any) => {
  const response = await api.post("/signup", data);
  console.log("Signup response:", response);
  return response.data;
};
