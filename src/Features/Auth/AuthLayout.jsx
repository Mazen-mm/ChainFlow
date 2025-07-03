import FormLogo from './Components/Atoms/FormLogo';
import DividerForm from './Components/Organisms/DividerForm';
import RightSide from './Components/Organisms/RightSide';
import SocialBtns from './Components/Organisms/SocialBtns';
import LoginTemp from './Components/Templates/LoginTemp';
import SignupTemp from './Components/Templates/SignupTemp';

export default function AuthLayout() {
  return <>
    <div className="row overflow-hidden lightBg">
      {/* Left side - form */}
      <div className="col-md-6 position-relative d-flex justify-content-center p-5">
        <div className="w-100 z-1" style={{ maxWidth: "400px" }}>
          <FormLogo/>
          <SocialBtns/>
          <DividerForm/>
          {/* Form Template */}
          <SignupTemp/>
          <LoginTemp/>
          {/* Form Template */}
        </div>
        <div className="layer"></div>
      </div>
      {/* Right side - illustration */}
      <RightSide/>
    </div>
  </>
}
