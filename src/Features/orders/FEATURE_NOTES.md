# Orders Feature

## Endpoints Used
- `GET /api/order/` (list, with pagination/filter)
- `GET /api/order/:orderId` (detail)
- `POST /api/order/:supplierId` (create)
- `PATCH /api/order/:orderId` (update)
- `PATCH /api/order/:orderId/edit/:itemId` (edit item)
- `DELETE /api/order/:orderId/remove/:itemId` (remove item)
- `POST /api/order/:orderId/add` (add item)

## Redux Slice Actions/Thunks
- `fetchOrders` (list, with params)
- `fetchOrderById` (detail)
- `createOrder` (add)
- `updateOrder` (edit)

## Pages
- `OrdersListPage.jsx` (list, add stub, view stub)

## Test Data Notes
- Use backend to seed orders or test with API responses.
- Handles loading/error states, optimistic add.

## TODO
- Add OrderCreateEditPage (form)
- Add OrderDetailPage
- Add pagination, search, filter UI
- Connect Add/View to modal or route
- Add form validation
