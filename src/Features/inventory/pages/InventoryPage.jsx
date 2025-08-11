

import { DetailsCardGroup } from './../components/molecules/DetailsCardGroup';
import { InventoryToolbar } from '../components/organisms/InventoryToolbar';
import { InventoryTable } from '../components/organisms/InventoryTable';
import { useInventoryPagination } from '../hooks/useInventoryPagination';
import InventoryModal from '../ui/organisms/InventoryModal';
import InventoryViewDrawer from '../ui/organisms/InventoryViewDrawer';
import InventoryEditDrawer from '../ui/organisms/InventoryEditDrawer';
import InventoryAddDrawer from '../ui/organisms/InventoryAddDrawer';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../products/slice';
import { deleteInventory } from '../slice';
import { useEffect, useState } from 'react';


export default function InventoryPage() {
  const { currentData, total, startIndex, page, setPage, totalPages, loading, error } = useInventoryPagination();
  const dispatch = useDispatch();
  const [drawer, setDrawer] = useState(null); // 'add' | 'edit' | 'view' | null
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = () => {
    setSelectedItem(null);
    setDrawer('add');
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setDrawer('edit');
  };

  const handleView = (item) => {
    setSelectedItem(item);
    setDrawer('view');
  };

  const handleDelete = (item) => {
    if (window.confirm('Delete this inventory item?')) {
      dispatch(deleteInventory(item._id));
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-danger">{error}</div>;

  return <>
    <DetailsCardGroup />
    <InventoryToolbar onSearch={(q) => console.log('searching', q)} onAdd={handleAdd} />
    <InventoryTable data={currentData} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
    <InventoryViewDrawer open={drawer === 'view'} onClose={(action) => {
      if (action === 'edit') {
        setDrawer('edit');
      } else {
        setDrawer(null);
        setSelectedItem(null);
      }
    }} item={selectedItem} />
    <InventoryEditDrawer open={drawer === 'edit'} onClose={() => { setDrawer(null); setSelectedItem(null); }} item={selectedItem} onSave={(form) => {/* TODO: dispatch updateInventory */ setDrawer(null); setSelectedItem(null); }} />
    <InventoryAddDrawer open={drawer === 'add'} onClose={() => { setDrawer(null); setSelectedItem(null); }} onAdd={(form) => {/* TODO: dispatch createInventory */ setDrawer(null); setSelectedItem(null); }} />
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
  </>;
}


