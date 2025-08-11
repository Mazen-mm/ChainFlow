import React from 'react';
import PartnerTableRow from '../molecules/PartnerTableRow';

export default function PartnerTable({ partners, onUpdate }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Requester</th>
            <th className="px-4 py-2 text-left">Recipient</th>
            <th className="px-4 py-2 text-left">Created</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <PartnerTableRow
              key={partner._id}
              partner={partner}
              onUpdate={onUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
