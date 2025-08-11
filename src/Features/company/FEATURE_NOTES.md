# Company Feature

## Endpoints Used
- `GET /api/company/` (list, with pagination/filter)
- `GET /api/company/:companyId` (detail)
- `PATCH /api/company/approve/:companyId` (approve/reject)

## Redux Slice Actions/Thunks
- `fetchCompanies` (list, with params)
- `fetchCompanyById` (detail)
- `approveCompany` (approve/reject)

## Pages
- `CompanyListPage.jsx` (list, approve stub)

## Test Data Notes
- Use backend to seed companies or test with API responses.
- Handles loading/error states.

## TODO
- Add CompanyDetailPage
- Add pagination, search, filter UI
- Connect Approve to modal or route
