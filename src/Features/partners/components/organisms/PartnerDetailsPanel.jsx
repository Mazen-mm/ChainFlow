
import PartnerStatCard from '../atoms/PartnerStatCard';
import { MessageIcon } from '../../../../assets/Icons/SVG';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';

export default function PartnerDetailsPanel({ partner }) {
  const getAccessColor = (access) => {
    switch (access) {
      case 'Full access': return 'success';
      case 'Limited access': return 'warning';
      default: return 'secondary';
    }
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <div className="rounded-circle p-3 border border-primary">{partner.avatar}</div>
        <div>
          <h3 className="fw-bold">{partner.name}</h3>
          <span className="badge bg-primary">{partner.type}</span>
          <small className="text-muted">Connected since {partner.connectedSince}</small>
        </div>
        <DashBtn BtnName={'Contact'} BtnIcon={<MessageIcon />} BtnColor={'btn-primary'} />
      </div>

      <div className="d-flex justify-content-between my-3 gap-3">
        <PartnerStatCard label="Orders Processed" value={partner.ordersProcessed.toLocaleString()} />
        <PartnerStatCard label="On-time Delivery" value={partner.onTimeDelivery} />
        <PartnerStatCard label="Active Shipments" value={partner.activeShipments} />
      </div>

      <h5>Shared Data & Permissions</h5>
      {partner.permissions.map((perm, idx) => (
        <div key={idx} className="d-flex justify-content-between align-items-center whiteBg p-2 my-2">
          <div className="d-flex align-items-center gap-2">
            <span className="rounded-circle p-2 lightBg">{perm.icon}</span>
            <h6>{perm.category}</h6>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className={`badge bg-${getAccessColor(perm.access)}`}>{perm.access}</span>
            <button className="btn link-primary">Edit</button>
          </div>
        </div>
      ))}

      <h5>Recent Activity</h5>
      {partner.recentActivity.map((activity, idx) => (
        <div key={idx} className="d-flex justify-content-between align-items-center gap-2 whiteBg p-2 my-2">
          <span className="rounded-circle p-2 lightBg">{activity.icon}</span>
          <div className="flex-grow-1">
            <p>{activity.action}</p>
            <small className="text-muted">{activity.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
