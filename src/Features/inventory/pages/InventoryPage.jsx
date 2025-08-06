
import { DetailsCardGroup } from './../components/molecules/DetailsCardGroup';
import { InventoryToolbar } from '../components/organisms/InventoryToolbar';
import { InventoryTable } from '../components/organisms/InventoryTable';
import { useInventoryPagination } from '../hooks/useInventoryPagination';


export default function InventoryPage() {
  const { currentData, total, startIndex, page, setPage, totalPages } = useInventoryPagination();

  return <>
      <DetailsCardGroup />
      <InventoryToolbar onSearch={(q) => console.log('searching', q)} />
      <InventoryTable data={currentData} />
      {/* Pagination controls */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <small className="text-muted">
          Showing {startIndex + 1} to {startIndex + currentData.length} of {total} entries
        </small>
        <div className="btn-group">
          <button className="btn btn-outline-primary" disabled={page === 1} onClick={() => setPage(1)}>
            &laquo;
          </button>
          <button className="btn btn-outline-primary" disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>
            &lsaquo;
          </button>
          {[...Array(totalPages).keys()].slice(0, 3).map((n) => (
            <button key={n} className='btn btn-primary' onClick={() => setPage(n + 1)}>
              {n + 1}
            </button>
          ))}
          <button className="btn btn-outline-primary" disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)}>
            &rsaquo;
          </button>
          <button className="btn btn-outline-primary" disabled={page === totalPages} onClick={() => setPage(totalPages)}>
            &raquo;
          </button>
        </div>
      </div>
  </>
}


