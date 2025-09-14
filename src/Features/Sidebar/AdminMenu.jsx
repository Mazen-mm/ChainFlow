import { NavLink, useNavigate } from "react-router-dom";
import { UserIcon, GridIcon, InvIcon, BillingIcon } from "../../assets/Icons/SVG.jsx";

export default function AdminMenu() {
  const NavBack = useNavigate();

  return (
    <ul className="navbar-nav flex-column w-100">
      <li>
        <NavLink to="/pages/dashboard" className="nav-link text-primary" onClick={() => NavBack("/pages/dashboard")}>
          {"< Back"}
        </NavLink>
      </li>
      <li>
        <NavLink to="admin/dashboard" className="nav-link d-flex align-items-center gap-2">
          <GridIcon fill="currentColor" /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="admin/userManagement" className="nav-link d-flex align-items-center gap-2">
          <UserIcon fill="currentColor" /> User Management
        </NavLink>
      </li>
      <li>
        <NavLink to="admin/companies" className="nav-link d-flex align-items-center gap-2">
          <InvIcon fill="none" stroke="currentColor" /> Companies
        </NavLink>
      </li>
      <li>
        <NavLink to="admin/plans" className="nav-link d-flex align-items-center gap-2">
          <BillingIcon stroke="currentColor" /> Plans
        </NavLink>
      </li>
    </ul>
  );
}
