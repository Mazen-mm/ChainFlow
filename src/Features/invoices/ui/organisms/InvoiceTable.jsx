import React from 'react';
import InvoiceTableRow from '../molecules/InvoiceTableRow';

export default function InvoiceTable({ invoices, onDownload }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Invoice #</th>
            <th className="px-4 py-2 text-left">Order</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Created</th>
            <th className="px-4 py-2 text-left">Download</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <InvoiceTableRow
              key={invoice._id}
              invoice={invoice}
              onDownload={onDownload}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
