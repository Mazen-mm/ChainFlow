
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import dashboardReducer from './slices/dashboardSlice';
import ordersReducer from '../../Features/orders/slice';
import productsReducer from '../../Features/products/slice';
import partnersReducer from '../../Features/partners/slice';
import inventoryReducer from '../../Features/inventory/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    orders: ordersReducer,
    products: productsReducer,
    partners: partnersReducer,
  inventory: inventoryReducer,
  // add other reducers here
  },
});
