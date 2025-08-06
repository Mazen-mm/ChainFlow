
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
}) => {
  const startIndexDisplay = (currentPage - 1) * itemsPerPage + 1;
  const endIndexDisplay = Math.min(startIndexDisplay + currentOrders.length - 1, filteredOrders.length);

  return (
    <div className="table-responsive rounded-3 border">
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
