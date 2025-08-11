import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKpis } from '../slice';
import KpiCards from '../ui/organisms/KpiCards';

export default function AnalyticsDashboardPage() {
  const dispatch = useDispatch();
  const { kpis, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchKpis());
  }, [dispatch]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!kpis) return null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
      <KpiCards kpis={kpis} />
    </div>
  );
}
