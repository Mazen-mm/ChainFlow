

import { useState, useMemo } from 'react';
import { employeesData } from '../utils/employeesData';
import { filterEmployees } from '../utils/filterEmployees';

export function useEmployees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEmployees = useMemo(
    () => filterEmployees(employeesData, searchTerm, activeFilter),
    [searchTerm, activeFilter]
  );

  const stats = useMemo(() => {
    const total = employeesData.length;
    const inShift = employeesData.filter(emp => emp.status === 'In Shift').length;
    const outOfShift = employeesData.filter(emp => emp.status === 'Out of Shift').length;
    return { total, inShift, outOfShift };
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    activeFilter,
    setActiveFilter,
    filteredEmployees,
    stats,
  };
}
