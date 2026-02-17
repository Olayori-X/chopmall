import api from "@/lib/axios";
import {
  BusinessStatusResponse,
  CreateBusinessResponse,
} from "../types/business.types";

export const checkBusinessStatus = async () => {
  const res = await api.get<BusinessStatusResponse>("/business/create");
  return res.data;
};

export const createBusiness = async (formData: FormData) => {
  const res = await api.post<CreateBusinessResponse>(
    "/business",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};
