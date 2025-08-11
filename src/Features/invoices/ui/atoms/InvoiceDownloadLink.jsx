import React from 'react';

export default function InvoiceDownloadLink({ onDownload }) {
  return (
    <button className="text-blue-600 hover:underline" onClick={onDownload}>
      Download PDF
    </button>
  );
}
