import React from 'react';
import DocumentDownloadLink from '../atoms/DocumentDownloadLink';

export default function DocumentTableRow({ document, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{document.fileName}</td>
      <td className="px-4 py-2">{document.uploadedBy}</td>
      <td className="px-4 py-2">{new Date(document.uploadedAt).toLocaleString()}</td>
      <td className="px-4 py-2"><DocumentDownloadLink url={document.url} fileName={document.fileName} /></td>
      <td className="px-4 py-2">
        <button className="text-red-600 hover:underline" onClick={() => onDelete(document._id)}>Delete</button>
      </td>
    </tr>
  );
}
