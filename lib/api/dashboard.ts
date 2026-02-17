import api from "@/lib/axios";

export const fetchDashboard = async () => {
  const res = await api.get("/dashboard");
  return res.data;
};

