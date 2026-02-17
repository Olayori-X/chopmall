"use client";

import { useParams } from "next/navigation";
import { useStorefront } from "@/features/storefront/hooks/useStorefront";
import { ProductCard } from "@/features/storefront/components/ProductCard";

export default function StorefrontPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data, loading } = useStorefront(slug);

  if (loading) return <p>Loading store...</p>;

  if (!data?.success) {
    return <p>{data?.message || "Store not found"}</p>;
  }

  const business = data.data;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">{business?.name}</h1>

      <div className="grid grid-cols-2 gap-4">
        {business?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            slug={slug}
          />
        ))}
      </div>
    </div>
  );
}
