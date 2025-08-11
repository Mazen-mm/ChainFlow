import React from 'react';
import OrderStatusBadge from '../atoms/OrderStatusBadge';

export default function OrderTableRow({ order, onView }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{order.orderNumber}</td>
      <td className="px-4 py-2">{order.buyer}</td>
      <td className="px-4 py-2">{order.supplier}</td>
      <td className="px-4 py-2">${order.totalAmount.toFixed(2)}</td>
      <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
      <td className="px-4 py-2"><OrderStatusBadge status={order.status} /></td>
      <td className="px-4 py-2">
        <button className="text-blue-600 hover:underline" onClick={() => onView(order)}>View</button>
      </td>
    </tr>
  );
}
