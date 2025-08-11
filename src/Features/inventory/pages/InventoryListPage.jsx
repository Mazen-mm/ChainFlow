import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventory } from '../slice';
import InventoryTable from '../ui/organisms/InventoryTable';

export default function InventoryListPage() {
  const dispatch = useDispatch();
  const { inventory, loading, error } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  const handleEdit = (item) => {
    // TODO: Route to edit page or open modal
    alert('Edit inventory for: ' + item.product.productName);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Inventory</h1>
      </div>
      <InventoryTable items={inventory} onEdit={handleEdit} />
    </div>
  );
}
