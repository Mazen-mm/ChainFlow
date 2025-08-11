import React from 'react';
import InvoiceDownloadLink from '../atoms/InvoiceDownloadLink';

export default function InvoiceTableRow({ invoice, onDownload }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{invoice.invoiceNumber}</td>
      <td className="px-4 py-2">{invoice.order}</td>
      <td className="px-4 py-2">${invoice.totalAmount.toFixed(2)}</td>
      <td className="px-4 py-2">{new Date(invoice.createdAt).toLocaleString()}</td>
      <td className="px-4 py-2">
        <InvoiceDownloadLink onDownload={() => onDownload(invoice._id, invoice.invoiceNumber)} />
      </td>
    </tr>
  );
}
