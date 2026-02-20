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
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{business?.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {business?.products && business.products.length > 0 ? (
            business.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                slug={slug}
              />
            ))
          ) : (
            <p className="text-gray-600">No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}
