import { useState } from 'react';

const useUsers = () => {
  const [Users] = useState([
    {
      id: 1,
      name: 'john',
      email: 24500,
      role: 'Manager',
      company: 'TechGlobal Inc.',
      status: 'active',
      action: '2024-01-15 09:30'
    },
    {
      id: 2,
      name: 'doe',
      email: 24500,
      role: 'Employee',
      company: 'jason',
      status: 'inactive',
      action: '2024-01-15 09:30'
    },
    {
      id: 3,
      name: 'mia',
      email: 24500,
      role: 'Manager',
      company: 'TechGlobal Inc.',
      status: 'active',
      action: '2024-01-15 09:30'
    },
    {
      id: 4,
      name: 'ola',
      email: 24500,
      role: 'Employee',
      company: 'TechGlobal Inc.',
      status: 'inactive',
      action: '2024-01-15 09:30'
    },
    {
      id: 5,
      name: 'mio',
      email: 24500,
      role: 'Manager',
      company: 'TechGlobal Inc.',
      status: 'active',
      action: '2024-01-15 09:30'
    },
    {
      id: 6,
      name: 'ahmed',
      email: 24500,
      role: 'Employee',
      company: 'TechGlobal Inc.',
      status: 'inactive',
      action: '2024-01-15 09:30'
    },
    {
      id: 7,
      name: 'hams',
      email: 24500,
      role: 'Manager',
      company: 'TechGlobal Inc.',
      status: 'active',
      action: '2024-01-15 09:30'
    },
    {
      id: 8,
      name: 'sia',
      email: 24500,
      role: 'Employee',
      company: 'TechGlobal Inc.',
      status: 'inactive',
      action: '2024-01-15 09:30'
    },
    {
      id: 9,
      name: 'adel',
      email: 24500,
      role: 'Manager',
      company: 'TechGlobal Inc.',
      status: 'active',
      action: '2024-01-15 09:30'
    },
    {
      id: 10,
      name: 'harry',
      email: 24500,
      role: 'Employee',
      company: 'TechGlobal Inc.',
      status: 'inactive',
      action: '2024-01-15 09:30'
    },
    {
      id: 11,
      name: 'pinto',
      email: 24500,
      role: 'Manager',
      company: 'TechGlobal Inc.',
      status: 'active',
      action: '2024-01-15 09:30'
    },
    {
      id: 12,
      name: 'alex',
      email: 24500,
      role: 'Employee',
      company: 'TechGlobal Inc.',
      status: 'inactive',
      action: '2024-01-15 09:30'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '' , email: '', company: '' });
  const itemsPerPage = 12;

  const filteredUsers = Users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectUser = (UserId) => {
    setSelectedUsers(prev =>
      prev.includes(UserId)
        ? prev.filter(id => id !== UserId)
        : [...prev, UserId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUsers(prev =>
      prev.length === currentUsers.length ? [] : currentUsers.map(User => User.id)
    );
  };

  const handleCreateUser = () => setShowCreateModal(true);
  const CloseModal = () => {
    setShowCreateModal(false);
    setNewUser({  name: '' , email: '', role: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert('Please fill in all fields');
      return;
    }
    console.log('User Added:', newUser);
    CloseModal();
  };

  const handleFilter = () => console.log('Filter clicked');

  return {
    Users,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    selectedUsers,
    handleSelectUser,
    handleSelectAll,
    showCreateModal,
    handleCreateUser,
    CloseModal,
    newUser,
    handleInputChange,
    handleSubmitUser,
    handleFilter,
    filteredUsers,
    currentUsers,
    totalPages,
    itemsPerPage,
  };
};

export default useUsers;
