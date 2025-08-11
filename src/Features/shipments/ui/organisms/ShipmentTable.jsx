import React from 'react';
import ShipmentTableRow from '../molecules/ShipmentTableRow';

export default function ShipmentTable({ shipments, onView }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Shipment ID</th>
            <th className="px-4 py-2 text-left">Order</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Shipped At</th>
            <th className="px-4 py-2 text-left">Delivered At</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <ShipmentTableRow
              key={shipment._id}
              shipment={shipment}
              onView={onView}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
