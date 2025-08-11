import React from 'react';
import ProductBadge from '../atoms/ProductBadge';
import ProductUnit from '../atoms/ProductUnit';

export default function ProductTableRow({ product, onEdit, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{product.productName}</td>
      <td className="px-4 py-2">{product.sku}</td>
      <td className="px-4 py-2">${product.unitPrice.toFixed(2)}</td>
      <td className="px-4 py-2"><ProductUnit unit={product.unit} /></td>
      <td className="px-4 py-2">{product.category}</td>
      <td className="px-4 py-2"><ProductBadge isActive={product.isActive} /></td>
      <td className="px-4 py-2 flex gap-2">
        <button className="text-blue-600 hover:underline" onClick={() => onEdit(product)}>Edit</button>
        <button className="text-red-600 hover:underline" onClick={() => onDelete(product._id)}>Delete</button>
      </td>
    </tr>
  );
}
