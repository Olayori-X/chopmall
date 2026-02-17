import Link from "next/link";

export const EmptyProducts = () => (
  <div className="text-center py-12">
    <h2 className="text-xl font-semibold">
      No products yet
    </h2>
    <p className="text-gray-500 mt-2">
      Start selling by adding your first product.
    </p>

    <Link
      href="/products/create"
      className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg"
    >
      Add Product
    </Link>
  </div>
);
