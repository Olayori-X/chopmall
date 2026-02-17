import Link from "next/link";
import { Product } from "../types/product.types";

export const ProductRow = ({ product }: { product: Product }) => (
  <tr className="border-t">
    <td className="p-3">
      <img src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${product.image}`} className="w-10 h-10 rounded object-cover" />
    </td>
    <td className="p-3">{product.name}</td>
    <td className="p-3">₦{product.price}</td>
    <td className="p-3">
      {new Date(product.created_at).toLocaleDateString()}
    </td>
    <td className="p-3 text-right">
      <Link
        href={`/products/${product.id}/edit`}
        className="text-sm text-orange-600"
      >
        Edit
      </Link>
    </td>
  </tr>
);
