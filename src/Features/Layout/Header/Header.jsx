import logoBrand from '../../../assets/Images/Logo-brand.png'
import { SettingIcon } from '../../../assets/Icons/SVG.jsx';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navHome = useNavigate();

  return <>
    <header className="d-flex justify-content-between px-3">
      <div className='d-flex'>
        <img src={logoBrand} className='w-100' alt="Brand Logo"/>
        <div className='d-flex flex-nowrap align-items-center'>
          <button className="primary rounded-3 border-0 p-2 mx-4" href="#">matchPath</button>
          <p className='text-muted'>ChainFlow</p>
        </div>
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
