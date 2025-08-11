import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../slice';
import OrderTable from '../ui/organisms/OrderTable';

export default function OrdersListPage() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleView = (order) => {
    // TODO: Route to detail page or open modal
    alert('View order: ' + order.orderNumber);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Orders</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => alert('TODO: Add order')}>Add Order</button>
      </div>
      <OrderTable orders={orders} onView={handleView} />
    </div>
  );
}
