# Invoices Feature

## Endpoints Used
- `GET /api/invoice/` (list)
- `GET /api/invoice/:id` (detail)
- `GET /api/invoice/download/:id` (download PDF)

## Redux Slice Actions/Thunks
- `fetchInvoices` (list)
- `fetchInvoiceById` (detail)

## Pages
- `InvoicesListPage.jsx` (list, download)

## Test Data Notes
- Use backend to seed invoices or test with API responses.
- Handles loading/error states.

## TODO
- Add invoice detail page
- Add pagination, search, filter UI
