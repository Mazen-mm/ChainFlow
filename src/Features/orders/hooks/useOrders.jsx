
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, createOrder, updateOrder, deleteOrder } from '../slice';
  // Delete Order
  const handleDeleteOrder = (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      dispatch(deleteOrder(orderId));
    }
  };

  // Bulk Delete
  const handleBulkDelete = () => {
    if (selectedOrders.length === 0) return;
    if (window.confirm('Are you sure you want to delete selected orders?')) {
      selectedOrders.forEach(id => dispatch(deleteOrder(id)));
      setSelectedOrders([]);
    }
  };

const itemsPerPage = 12;

const useOrders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(state => state.orders);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newOrder, setNewOrder] = useState({ value: '', supplier: '', items: [] });

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  // Filtering
  const filteredOrders = (orders || []).filter(order =>
    (order.orderNumber || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (order.supplier || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (order.status || '').toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  // Selection
  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };
  const handleSelectAll = () => {
    setSelectedOrders(prev =>
      prev.length === currentOrders.length ? [] : currentOrders.map(order => order._id)
    );
  };

  // Create Order
  const handleCreateOrder = () => setShowCreateModal(true);
  const handleCloseModal = () => {
    setShowCreateModal(false);
    setNewOrder({ value: '', supplier: '', items: '' });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmitOrder = (orderData) => {
    const order = orderData || newOrder;
    if (!order.value || !order.supplier || !order.items || order.items.length === 0) {
      alert('Please fill in all fields and add at least one product');
      return;
    }
    dispatch(createOrder({
      supplierId: order.supplier,
      data: {
        totalAmount: Number(order.value),
        items: order.items.map(item => ({
          productId: item.productId,
          productName: item.productName,
          quantity: Number(item.quantity),
        })),
      },
    }));
    handleCloseModal();
  };

  // Export/Filter (implement as needed)
  const handleExport = () => console.log('Export clicked');
  const handleFilter = () => console.log('Filter clicked');

  return {
    orders,
    loading,
    error,
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
  setNewOrder,
  handleInputChange,
  handleSubmitOrder,
    handleExport,
    handleFilter,
    filteredOrders,
    currentOrders,
    totalPages,
    itemsPerPage,
  handleDeleteOrder,
  handleBulkDelete,
  };
};

export default useOrders;
