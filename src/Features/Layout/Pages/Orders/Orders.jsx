import { useState } from 'react';
import DetailsCard from '../../../../Shared/Components/Molecules/DetailsCard';
import { ClockIcon, ExportIcon, FilterIcon, InvIcon, PlusIcon, RecycleIcon, SearchIcon, TruckCheckIcon, TruckIcon } from '../../../../assets/Icons/SVG';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';

export default function Orders () {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    value: '',
    supplier: '',
    items: ''
  });

  const itemsPerPage = 12;

  // Sample orders data
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

  // Filter orders based on search term
  const filteredOrders = orders.filter(order =>
    order.orderCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  // Event handlers
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

  const handleCreateOrder = () => {
    setShowCreateModal(true);
  };

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
    
    console.log('New order created:', {
      orderCode: `ORD-2025-${1856 + orders.length}`,
      value: parseInt(newOrder.value),
      supplier: newOrder.supplier,
      items: parseInt(newOrder.items),
      status: 'Waiting',
      createdDate: new Date().toLocaleString()
    });
    handleCloseModal();
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  const handleFilter = () => {
    console.log('Filter clicked');
  };

  // Status badge helper function
  const getStatusBadge = (status) => {
    const statusConfig = {
      'approved': { bg: 'success', text: 'text-success' },
      'cancelled': { bg: 'danger', text: 'text-danger' },
      'delivered': { bg: 'success', text: 'text-success' },
      'ready': { bg: 'primary', text: 'text-primary' },
      'shipped': { bg: 'info', text: 'text-info' },
      'in production': { bg: 'warning', text: 'text-warning' },
      'waiting': { bg: 'warning', text: 'text-warning' }
    };
    
    const config = statusConfig[status.toLowerCase()] || statusConfig.waiting;
    
    return (
      <span className={`badge bg-${config.bg} bg-opacity-10 ${config.text} border border-${config.bg} border-opacity-25 d-flex align-items-center`}>
        <span className={`bg-${config.bg} rounded-circle me-2`} style={{width: '8px', height: '8px'}}></span>
        {status}
      </span>
    );
  };

  const startIndexDisplay = (currentPage - 1) * itemsPerPage + 1;
  const endIndexDisplay = Math.min(startIndexDisplay + currentOrders.length - 1, filteredOrders.length);

  return  <>
    {/* Create Order Modal */}
    {showCreateModal && (
      <div className="modal d-block m-0" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Order</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label>Value</label>
                <input type="number" name="value" className="form-control" value={newOrder.value}
                  onChange={handleInputChange} placeholder="e.g., 24500" required />
              </div>
              <div className="mb-3">
                <label>Supplier</label>
                <input type="text" name="supplier" className="form-control" value={newOrder.supplier}
                  onChange={handleInputChange} placeholder="e.g., TechGlobal Inc." required />
              </div>
              <div className="mb-3">
                <label>Items</label>
                <input type="number" name="items" className="form-control" value={newOrder.items}
                  onChange={handleInputChange} placeholder="e.g., 12" required />
              </div>
              <div className="d-flex gap-3">
                <button type="button" className="btn btn-secondary flex-fill" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary flex-fill" onClick={handleSubmitOrder}>
                  Create Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
      {/* Details Card */}
      <div className="row flex-row">
        <DetailsCard detailName={'Total Items'} detailNum={'2,847'} icon={<InvIcon fill='none' stroke={'#5C8DFF'}/>}/>
        <DetailsCard detailName={'Low Stock Alerts'} detailNum={'24'} icon={<ClockIcon stroke='#5C8DFF'/>}/>
        <DetailsCard detailName={'Incoming Shipments'} detailNum={'12'} icon={<TruckIcon fill={'#5C8DFF'}/>}/>
        <DetailsCard detailName={'Total Value'} detailNum={'$1.2M'} icon={<TruckCheckIcon stroke='#5C8DFF'/>}/>
      </div>
      {/* Details Card */}

      {/* Buttons */}
      <div className="row align-items-center my-2">
        <div className="col-12 col-lg-6">
          <div className='input-group'>
            <span className="input-group-text whiteBg"><SearchIcon /></span>
            <input type="search" className="form-control whiteBg" placeholder="Search Orders..."
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="col-3 col-lg-2">
          <DashBtn BtnName="Create Order" BtnIcon={<PlusIcon />} BtnColor='btn-primary'
            onClick={handleCreateOrder}  />
        </div>
        <div className="col-9 col-lg-4">
          <div className="d-flex justify-content-between">
            <DashBtn BtnName="Delete" BtnIcon={<RecycleIcon stroke='#A00303' />} BtnColor='border-0'
              BtnStyle={{backgroundColor: '#F6D2D2' , color: '#A00303'}} />
            <DashBtn BtnName="Export" BtnIcon={<ExportIcon />} onClick={handleExport} />
            <DashBtn BtnName="Filter" BtnIcon={<FilterIcon />} onClick={handleFilter} />
          </div>
        </div>
      </div>
      {/* Orders Table */}
      <div className="table-responsive rounded-3 border">
        <table className="table table-hover">
          <thead className="table-primary">
            <tr>
              <th>
                <input type="checkbox"className="form-check-input" onChange={handleSelectAll}
                  checked={selectedOrders.length === currentOrders.length && currentOrders.length > 0} />
              </th>
              <th>Order code</th>
              <th>Value</th>
              <th>Supplier</th>
              <th>Items</th>
              <th>Status</th>
              <th>Created date</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input type="checkbox" className="form-check-input"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)} />
                </td>
                <td className="fw-semibold text-dark">{order.orderCode}</td>
                <td className="text-dark">${order.value.toLocaleString()}</td>
                <td className="text-muted">{order.supplier}</td>
                <td className="text-muted">{order.items} items</td>
                <td>{getStatusBadge(order.status)}</td>
                <td className="text-muted">{order.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      {/* Pagination */}
        <div className="d-flex align-items-center justify-content-between px-3">
          <div className="text-muted small">
            Showing {startIndexDisplay} to {endIndexDisplay} of {filteredOrders.length} entries
          </div>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(1)} 
                disabled={currentPage === 1}>
                &laquo;
              </button>
            </li>
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}>
                &lsaquo;
              </button>
            </li>
            {[...Array(Math.min(3, totalPages))].map((_, i) => {
              const pageNum = Math.max(1, Math.min(totalPages - 2, currentPage - 1)) + i;
              if (pageNum > totalPages) return null;
              return (
                <li key={pageNum}>
                  <button className="page-link" onClick={() => setCurrentPage(pageNum)}>
                    {pageNum}
                  </button>
                </li>
              );
            })}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages} >
                &rsaquo;
              </button>
            </li>
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(totalPages)} 
                disabled={currentPage === totalPages} >
                &raquo;
              </button>
            </li>
          </ul>
        </div>
      </div>
  </>
};



