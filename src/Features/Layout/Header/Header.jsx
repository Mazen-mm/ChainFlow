import logoBrand from '../../../assets/Images/logo-brand.png'
import { SettingIcon } from '../../../assets/Icons/SVG.jsx';

export default function Header() {

  return <>
    <header className="d-flex justify-content-between px-3">
      <div className='d-flex'>
        <img src={logoBrand} className='w-100' alt="Brand Logo"/>
        <div className='d-flex flex-nowrap align-items-center'>
          <button className="primary rounded-3 border-0 p-2 mx-4" href="#">matchPath</button>
          <p className='text-muted mb-0'>ChainFlow</p>
        </div>
      </div>
      <div className='d-flex align-items-center'>
        <SettingIcon fill='none' pathStroke='#5C8DFF' circleStroke='#5C8DFF'/>
      </div>
    </header>
  </>
}
