

import logoBrand from '../../assets/Images/Logo-brand.png'
import { SettingIcon } from '../../assets/Icons/SVG.jsx';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


export default function Header() {
  const navHome = useNavigate();
  const location = useLocation();
  const endpoint = location.pathname.split('/').filter(Boolean).pop();
  const endPath = endpoint[0].toUpperCase() + endpoint.slice(1);

  return <>
    <header className="d-flex justify-content-between px-3">
      <div className='d-flex'>
        {/* Mobile: show only toggler */}
        <div className='d-flex flex-nowrap align-items-center navbar d-lg-none'>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* Desktop: show logo, matchPath, and brand */}
        <>
          <img src={logoBrand} className='w-100 d-none d-lg-block' alt="Brand Logo"/>
          <div className='d-none d-lg-flex flex-nowrap align-items-center'>
            <p className="primary rounded-3 p-2 mx-3" href="#">{endPath}</p>
            <small className='text-muted'>ChainFlow/</small>
            <span className='PrimaryText fw-bolder'>{endPath}</span>
          </div>
        </>
      </div>
      <div className='d-flex align-items-center'>
        <button onClick={() => navHome('/')} className='btn btn-info mx-3'>Back to Home</button>
        <NavLink to='settings/general' className="nav-link" href="#">  
          <SettingIcon fill='none' pathStroke='#5C8DFF' circleStroke='#5C8DFF'/>
        </NavLink>
      </div>
    </header>
  </>
}
