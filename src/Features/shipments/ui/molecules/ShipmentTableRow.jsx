import React from 'react';
import ShipmentStatusBadge from '../atoms/ShipmentStatusBadge';

export default function ShipmentTableRow({ shipment, onView }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{shipment._id}</td>
      <td className="px-4 py-2">{shipment.order}</td>
      <td className="px-4 py-2"><ShipmentStatusBadge status={shipment.status} /></td>
      <td className="px-4 py-2">{shipment.shippedAt ? new Date(shipment.shippedAt).toLocaleString() : '-'}</td>
      <td className="px-4 py-2">{shipment.deliveredAt ? new Date(shipment.deliveredAt).toLocaleString() : '-'}</td>
      <td className="px-4 py-2">
        <button className="text-blue-600 hover:underline" onClick={() => onView(shipment)}>View</button>
      </td>
    </tr>
  );
}
