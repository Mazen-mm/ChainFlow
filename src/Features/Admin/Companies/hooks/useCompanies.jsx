import { useState } from 'react';

const useCompanies = () => {
  const [Companies] = useState([
    {
      id: 1,
      name: 'John',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Paid',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 2,
      name: 'John',
      manager: "Emma",
      type: 'Retail',
      payment: 'Paid',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 3,
      name: 'John',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Due',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 4,
      name: 'ola',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Paid',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 5,
      name: 'mio',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Paid',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 6,
      name: 'ahmed',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Due',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 7,
      name: 'hams',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Paid',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 8,
      name: 'sia',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Paid',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 9,
      name: 'adel',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Due',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 10,
      name: 'harry',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Paid',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 11,
      name: 'pinto',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Paid',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
    {
      id: 12,
      name: 'alex',
      manager: "Emma",
      type: 'Game Dev',
      payment: 'Due',
      plan: 'Basic',
      employeeCount: 20,
      action: 'delete'
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(Companies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = Companies.slice(startIndex, startIndex + itemsPerPage);
  
  const [selectedUsers, setSelectedUsers] = useState([]);


  const handleSelectUser = (companyId) => {
    setSelectedUsers(prev =>
      prev.includes(companyId)
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUsers(prev =>
      prev.length === currentUsers.length ? [] : currentUsers.map(User => User.id)
    );
  };

  return {
    Companies,
    currentPage,
    setCurrentPage,
    currentUsers,
    totalPages,
    itemsPerPage,
    handleSelectUser,
    handleSelectAll,
    selectedUsers
  };
};

export default useCompanies;
