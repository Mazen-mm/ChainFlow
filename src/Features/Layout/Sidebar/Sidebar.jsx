import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { GridIcon , InventoryIcon , TrellaIcon , ShopIcon , DocIcon , UserIcon , BellIcon, SupportIcon, LogoutIcon, SettingIcon, UserProfileIcon, LockIcon, IntegrateIcon}
  from '../../../assets/Icons/SVG.jsx'

export default function Sidebar() {

  const NavBack = useNavigate();
  const location = useLocation();
  const isSettingsOpen = location.pathname.startsWith('/pages/settings');


  return <>
    <nav className="navbar sidebar navbar-expand-lg h-100">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse flex-column justify-content-between navbar-collapse h-100" id="navbarSupportedContent">
        <ul className="navbar-nav flex-column w-100">
          { isSettingsOpen ? (
            <>
              <li>
                <NavLink to='/pages/dashboard' className="nav-link text-primary" onClick={() => NavBack('/pages/dashboard')}>
                  {'< Back'}
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/general' className="nav-link d-flex align-items-center gap-2">
                  <SettingIcon circleStroke='currentColor' pathStroke='currentColor' fill='none'/>General
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/userprofile' className="nav-link d-flex align-items-center gap-2">
                  <UserProfileIcon stroke='currentColor'/>User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/security' className="nav-link d-flex align-items-center gap-2">
                  <LockIcon stroke='currentColor'/>Security
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/notifs' className="nav-link d-flex align-items-center gap-2">
                  <BellIcon stroke='currentColor'/>Notifications
                </NavLink>
              </li>
              <li>
                <NavLink to='settings/integrations' className="nav-link d-flex align-items-center gap-2">
                  <IntegrateIcon stroke='currentColor'/>Integrations
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='dashboard' className="nav-link d-flex align-items-center gap-2">
                  <GridIcon fill='currentColor'/>Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to='inventory' className="nav-link d-flex align-items-center gap-2">
                  <InventoryIcon fill='currentColor'/>Inventory
                </NavLink>
              </li>
              <li>
                <NavLink to='shipments' className="nav-link d-flex align-items-center gap-2">
                  <TrellaIcon fill='currentColor'/>Shipments
                </NavLink>
              </li>
              <li>
                <NavLink to='orders' className="nav-link d-flex align-items-center gap-2">
                  <ShopIcon fill='currentColor'/>Orders
                </NavLink>
              </li>
              <li>
                <NavLink to='documents' className="nav-link d-flex align-items-center gap-2">
                  <DocIcon fill='currentColor'/>Documents
                </NavLink>
              </li>
              <li>
                <NavLink to='partners' className="nav-link d-flex align-items-center gap-2">
                  <UserIcon fill='currentColor'/>Partners
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  </>
}
