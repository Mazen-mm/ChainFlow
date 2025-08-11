import React from 'react';
import CompanyTableRow from '../molecules/CompanyTableRow';

export default function CompanyTable({ companies, onApprove }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Company Name</th>
            <th className="px-4 py-2 text-left">Created</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <CompanyTableRow
              key={company._id}
              company={company}
              onApprove={onApprove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
