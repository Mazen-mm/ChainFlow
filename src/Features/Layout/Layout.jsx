
import { Outlet } from 'react-router-dom';
import Header from '../../Features/Layout/Header/Header';
import Sidebar from '../../Features/Layout/Sidebar/Sidebar';

export default function Layout() {
  return (
    <div className="lightBg d-flex flex-column vh-100 p-2">
      <Header />
      <div className="row flex-grow-1 overflow-auto h-100">
        <div className="col-md-2 col-sm-12 ps-0 overflow-auto">
          <Sidebar />
        </div>
        <div className="col-md-10 col-12 p-3 bg-white rounded-4 h-100 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
