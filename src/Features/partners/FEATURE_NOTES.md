# Partners Feature

## Endpoints Used
- `GET /api/partner-connection/` (list)
- `POST /api/partner-connection/` (create)
- `PATCH /api/partner-connection/:connectionId` (update)

## Redux Slice Actions/Thunks
- `fetchPartnerConnections` (list)
- `createPartnerConnection` (create)
- `updatePartnerConnection` (update)

## Pages
- `PartnersListPage.jsx` (list, update status)

## Test Data Notes
- Use backend to seed partner connections or test with API responses.
- Handles loading/error states.

## TODO
- Add create partner connection form
- Add detail page
- Add pagination, search, filter UI
