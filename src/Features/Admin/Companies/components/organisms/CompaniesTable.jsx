
import PaymentBadge from '../../utails/PaymentBadge';
import TypeBadge from '../../utails/TypeBadge';

export default function CompaniesTable ({
  currentUsers = [],
  selectedUsers = [],
  SelectUser,
  handleSelectAll,
  currentPage,
  setCurrentPage,
  totalPages,
  filteredUsers = [],
  itemsPerPage,
}) {
  const startIndexDisplay = (currentPage - 1) * itemsPerPage + 1;
  const endIndexDisplay = Math.min(startIndexDisplay + currentUsers.length - 1, filteredUsers.length);

  return (
    <div className="table-responsive rounded-3 border">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <input type="checkbox" className="form-check-input" onChange={handleSelectAll}
                checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0} />
            </th>
            <th>Name</th>
            <th>Manager</th>
            <th>Type</th>
            <th>Payment</th>
            <th>plan</th>
            <th>Employee Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((company) => (
            <tr key={company.id}>
              <td>
                <input type="checkbox" className="form-check-input"
                  checked={selectedUsers.includes(company.id)}
                  onChange={() => SelectUser(company.id)} />
              </td>
              <td className="fw-semibold text-dark">{company.name}</td>
              <td className="text-dark">{company.manager}</td>
              <td>{TypeBadge({ type: company.type })}</td>
              <td>{PaymentBadge({ payment: company.payment })}</td>
              <td className="text-muted">{company.plan}</td>
              <td className="text-muted">{company.employeeCount}</td>
              <td className="text-muted">{company.action}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex align-items-center justify-content-between px-3">
        <div className="text-muted small">
          Showing {startIndexDisplay} to {endIndexDisplay} of {filteredUsers.length} entries
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

