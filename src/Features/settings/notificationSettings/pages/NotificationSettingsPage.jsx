import { BellIcon } from '../../../../assets/Icons/SVG';
import SettingsGroup from '../components/molecules/SettingsGroup';
import useNotificationSettings from '../hooks/useNotificationSettings';

export default function NotificationSettingsPage() {
  const {
    notificationOptions,
    mailOptions,
    handleNotificationChange,
    handleMailChange,
  } = useNotificationSettings();

  return (
    <div className="row PrimaryText gap-3">
      {/* Header */}
      <div className="d-flex align-items-center gap-2 my-1">
        <BellIcon stroke="currentColor" />
        <h5 className="m-0">Notifications</h5>
      </div>
      <small>Change how you want your notifications to work.</small>
      <hr />

      {/* Form */}
      <div className="card rounded-3 gap-3">
        <SettingsGroup title="Notifications settings" options={notificationOptions} 
          onChange={handleNotificationChange} />
        <SettingsGroup title="Mail settings" options={mailOptions} onChange={handleMailChange} />
      </div>
    </div>
  );
}