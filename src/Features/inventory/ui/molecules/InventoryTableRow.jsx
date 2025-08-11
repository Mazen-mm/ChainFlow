import React from 'react';
import InventoryStatusBadge from '../atoms/InventoryStatusBadge';

export default function InventoryTableRow({ item, onEdit }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{item.product.productName}</td>
      <td className="px-4 py-2">{item.product.sku}</td>
      <td className="px-4 py-2">{item.onHand}</td>
      <td className="px-4 py-2">{item.reserved}</td>
      <td className="px-4 py-2">{item.minimumThreshold}</td>
      <td className="px-4 py-2">{item.location.locationName}</td>
      <td className="px-4 py-2"><InventoryStatusBadge status={item.status} /></td>
      <td className="px-4 py-2">
        <button className="text-blue-600 hover:underline" onClick={() => onEdit(item)}>Edit</button>
      </td>
    </tr>
  );
}
