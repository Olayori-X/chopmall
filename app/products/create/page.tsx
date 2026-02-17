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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Add Product
      </h1>
      <ProductForm />
    </div>
  );
}
