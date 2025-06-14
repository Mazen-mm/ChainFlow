import port from '../../../assets/Images/Port-amico.png';
import logo from '../../../assets/Images/logo.png';
import microsoft from '../../../assets/Images/microsoft.logo.png';
import google from '../../../assets/Images/google.logo.png';

export default function Signup() {
  return <>
    <div className="row overflow-hidden lightBg vh-100 flex-column">
      {/* Left side - form */}
      <div className="col-md-6 position-relative h-100 d-flex align-items-center justify-content-center p-5">
        <div className="w-100 z-1" style={{ maxWidth: "400px" }}>
          <div className="text-center mx-auto">
            <img src={logo} className='mb-4 w-50' alt="" />
          </div>

          {/* Social Buttons */}
          <button className="btn btn-light w-100 mb-3 border d-flex align-items-center justify-content-center">
            <img src={google} alt="Google" style={{ width: 20, height: 20 }} className="me-2"/>
            Continue with Google
          </button>
          <button className="btn btn-light w-100 mb-4 border d-flex align-items-center justify-content-center">
            <img src={microsoft} alt="Microsoft" style={{ width: 20, height: 20 }} className="me-2" />
            Sign in with Microsoft
          </button>

          {/* Divider */}
          <div className="d-flex fw-bolder align-items-center text-muted mb-4">
            <hr className="flex-grow-1" />
            <span className="mx-2 small">or</span>
            <hr className="flex-grow-1" />
          </div>

          {/* Form */}
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="username"/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="email"/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="password"/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="confirm password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign up</button>
          </form>

          <p className="text-muted fw-bolder mt-3">
            Already have an account?
            <a href="#" className="text-decoration-none text-primary">  Log in</a>
          </p>
        </div>
        <div className="lay"></div>
      </div>

      {/* Right side - illustration */}
      <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
        <div className="text-center">
          <img src={port} alt="" className="mb-4 w-100" style={{ maxHeight: "300px" }} />
          <h4 className="fw-bold">
            Your <span className="text-primary">supply management</span>
            <br /> expedition begins right now
          </h4>
          <hr />
          <p className="text-muted">Get started by creating a new account</p>
        </div>
      </div>
    </div>
  </>
}
