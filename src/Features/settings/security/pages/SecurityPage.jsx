
import PasswordInputGroup from '../components/molecules/PasswordInputGroup';
import ConnectedDevices from '../components/organisms/ConnectedDevices';
import ChangePasswordModal from '../components/organisms/ChangePasswordModal';
import useSecurity from '../hooks/useSecurity';
import { LockIcon } from './../../../../assets/Icons/SVG';

export default function SecurityPage() {
  const {
    twoFactorEnabled,
    showModal,
    passwordForm,
    connectedDevices,
    toggleTwoFactor,
    openModal,
    closeModal,
    onPasswordChange,
    submitPasswordChange,
    removeDevice
  } = useSecurity();

  return (
    <>
      <div className="row PrimaryText gap-3">
        <div className="d-flex align-items-center gap-2 my-1">
          <LockIcon stroke="currentColor" />
          <h5 className="m-0">Security</h5>
        </div>
        <small>Secure your account with a password and other options.</small>
        <hr />
        <div className="card whiteBg rounded-3 p-3">
          <h6 className="fw-semibold">Company Information</h6>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <h6 className="fw-semibold">Password</h6>
              <p className="smallSize">Change your password to protect your account.</p>
            </div>
            <div className="col-lg-8 col-sm-12">
              <PasswordInputGroup onClick={openModal} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="fw-semibold">Two-Step Authentication</h6>
                <p className="smallSize">Recommended for extra account security.</p>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" style={{ width: '3rem', height: '1.5rem' }}
                  type="checkbox" id="twoFactorSwitch" checked={twoFactorEnabled} onChange={toggleTwoFactor} />
              </div>
            </div>
          </div>
        </div>
        <ConnectedDevices devices={connectedDevices} onRemove={removeDevice} />
      </div>

      {showModal && (
        <ChangePasswordModal
          form={passwordForm}
          onClose={closeModal}
          onChange={onPasswordChange}
          onSubmit={submitPasswordChange}
        />
      )}
    </>
  );
}
