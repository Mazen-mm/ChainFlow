import React from 'react';
import EmployeeStatusBadge from '../atoms/EmployeeStatusBadge';

export default function EmployeeTableRow({ employee }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 font-medium">{employee.name}</td>
      <td className="px-4 py-2">{employee.email}</td>
      <td className="px-4 py-2"><EmployeeStatusBadge status={employee.status} /></td>
    </tr>
  );
}
