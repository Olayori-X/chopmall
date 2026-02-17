import api from "@/lib/axios";

export const fetchProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const createProduct = async (formData: FormData) => {
  return api.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};


export const updateProduct = async (
  id: number,
  formData: FormData
) => {
  const res = await api.post(`/products/${id}?_method=PUT`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
