"use client";
import { ProductForm } from "@/features/products/components/ProductForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateProductPage() {
  const router = useRouter();
  
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if(storedToken === null) {
      console.log(storedToken);
      router.push("/login");
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Add Product
        </h1>
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <ProductForm />
        </div>
      </div>
    </div>
  );
}
