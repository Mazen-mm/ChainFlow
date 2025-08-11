import React from 'react';
import InventoryTableRow from '../molecules/InventoryTableRow';

export default function InventoryTable({ items, onEdit }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Product</th>
            <th className="px-4 py-2 text-left">SKU</th>
            <th className="px-4 py-2 text-left">On Hand</th>
            <th className="px-4 py-2 text-left">Reserved</th>
            <th className="px-4 py-2 text-left">Min Threshold</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <InventoryTableRow
              key={item._id}
              item={item}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
