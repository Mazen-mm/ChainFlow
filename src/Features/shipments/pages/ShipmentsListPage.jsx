import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShipments } from '../slice';
import ShipmentTable from '../ui/organisms/ShipmentTable';

export default function ShipmentsListPage() {
  const dispatch = useDispatch();
  const { shipments, loading, error } = useSelector((state) => state.shipments);

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  const handleView = (shipment) => {
    // TODO: Route to detail page or open modal
    alert('View shipment: ' + shipment._id);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shipments</h1>
      </div>
      <ShipmentTable shipments={shipments} onView={handleView} />
    </div>
  );
}
