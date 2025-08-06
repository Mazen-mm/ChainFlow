
import DashBtn from './../../../../../Shared/Components/Atoms/DashBtn';
import { PenIcon } from '../../../../../assets/Icons/SVG';

export default function PasswordInputGroup({ onClick }) {
  return (
    <div className="row">
      <div className="col-md-9 col-sm-6">
        <input type="password" className="form-control lightBg" placeholder="xxxxxxxxxxxxxxxx" />
      </div>
      <div className="col-md-3 col-sm-6 p-0">
        <DashBtn BtnName="Change Password" BtnColor="w-100 px-0 smallSize" BtnIcon={<PenIcon />}
          onClick={onClick} />
      </div>
    </div>
  );
}
