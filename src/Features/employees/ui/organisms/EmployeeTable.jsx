import React from 'react';
import EmployeeTableRow from '../molecules/EmployeeTableRow';

export default function EmployeeTable({ employees }) {
  return (
    <div className="overflow-x-auto rounded shadow bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeTableRow
              key={employee._id}
              employee={employee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
