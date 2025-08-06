import { useState } from 'react';
import PasswordModal from '../molecules/PasswordInputGroup';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';
import { PenIcon } from '../../../../assets/Icons/SVG';

export default function SecuritySettings() {
  const [showModal, setShowModal] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="row whiteBg card rounded-3">
      <div className="col-12 d-flex flex-column gap-4 my-2">
        <h6 className='fw-semibold'>Company Information</h6>
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-12">
            <h6 className="fw-semibold">Password</h6>
            <p className="smallSize">Change your password to protect your account.</p>
          </div>
          <div className="col-lg-8 col-sm-12 p-0">
            <div className="row">
              <div className='col-md-9 col-sm-6'>
                <input type="password" className="form-control lightBg" placeholder='xxxxxxxx' />
              </div>
              <div className='col-md-3 col-sm-6 p-0'>
                <DashBtn BtnName='Change Password' BtnIcon={<PenIcon />} BtnColor='w-100 px-0 smallSize' 
                  onClick={() => setShowModal(true)} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div>
              <h6 className="fw-semibold">Two-Step authentication</h6>
              <p className="smallSize">This option is recommended for extra account security.</p>
            </div>
            <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input" style={{ width: '3rem', height: '1.5rem' }}
                checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <PasswordModal close={() => setShowModal(false)} />}
    </div>
  );
}
