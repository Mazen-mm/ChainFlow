

import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  GridIcon, InventoryIcon, TrellaIcon, ShopIcon, DocIcon, UserIcon, BellIcon, SupportIcon,
  LogoutIcon, SettingIcon, UserProfileIcon, LockIcon, IntegrateIcon, BillingIcon
} from '../../assets/Icons/SVG.jsx';
import { useLogoutHandler } from '../../Shared/Utils/logoutHandler';


export default function Sidebar() {
  const NavBack = useNavigate();
  const location = useLocation();
  const isSettingsOpen = location.pathname.startsWith('/pages/settings');
  const logout = useLogoutHandler();

  return (
    <>
      <nav className="navbar sidebar navbar-expand-lg h-100">
        <div className="collapse flex-column navbar-collapse h-100" id="navbarSupportedContent">
          {isSettingsOpen ? (
            <ul className="navbar-nav flex-column w-100">
              <li>
                <NavLink to='/pages/dashboard' className="nav-link text-primary" onClick={() => NavBack('/pages/dashboard')}>
                  {'< Back'}
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/general' className="nav-link d-flex align-items-center gap-2">
                  <SettingIcon circleStroke='currentColor' pathStroke='currentColor' fill='none' />General
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/userprofile' className="nav-link d-flex align-items-center gap-2">
                  <UserProfileIcon stroke='currentColor' />User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/security' className="nav-link d-flex align-items-center gap-2">
                  <LockIcon stroke='currentColor' />Security
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/notificationSettings' className="nav-link d-flex align-items-center gap-2">
                  <BellIcon stroke='currentColor' />Notifications
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/integrations' className="nav-link d-flex align-items-center gap-2">
                  <IntegrateIcon stroke='currentColor' />Integrations
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/billingSubscription' className="nav-link d-flex align-items-center gap-2">
                  <BillingIcon stroke='currentColor' />Billing & Subscription
                </NavLink>
              </li>
            </ul>
          ) : (
            <div className="d-flex flex-column w-100 h-100 justify-content-between">
              <ul className="navbar-nav flex-column">
                <li>
                  <NavLink to='dashboard' className="nav-link d-flex align-items-center gap-2">
                    <GridIcon fill='currentColor' />Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to='inventory' className="nav-link d-flex align-items-center gap-2">
                    <InventoryIcon fill='currentColor' />Inventory
                  </NavLink>
                </li>
                <li>
                  <NavLink to='shipments' className="nav-link d-flex align-items-center gap-2">
                    <TrellaIcon fill='currentColor' />Shipments
                  </NavLink>
                </li>
                <li>
                  <NavLink to='orders' className="nav-link d-flex align-items-center gap-2">
                    <ShopIcon fill='currentColor' />Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to='documents' className="nav-link d-flex align-items-center gap-2">
                    <DocIcon fill='currentColor' />Documents
                  </NavLink>
                </li>
                <li>
                  <NavLink to='partners' className="nav-link d-flex align-items-center gap-2">
                    <UserIcon fill='currentColor' />Partners
                  </NavLink>
                </li>
                <li>
                  <NavLink to='employees' className="nav-link d-flex align-items-center gap-2">
                    <UserIcon fill='currentColor' />Employees
                  </NavLink>
                </li>
              </ul>
              {/* Bottom section for support, notifications, and logout */}
              <ul className="navbar-nav flex-column align-bottom w-100">
                <li>
                  <NavLink to="notifications" className="nav-link d-flex align-items-center gap-2">
                    <BellIcon stroke="currentColor" />Notifications
                  </NavLink>
                </li>
                <li>
                  <NavLink to="support" className="nav-link d-flex align-items-center gap-2">
                    <SupportIcon stroke="currentColor" />Support
                  </NavLink>
                </li>
                <li>
                  <button className="nav-link d-flex align-items-center gap-2 text-danger bg-transparent border-0" style={{cursor:'pointer'}} onClick={logout}>
                    <LogoutIcon stroke="currentColor" />Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}


