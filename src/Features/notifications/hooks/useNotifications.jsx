import { useState } from 'react';

const useNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'task',
      title: 'Fish Tank Filter',
      subtitle: 'Current: 5 / 20',
      time: '2 hours ago',
      hasReorder: true,
      icon: '🕐',
      iconColor: '#6c757d',
    },
    {
      id: 2,
      type: 'status',
      title: 'SHP-29872: Status changed to Delayed',
      subtitle: 'Weather conditions',
      icon: '📍',
      iconColor: '#0d6efd',
    },
    {
      id: 3,
      type: 'message',
      title: 'Global Logistics Inc. sent a message',
      subtitle: 'You have yet to send the money...',
      avatar: '🚚',
      hasAvatar: true,
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
      showEta: true,
    },
    {
      id: 5,
      type: 'delivery',
      title: 'SHP-29869: Proof of Delivery uploaded',
      subtitle: 'Delivery completed',
      icon: '✓',
      iconColor: '#198754',
      isCompleted: true,
    },
    {
      id: 6,
      type: 'task',
      title: 'Fish Tank Filter',
      subtitle: 'Current: 4 / 20',
      time: '4 hours ago',
      hasReorder: true,
      icon: '🕐',
      iconColor: '#6c757d',
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
      showEta: true,
    },
    {
      id: 8,
      type: 'update',
      title: 'SHP-29871: Location updated',
      subtitle: 'GPS tracking update',
      icon: '»',
      iconColor: '#6c757d',
    },
    {
      id: 9,
      type: 'update',
      title: 'SHP-29870: ETA updated',
      subtitle: 'Traffic conditions',
      icon: '🕐',
      iconColor: '#6c757d',
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
      showEta: true,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  return { notifications, markAllAsRead };
};

export default useNotifications;
