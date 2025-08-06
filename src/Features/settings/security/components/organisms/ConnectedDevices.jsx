
import DeviceIcon from '../atoms/DeviceIcon';
import DashBtn from './../../../../../Shared/Components/Atoms/DashBtn';
import { RecycleIcon } from './../../../../../assets/Icons/SVG';

export default function ConnectedDevices({ devices, onRemove }) {
  return (
    <div className="card rounded-3 p-3">
      <h6 className="fw-semibold">Connected Devices</h6>
      <p className="smallSize text-dark">These devices are currently logged in to your account.</p>
      {devices.map((device) => (
        <div key={device.id} className="list-group-item border-0 px-0">
          <div className="d-flex align-items-center justify-content-between py-2">
            <div className="d-flex align-items-center gap-3">
              <DeviceIcon bg={device.iconBg} />
              <div>
                <h6 className="fw-semibold">{device.name}</h6>
                <span className="text-muted small">{device.platform}</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-4">
              <small className="text-muted">{device.location}</small>
              <small className={device.lastAccess === 'Current session' ? 'text-success' : 'text-muted'}>
                {device.lastAccess}
              </small>
              <DashBtn BtnIcon={<RecycleIcon stroke="#0f345c" />} BtnColor="bg-white" onClick={() => onRemove(device.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
