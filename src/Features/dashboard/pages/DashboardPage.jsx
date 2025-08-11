

import DashOrders from '../components/templates/DashOrders';
import DashOverView from '../components/templates/DashOverView';
import DashShipments from '../components/templates/DashShipments';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../../Shared/redux/slices/dashboardSlice';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { overview, orders, shipments, loading, error } = useSelector(state => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);


  if (loading) return <div className="text-center py-5">Loading dashboard...</div>;
  if (error) {
    let msg = typeof error === 'string' ? error : (error?.message || JSON.stringify(error));
    return <div className="alert alert-danger">{msg}</div>;
  }

  return (
    <div className="row gap-2">
      <div className="row overflow-hidden">
        <DashOverView overview={overview} />
      </div>
      <div className="row">
        <div className="col-md-6">
          <DashOrders orders={orders} />
        </div>
        <div className="col-md-6">
          <DashShipments shipments={shipments} />
        </div>
      </div>
    </div>
  );
}
