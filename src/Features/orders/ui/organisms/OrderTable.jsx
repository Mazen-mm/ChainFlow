import React from 'react';
import OrderTableRow from '../molecules/OrderTableRow';

export default function OrderTable({ orders, onView }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Order #</th>
            <th className="px-4 py-2 text-left">Buyer</th>
            <th className="px-4 py-2 text-left">Supplier</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Created</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderTableRow
              key={order._id}
              order={order}
              onView={onView}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
