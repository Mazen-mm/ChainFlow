import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../slice';
import EmployeeTable from '../ui/organisms/EmployeeTable';

export default function EmployeesListPage() {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>
      </div>
      <EmployeeTable employees={employees} />
    </div>
  );
}
