import DashBtn from '../../../Shared/Components/Atoms/DashBtn';
import NotificationList from '../components/organisms/NotificationList';
import useNotifications from '../hooks/useNotifications';

const NotificationsPage = () => {
  const { notifications, markAllAsRead } = useNotifications();

  return (
    <div className="p-3">
      <div className="d-flex justify-content-end mb-3">
        <DashBtn BtnName="Mark all as read" onClick={markAllAsRead} BtnColor="ms-auto w-auto" />
      </div>
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default NotificationsPage;
