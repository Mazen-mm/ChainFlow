import logoBrand from '../../../assets/Images/Logo-brand.png'
import { SettingIcon } from '../../../assets/Icons/SVG.jsx';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navHome = useNavigate();

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
            <button className="primary rounded-3 border-0 p-2 mx-4" href="#">matchPath</button>
            <p className='text-muted'>ChainFlow</p>
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
