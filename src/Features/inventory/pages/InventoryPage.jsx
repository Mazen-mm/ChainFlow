
import { InventoryToolbar } from '../components/organisms/InventoryToolbar';
import { InventoryTable } from '../components/organisms/InventoryTable';
import { useInventoryPagination } from '../hooks/useInventoryPagination';
import DetailsCard from '../../../Shared/Components/Molecules/DetailsCard';
import { AnalyticsIcon, ExclamIcon, InvIcon, TrellaIcon } from '../../../assets/Icons/SVG';


export default function InventoryPage() {
  const { currentData, total, startIndex, page, setPage, totalPages } = useInventoryPagination();

  return <>
      {/* Summary Cards */}
      <div className="row">
        <DetailsCard name="Total Items" count="2,847" icon={<InvIcon fill='none' stroke={'#5C8DFF'} />} />
        <DetailsCard name="Low Stock Alerts" count="24" icon={<ExclamIcon stroke='#5C8DFF'/>} />
        <DetailsCard name="Incoming Shipments" count="12" icon={<TrellaIcon fill={'#5C8DFF'} />} />
        <DetailsCard name="Total Value" count="$1.2M" icon={<AnalyticsIcon stroke='#5C8DFF'/>} />
      </div>
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


