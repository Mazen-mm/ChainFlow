
import getStatusBadge from '../../utails/getStatusBadge';

const OrdersTable = ({
  currentOrders,
  selectedOrders,
  handleSelectOrder,
  handleSelectAll,
  currentPage,
  setCurrentPage,
  totalPages,
  filteredOrders,
  itemsPerPage,
  handleDeleteOrder,
  handleBulkDelete,
}) => {
  const startIndexDisplay = (currentPage - 1) * itemsPerPage + 1;
  const endIndexDisplay = Math.min(startIndexDisplay + currentOrders.length - 1, filteredOrders.length);

  return (
    <div className="table-responsive rounded-3 border">
      <div className="d-flex justify-content-end p-2">
        <button className="btn btn-danger btn-sm" onClick={handleBulkDelete} disabled={selectedOrders.length === 0}>
          Delete Selected
        </button>
      </div>
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>
              <input type="checkbox" className="form-check-input" onChange={handleSelectAll}
                checked={selectedOrders.length === currentOrders.length && currentOrders.length > 0} />
            </th>
            <th>Order code</th>
            <th>Value</th>
            <th>Supplier</th>
            <th>Items</th>
            <th>Status</th>
            <th>Created date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order._id}>
              <td>
                <input type="checkbox" className="form-check-input"
                  checked={selectedOrders.includes(order._id)}
                  onChange={() => handleSelectOrder(order._id)} />
              </td>
              <td className="fw-semibold text-dark">{order.orderNumber}</td>
              <td className="text-dark">${order.totalAmount?.toLocaleString?.() ?? order.totalAmount}</td>
              <td className="text-muted">{order.supplier?.name || order.supplier || '-'}</td>
              <td className="text-muted">{Array.isArray(order.items) ? order.items.length : order.items} items</td>
              <td>{getStatusBadge(order.status)}</td>
              <td className="text-muted">{order.createdAt ? new Date(order.createdAt).toLocaleString() : '-'}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteOrder(order._id)}>
                  Delete
                </button>
              </td>
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
            <button className="page-link" onClick={() => setCurrentPage(1)}>&laquo;</button>
          </li>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>&lsaquo;</button>
          </li>
          {[...Array(Math.min(3, totalPages))].map((_, i) => {
            const pageNum = Math.max(1, Math.min(totalPages - 2, currentPage - 1)) + i;
            return (
              <li key={pageNum}>
                <button className="page-link" onClick={() => setCurrentPage(pageNum)}>{pageNum}</button>
              </li>
            );
          })}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>&rsaquo;</button>
          </li>
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(totalPages)}>&raquo;</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrdersTable;
