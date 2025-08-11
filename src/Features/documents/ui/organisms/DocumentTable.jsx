import React from 'react';
import DocumentTableRow from '../molecules/DocumentTableRow';

export default function DocumentTable({ documents, onDelete }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">File Name</th>
            <th className="px-4 py-2 text-left">Uploaded By</th>
            <th className="px-4 py-2 text-left">Uploaded At</th>
            <th className="px-4 py-2 text-left">Download</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <DocumentTableRow
              key={document._id}
              document={document}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
