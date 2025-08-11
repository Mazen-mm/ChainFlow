# Notifications Feature

## Endpoints Used
- `GET /api/notification/` (list)
- `PATCH /api/notification/` (mark all read)
- `DELETE /api/notification/` (delete all)
- `PATCH /api/notification/:notificationId` (mark read)
- `DELETE /api/notification/:notificationId` (delete)

## Redux Slice Actions/Thunks
- `fetchNotifications` (list)
- `markAllRead` (mark all read)
- `deleteAllNotifications` (delete all)
- `markNotificationRead` (mark read)
- `deleteNotification` (delete)

## Pages
- `NotificationsListPage.jsx` (list, mark read, delete)

## Test Data Notes
- Use backend to seed notifications or test with API responses.
- Handles loading/error states.

## TODO
- Add pagination, search, filter UI
- Add notification detail page
