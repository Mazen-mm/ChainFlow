import React from 'react';
import CompanyStatusBadge from '../atoms/CompanyStatusBadge';

export default function CompanyTableRow({ company, onApprove }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{company.companyName}</td>
      <td className="px-4 py-2">{new Date(company.createdAt).toLocaleDateString()}</td>
      <td className="px-4 py-2"><CompanyStatusBadge status={company.status} /></td>
      <td className="px-4 py-2">
        {company.status === 'pending' && (
          <button className="text-green-600 hover:underline" onClick={() => onApprove(company)}>Approve</button>
        )}
      </td>
    </tr>
  );
}
