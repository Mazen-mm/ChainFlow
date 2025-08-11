# Shipments Feature

## Endpoints Used
- `GET /api/shipment/` (list)
- `GET /api/shipment/:id` (detail)
- `PATCH /api/shipment/:id` (update)

## Redux Slice Actions/Thunks
- `fetchShipments` (list)
- `fetchShipmentById` (detail)
- `updateShipment` (update)

## Pages
- `ShipmentsListPage.jsx` (list, view stub)

## Test Data Notes
- Use backend to seed shipments or test with API responses.
- Handles loading/error states.

## TODO
- Add shipment detail page
- Add update shipment status UI
- Add pagination, search, filter UI
