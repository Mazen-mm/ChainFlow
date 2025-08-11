# Inventory Feature

## Endpoints Used
- `GET /api/inventory/` (list, with pagination/filter)
- `GET /api/inventory/:inventoryId` (detail)
- `PATCH /api/inventory/:inventoryId` (update)

## Redux Slice Actions/Thunks
- `fetchInventory` (list, with params)
- `fetchInventoryById` (detail)
- `updateInventory` (edit)

## Pages
- `InventoryListPage.jsx` (list, edit stub)

## Test Data Notes
- Use backend to seed inventory or test with API responses.
- Handles loading/error states.

## TODO
- Add InventoryEditPage (form)
- Add InventoryDetailPage
- Add pagination, search, filter UI
- Connect Edit to modal or route
- Add form validation
