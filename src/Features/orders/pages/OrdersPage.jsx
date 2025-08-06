import React from 'react';
import OrdersToolbar from './../components/organisms/OrdersToolbar';
import OrdersTable from './../components/organisms/OrdersTable';
import CreateOrderModal from './../components/organisms/CreateOrderModal';
import useOrders from '../hooks/useOrders';

const OrdersPage = () => {
  const ordersState = useOrders();

  return (
    <>
      {ordersState.showCreateModal && (
        <CreateOrderModal {...ordersState} />
      )}

      <OrdersToolbar {...ordersState} />
      <OrdersTable {...ordersState} />
    </>
  );
};

export default OrdersPage;
