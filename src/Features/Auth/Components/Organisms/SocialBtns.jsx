import microsoft from '../../../../assets/Images/microsoft.logo.png';
import google from '../../../../assets/Images/google.logo.png';

export default function SocialBtns() {
  return <>
    <button className="btn btn-light w-100 mb-3 border d-flex align-items-center justify-content-center">
      <img src={google} alt="Google" style={{ width: 20, height: 20 }} className="me-2"/>
      Continue with Google
    </button>
    <button className="btn btn-light w-100 mb-4 border d-flex align-items-center justify-content-center">
      <img src={microsoft} alt="Microsoft" style={{ width: 20, height: 20 }} className="me-2" />
      Sign in with Microsoft
    </button>
  </>
}
