import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPartnerConnections, updatePartnerConnection } from '../slice';
import PartnerTable from '../ui/organisms/PartnerTable';

export default function PartnersListPage() {
  const dispatch = useDispatch();
  const { partners, loading, error } = useSelector((state) => state.partners);

  useEffect(() => {
    dispatch(fetchPartnerConnections());
  }, [dispatch]);

  const handleUpdate = (partner, status) => {
    if (window.confirm(`Change status to ${status}?`)) {
      dispatch(updatePartnerConnection({ id: partner._id, data: { status } }));
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Partner Connections</h1>
      </div>
      <PartnerTable partners={partners} onUpdate={handleUpdate} />
    </div>
  );
}
