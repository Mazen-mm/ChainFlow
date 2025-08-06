import { useState } from 'react';

const useOrders = () => {
  const [orders] = useState([
    {
      id: 1,
      orderCode: 'ORD-2025-1845',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Approved',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 2,
      orderCode: 'ORD-2025-1846',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Cancelled',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 3,
      orderCode: 'ORD-2025-1847',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Delivered',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 4,
      orderCode: 'ORD-2025-1848',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Ready',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 5,
      orderCode: 'ORD-2025-1849',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Shipped',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 6,
      orderCode: 'ORD-2025-1850',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'In Production',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 7,
      orderCode: 'ORD-2025-1851',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Ready',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 8,
      orderCode: 'ORD-2025-1852',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Shipped',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 9,
      orderCode: 'ORD-2025-1853',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Waiting',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 10,
      orderCode: 'ORD-2025-1854',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Shipped',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 11,
      orderCode: 'ORD-2025-1855',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Shipped',
      createdDate: '2024-01-15 09:30'
    },
    {
      id: 12,
      orderCode: 'ORD-2025-1855',
      value: 24500,
      supplier: 'TechGlobal Inc.',
      items: 12,
      status: 'Shipped',
      createdDate: '2024-01-15 09:30'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newOrder, setNewOrder] = useState({ value: '', supplier: '', items: '' });
  const itemsPerPage = 12;

  const filteredOrders = orders.filter(order =>
    order.orderCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    setSelectedOrders(prev =>
      prev.length === currentOrders.length ? [] : currentOrders.map(order => order.id)
    );
  };

  const handleCreateOrder = () => setShowCreateModal(true);
  const handleCloseModal = () => {
    setShowCreateModal(false);
    setNewOrder({ value: '', supplier: '', items: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = () => {
    if (!newOrder.value || !newOrder.supplier || !newOrder.items) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Order Created:', newOrder);
    handleCloseModal();
  };

  const handleExport = () => console.log('Export clicked');
  const handleFilter = () => console.log('Filter clicked');

  return {
    orders,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    selectedOrders,
    handleSelectOrder,
    handleSelectAll,
    showCreateModal,
    handleCreateOrder,
    handleCloseModal,
    newOrder,
    handleInputChange,
    handleSubmitOrder,
    handleExport,
    handleFilter,
    filteredOrders,
    currentOrders,
    totalPages,
    itemsPerPage,
  };
};

export default useOrders;
