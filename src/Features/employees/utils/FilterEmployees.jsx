export function filterEmployees(employees, searchTerm, activeFilter) {
  return employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = activeFilter === 'All' || employee.department === activeFilter;
    return matchesSearch && matchesDepartment;
  });
}
