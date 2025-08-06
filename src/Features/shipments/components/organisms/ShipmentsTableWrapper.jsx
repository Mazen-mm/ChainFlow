
import ShipmentsTable from '../../../../Shared/Components/Organisms/ShipmentsTable';

export default function ShipmentsTableWrapper({
  currentShipments,
  currentPage,
  totalPages,
  startIndex,
  itemsPerPage,
  filteredShipments,
  setCurrentPage
})

{
  return (
    <div className="card h-100">
      <h5 className="PrimaryText">Shipments</h5>
      <ShipmentsTable shipments={currentShipments} />
      <div className="d-flex justify-content-between align-items-center p-3">
        <small className="text-muted">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredShipments.length)} of {filteredShipments.length} entries
        </small>
        <ul className="pagination pagination-sm mb-0">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</button>
          </li>
          {[...Array(totalPages)].map((_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
