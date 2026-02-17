import { Product } from "../types/product.types";
import { ProductRow } from "./ProductRow";

export const ProductTable = ({ products }: { products: Product[] }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left p-3">Name</th>
          <th className="text-left p-3">Price</th>
          <th className="text-left p-3">Created</th>
          <th className="p-3"></th>
        </tr>
      </thead>
      <tbody>
        {(
          products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))
        )}
      </tbody>
    </table>
  </div>
);
