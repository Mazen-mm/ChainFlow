import React from 'react';
import PartnerStatusBadge from '../atoms/PartnerStatusBadge';

export default function PartnerTableRow({ partner, onUpdate }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{partner.requester}</td>
      <td className="px-4 py-2">{partner.recipient}</td>
      <td className="px-4 py-2">{new Date(partner.createdAt).toLocaleDateString()}</td>
      <td className="px-4 py-2"><PartnerStatusBadge status={partner.status} /></td>
      <td className="px-4 py-2">
        {partner.status === 'Pending' && (
          <button className="text-green-600 hover:underline" onClick={() => onUpdate(partner, 'Active')}>Accept</button>
        )}
        {partner.status === 'Pending' && (
          <button className="text-red-600 hover:underline ml-2" onClick={() => onUpdate(partner, 'Rejected')}>Reject</button>
        )}
      </td>
    </tr>
  );
}
