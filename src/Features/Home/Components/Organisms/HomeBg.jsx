import landPage from '../../../../assets/Images/land.png';
import { Brand } from '../../../../assets/Icons/SVG.jsx';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function HomeBg() {

  const navDashboard = useNavigate();

  // Navigate()

  return <>
    <div className="lightBg">
      {/* Top Navbar */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <Brand/>
        <div className='d-flex gap-3'>
          <button className="btn btn-primary">Get Started</button>
          <Link to="/auth/login" className="btn btn-light border-1 border-dark border-opacity-25">Log in</Link>
          <button onClick={() => navDashboard('/pages/dashboard')} className='btn btn-info'>Dashboard</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6">
            <h2><span className="text-primary">Streamline</span> Your Supply Chain<br />
              with <span className="text-primary">Real-Time</span> Collaboration
            </h2>
            <p className="text-muted">
              Connect manufacturers, suppliers, logistics providers, warehouses,<br />
              and retailers in one powerful platform.
            </p>
            <button className="btn primary mt-3">Schedule a Demo</button>
          </div>

          {/* Right Image */}
          <div className="col-md-6 position-relative">
            <div className="bgCircle position-absolute"></div>
            <img src={landPage} alt="Mac Setup" className="w-100 position-relative"/>
          </div>
        </div>
      </div>

      {/* Trusted Logos Section */}
      <div className="text-center pb-5">
        <p className="text-secondary">TRUSTED BY INDUSTRY LEADERS</p>
      </div>
    </div>
  </>
}
