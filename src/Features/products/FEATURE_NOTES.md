# Products Feature

## Endpoints Used
- `GET /api/product/` (list, with pagination/filter)
- `POST /api/product/` (create)
- `GET /api/product/:productId` (detail)
- `PATCH /api/product/:productId` (update)
- `DELETE /api/product/:productId` (delete)

## Redux Slice Actions/Thunks
- `fetchProducts` (list, with params)
- `fetchProductById` (detail)
- `createProduct` (add)
- `updateProduct` (edit)
- `deleteProduct` (remove)

## Pages
- `ProductsListPage.jsx` (list, delete, stub for add/edit)

## Test Data Notes
- Use backend to seed products or test with API responses.
- Handles loading/error states, optimistic delete.

## TODO
- Add ProductCreateEditPage (form)
- Add ProductDetailPage
- Add pagination, search, filter UI
- Connect Add/Edit to modal or route
- Add form validation
