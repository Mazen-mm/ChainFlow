import { NavLink } from 'react-router-dom'
import { DashboardIcon , InventoryIcon , ShipmentIcon , OrderIcon , DocumentIcon , PartnersIcon}
  from '../../../assets/Icons/SVG.jsx'

export default function Sidebar() {

  return <>
    <nav className="navbar sidebar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav flex-column w-100">
          <li>
            <NavLink to='dashboard' className="nav-link" href="#">
              <DashboardIcon fill='currentColor'/>  Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='inventory' className="nav-link" href="#">
              <InventoryIcon fill='currentColor'/>  Inventory
            </NavLink>
          </li>
          <li>
            <NavLink to='shipments' className="nav-link" href="#">
              <ShipmentIcon fill='currentColor'/> Shipments
            </NavLink>
          </li>
          <li>
            <NavLink to='orders' className="nav-link" href="#">
              <OrderIcon fill='currentColor'/>  Orders
            </NavLink>
          </li>
          <li>
            <NavLink to='documents' className="nav-link" href="#">
              <DocumentIcon fill='currentColor'/> Documents
            </NavLink>
          </li>
          <li>
            <NavLink to='partners' className="nav-link" href="#">
              <PartnersIcon fill='currentColor'/> Partners
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
}
