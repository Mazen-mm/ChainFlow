import { MessageIcon } from '../../../../assets/Icons/SVG';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';

export default function PartnerListItem({ partner, selected, onClick }) {
  const getStatusColor = (status) => (status === 'online' ? 'success' : 'secondary');

  return (
    <div
      onClick={onClick}
      className={`d-flex align-items-center p-2 gap-2 border-bottom ${selected ? 'text-white primary' : ''}`}
      style={{ cursor: 'pointer' }}
    >
      <div className={`rounded-circle p-2 bg-${getStatusColor(partner.status)}`}></div>
      <div className="rounded-circle p-2 border border-primary">{partner.avatar}</div>
      <div className="d-flex flex-column">
        <p className="fw-bold">{partner.name}</p>
        <small>{partner.type} • {partner.lastActivity}</small>
      </div>
      <DashBtn BtnIcon={<MessageIcon />} BtnColor="btn border-2 ms-auto"  />
    </div>
  );
}
