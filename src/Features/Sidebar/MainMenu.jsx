import { NavLink } from "react-router-dom";
import { GridIcon, InventoryIcon, TrellaIcon, ShopIcon, DocIcon, UserIcon, BellIcon, SupportIcon, LogoutIcon } from "../../assets/Icons/SVG.jsx";

export default function MainMenu() {
  return (
    <div className="d-flex flex-column w-100 h-100 justify-content-between">
      <ul className="navbar-nav flex-column">
        <li>
          <NavLink to="dashboard" className="nav-link d-flex align-items-center gap-2">
            <GridIcon fill="currentColor" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="inventory" className="nav-link d-flex align-items-center gap-2">
            <InventoryIcon fill="currentColor" /> Inventory
          </NavLink>
        </li>
        <li>
          <NavLink to="shipments" className="nav-link d-flex align-items-center gap-2">
            <TrellaIcon fill="currentColor" /> Shipments
          </NavLink>
        </li>
        <li>
          <NavLink to="orders" className="nav-link d-flex align-items-center gap-2">
            <ShopIcon fill="currentColor" /> Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="documents" className="nav-link d-flex align-items-center gap-2">
            <DocIcon fill="currentColor" /> Documents
          </NavLink>
        </li>
        <li>
          <NavLink to="partners" className="nav-link d-flex align-items-center gap-2">
            <UserIcon fill="currentColor" /> Partners
          </NavLink>
        </li>
        <li>
          <NavLink to="employees" className="nav-link d-flex align-items-center gap-2">
            <UserIcon fill="currentColor" /> Employees
          </NavLink>
        </li>
      </ul>

      {/* Bottom section */}
      <ul className="navbar-nav flex-column align-bottom w-100">
        <li>
          <NavLink to="notifications" className="nav-link d-flex align-items-center gap-2">
            <BellIcon stroke="currentColor" /> Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="support" className="nav-link d-flex align-items-center gap-2">
            <SupportIcon stroke="currentColor" /> Support
          </NavLink>
        </li>
        <li>
          <NavLink to="logout" className="nav-link d-flex align-items-center gap-2 text-danger">
            <LogoutIcon stroke="currentColor" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
