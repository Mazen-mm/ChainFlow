
import { useState } from 'react';
import DashBtn from './../Components/Atoms/DashBtn';
import { ClockIcon } from '../../../../assets/Icons/SVG';

export default function Notifications () {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'task',
      title: 'Fish Tank Filter',
      subtitle: 'Current: 5 / 20',
      time: '2 hours ago',
      hasReorder: true,
      icon: '🕐',
      iconColor: '#6c757d'
    },
    {
      id: 2,
      type: 'status',
      title: 'SHP-29872: Status changed to Delayed',
      subtitle: 'Weather conditions',
      icon: '📍',
      iconColor: '#0d6efd'
    },
    {
      id: 3,
      type: 'message',
      title: 'Global Logistics Inc. sent a message',
      subtitle: 'You have yet to send the money...',
      avatar: '🚚',
      hasAvatar: true
    },
    {
      id: 4,
      type: 'task',
      title: 'Fish Tank Filter',
      subtitle: 'Current: 5 / 20',
      time: '2 hours ago',
      eta: 'ETA May 16, 2025',
      icon: '🕐',
      iconColor: '#6c757d',
      showEta: true
    },
    {
      id: 5,
      type: 'delivery',
      title: 'SHP-29869: Proof of Delivery uploaded',
      subtitle: 'Delivery completed',
      icon: '✓',
      iconColor: '#198754',
      isCompleted: true
    },
    {
      id: 6,
      type: 'task',
      title: 'Fish Tank Filter',
      subtitle: 'Current: 4 / 20',
      time: '4 hours ago',
      hasReorder: true,
      icon: '🕐',
      iconColor: '#6c757d'
    },
    {
      id: 7,
      type: 'task',
      title: 'Fish Tank Filter',
      subtitle: 'Current: 4 / 20',
      time: '4 hours ago',
      eta: 'ETA May 16, 2025',
      icon: '🕐',
      iconColor: '#6c757d',
      showEta: true
    },
    {
      id: 8,
      type: 'update',
      title: 'SHP-29871: Location updated',
      subtitle: 'GPS tracking update',
      icon: '»',
      iconColor: '#6c757d'
    },
    {
      id: 9,
      type: 'update',
      title: 'SHP-29870: ETA updated',
      subtitle: 'Traffic conditions',
      icon: '🕐',
      iconColor: '#6c757d'
    },
    {
      id: 10,
      type: 'task',
      title: 'Fish Tank Filter',
      subtitle: 'Current: 4 / 20',
      time: '4 hours ago',
      eta: 'ETA May 16, 2025',
      icon: '🕐',
      iconColor: '#6c757d',
      showEta: true
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  // const getNotificationIcon = (notification) => {
  //   if (notification.hasAvatar) {
  //     return (
  //       <div
  //         className="rounded-circle d-flex align-items-center justify-content-center"
  //         style={{
  //           width: '40px',
  //           height: '40px',
  //           backgroundColor: '#4a90e2',
  //           color: 'white',
  //           fontSize: '18px'
  //         }}
  //       >
  //         {notification.avatar}
  //       </div>
  //     );
  //   }

  //   return (
  //     <div
  //       className="rounded-circle d-flex align-items-center justify-content-center"
  //       style={{
  //         width: '24px',
  //         height: '24px',
  //         backgroundColor: notification.iconColor,
  //         color: 'white',
  //         fontSize: '12px',
  //         fontWeight: 'bold'
  //       }}
  //     >
  //       {notification.icon}
  //     </div>
  //   );
  // };

  return <>
  <div className="row gap-2">
    {/* Header */}
    <DashBtn BtnName={'Mark all as read'} onClick={markAllAsRead} BtnColor={'ms-auto w-auto'} />
    {/* Notifications List */}
    {notifications.map((notification) => (
      <div key={notification.id} className="card rounded-2 whiteBg p-3">
        <div className="d-flex">
          {/* Content */}
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <h6 className="fw-bold">{notification.title}</h6>
                <p className="text-muted">{notification.subtitle}</p>
                {/* Time and ETA row */}
                <div className="d-flex justify-content-between align-items-center mt-2">
                  {notification.time && (
                    <small className="d-flex align-items-center gap-2">
                      <ClockIcon/>
                      {notification.time}
                    </small>
                  )}
                  {notification.showEta && (
                    <small className="text-primary fw-bold">{notification.eta}</small>
                  )}
                </div>
              </div>
              {/* Action Button */}
              {notification.hasReorder && (
                <button className="btn btn-dark btn-sm">Reorder</button>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</>
};
