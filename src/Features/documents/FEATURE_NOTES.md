# Documents Feature

## Endpoints Used
- `GET /api/document/` (list)
- `POST /api/document/` (upload)
- `DELETE /api/document/:id` (delete)

## Redux Slice Actions/Thunks
- `fetchDocuments` (list)
- `uploadDocument` (upload)
- `deleteDocument` (delete)

## Pages
- `DocumentsListPage.jsx` (list, upload, delete)

## Test Data Notes
- Use backend to seed documents or test with API responses.
- Handles loading/error states.

## TODO
- Add document detail page
- Add pagination, search, filter UI
