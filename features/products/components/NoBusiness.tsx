import Link from "next/link";

export const NoBusiness = () => (
  <div className="text-center py-12">
    <h2 className="text-xl font-semibold">
      You don’t have a business yet
    </h2>
    <p className="text-gray-500 mt-2">
      Create a business to start adding products.
    </p>

    <Link
      href="/business/create"
      className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg"
    >
      Create Business
    </Link>
  </div>
);
