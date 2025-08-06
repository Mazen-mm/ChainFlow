import { useState } from 'react';

export default function useNotificationSettings() {
  const [notificationSettings, setNotificationSettings] = useState({
    quickActions: true,
    shipmentUpdated: true,
    orderUpdates: true,
    partnerMessages: true,
    documentUpdates: false,
  });

  const [mailSettings, setMailSettings] = useState({
    receiveUpdatesInMail: false,
  });

  const handleNotificationChange = (setting) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleMailChange = (setting) => {
    setMailSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const notificationOptions = [
    {
      key: 'quickActions',
      label: 'Get quick actions notifications',
      checked: notificationSettings.quickActions,
    },
    {
      key: 'shipmentUpdated',
      label: 'Get shipment updated',
      checked: notificationSettings.shipmentUpdated,
    },
    {
      key: 'orderUpdates',
      label: 'Get order updates',
      checked: notificationSettings.orderUpdates,
    },
    {
      key: 'partnerMessages',
      label: 'Get notifications for partner messages',
      checked: notificationSettings.partnerMessages,
    },
    {
      key: 'documentUpdates',
      label: 'Get document updates',
      checked: notificationSettings.documentUpdates,
    },
  ];

  const mailOptions = [
    {
      key: 'receiveUpdatesInMail',
      label: 'Receive updates in mail',
      checked: mailSettings.receiveUpdatesInMail,
    },
  ];

  return {
    notificationOptions,
    mailOptions,
    handleNotificationChange,
    handleMailChange,
  };
}
