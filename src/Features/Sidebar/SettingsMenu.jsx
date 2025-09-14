import { NavLink, useNavigate } from "react-router-dom";
import { SettingIcon, UserProfileIcon, LockIcon, BellIcon, IntegrateIcon, BillingIcon } from "../../assets/Icons/SVG.jsx";

export default function SettingsMenu() {
  const NavBack = useNavigate();

  return (
    <ul className="navbar-nav flex-column w-100">
      <li>
        <NavLink to="/pages/dashboard" className="nav-link text-primary" onClick={() => NavBack("/pages/dashboard")}>
          {"< Back"}
        </NavLink>
      </li>
      <li>
        <NavLink to="settings/general" className="nav-link d-flex align-items-center gap-2">
          <SettingIcon circleStroke="currentColor" pathStroke="currentColor" fill="none" /> General
        </NavLink>
      </li>
      <li>
        <NavLink to="settings/userprofile" className="nav-link d-flex align-items-center gap-2">
          <UserProfileIcon stroke="currentColor" /> User Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="settings/security" className="nav-link d-flex align-items-center gap-2">
          <LockIcon stroke="currentColor" /> Security
        </NavLink>
      </li>
      <li>
        <NavLink to="settings/notificationSettings" className="nav-link d-flex align-items-center gap-2">
          <BellIcon stroke="currentColor" /> Notifications
        </NavLink>
      </li>
      <li>
        <NavLink to="settings/integrations" className="nav-link d-flex align-items-center gap-2">
          <IntegrateIcon stroke="currentColor" /> Integrations
        </NavLink>
      </li>
      <li>
        <NavLink to="settings/billingSubscription" className="nav-link d-flex align-items-center gap-2">
          <BillingIcon stroke="currentColor" /> Billing & Subscription
        </NavLink>
      </li>
    </ul>
  );
}
