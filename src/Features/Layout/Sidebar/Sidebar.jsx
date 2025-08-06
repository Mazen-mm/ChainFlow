// import { useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { GridIcon , InventoryIcon , TrellaIcon , ShopIcon , DocIcon , UserIcon , BellIcon, SupportIcon, LogoutIcon, SettingIcon, UserProfileIcon, LockIcon, IntegrateIcon}
//   from '../../../assets/Icons/SVG.jsx';
// import { useLogoutHandler } from '../../../Shared/Utils/logoutHandler';

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const NavBack = useNavigate();
//   const location = useLocation();
//   const isSettingsOpen = location.pathname.startsWith('/pages/settings');
//   const logoutHandler = useLogoutHandler();

//   // Close sidebar on navigation (mobile)
//   const handleNavClick = () => setOpen(false);

//   return (
//     <nav className="navbar sidebar navbar-expand-lg h-100 d-flex flex-column">
//       <button
//         className="navbar-toggler"
//         type="button"
//         aria-controls="navbarSupportedContent"
//         aria-expanded={open}
//         aria-label="Toggle navigation"
//         onClick={() => setOpen((prev) => !prev)}
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div
//         className={`collapse flex-column justify-content-between navbar-collapse h-100${open ? ' show' : ''}`}
//         id="navbarSupportedContent"
//         style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
//       >
//         <ul className="navbar-nav flex-column w-100">
//           {isSettingsOpen ? (
//             <>
//               <li>
//                 <NavLink to='/pages/dashboard' className="nav-link text-primary" onClick={() => { NavBack('/pages/dashboard'); handleNavClick(); }}>
//                   {'< Back'}
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='settings/general' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <SettingIcon circleStroke='currentColor' pathStroke='currentColor' fill='none'/>General
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='settings/userprofile' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <UserProfileIcon stroke='currentColor'/>User Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='settings/security' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <LockIcon stroke='currentColor'/>Security
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='settings/notifs' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <BellIcon stroke='currentColor'/>Notifications
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='settings/integrations' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <IntegrateIcon stroke='currentColor'/>Integrations
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink to='dashboard' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <GridIcon fill='currentColor'/>Dashboard
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='inventory' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <InventoryIcon fill='currentColor'/>Inventory
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='shipments' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <TrellaIcon fill='currentColor'/>Shipments
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='orders' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <ShopIcon fill='currentColor'/>Orders
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='documents' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <DocIcon fill='currentColor'/>Documents
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to='partners' className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//                   <UserIcon fill='currentColor'/>Partners
//                 </NavLink>
//               </li>
//             </>
//           )}
//         </ul>
//         {/* Bottom section for support, notifications, and logout */}
//         <ul className="navbar-nav flex-column w-100 mt-auto mb-2">
//           <li>
//             <NavLink to="notifications" className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//               <BellIcon stroke="currentColor" />Notifications
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="support" className="nav-link d-flex align-items-center gap-2" onClick={handleNavClick}>
//               <SupportIcon stroke="currentColor" />Support
//             </NavLink>
//           </li>
//           <li>
//             <button
//               className="nav-link d-flex align-items-center gap-2 btn btn-link text-danger p-0"
//               style={{ textDecoration: 'none' }}
//               onClick={() => { logoutHandler(); setOpen(false); }}
//             >
//               <LogoutIcon stroke="currentColor" />Logout
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }




import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { GridIcon , InventoryIcon , TrellaIcon , ShopIcon , DocIcon , UserIcon , BellIcon, SupportIcon, 
  LogoutIcon, SettingIcon, UserProfileIcon, LockIcon, IntegrateIcon } from '../../../assets/Icons/SVG.jsx'

export default function Sidebar() {

  const NavBack = useNavigate();
  const location = useLocation();
  const isSettingsOpen = location.pathname.startsWith('/pages/settings');


return <>
  <nav className="navbar sidebar navbar-expand-lg h-100">
    <div className="collapse flex-column navbar-collapse h-100" id="navbarSupportedContent">
      { isSettingsOpen ? <>
        <ul className="navbar-nav flex-column w-100">
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
            <NavLink to='settings/notificationSettings' className="nav-link d-flex align-items-center gap-2">
              <BellIcon stroke='currentColor'/>Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to='settings/integrations' className="nav-link d-flex align-items-center gap-2">
              <IntegrateIcon stroke='currentColor'/>Integrations
            </NavLink>
          </li>
        </ul>
        </> : <div className="d-flex flex-column w-100 h-100 justify-content-between">
        <ul className="navbar-nav flex-column">
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
            <NavLink to='logout' className="nav-link d-flex align-items-center gap-2 text-danger">
              <LogoutIcon stroke="currentColor" />Logout
            </NavLink>
          </li>
        </ul>
      </div>
      }
    </div>
  </nav>
</>
}


