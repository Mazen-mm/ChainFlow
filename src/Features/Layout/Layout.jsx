import { Outlet } from 'react-router-dom';
import Header from '../../Features/Layout/Header/Header';
import Sidebar from '../../Features/Layout/Sidebar/Sidebar';

export default function Layout() {

  return <>
    <div className="lightBg row mx-auto p-2">
      <Header/>
      <div className='col-md-2 col-sm-12 ps-0'>
        <Sidebar/>
      </div>
      <div className='col-md-10 col-sm-12 bg-white p-3 rounded-4'>
        <Outlet />
      </div>
    </div>
  </>
}


