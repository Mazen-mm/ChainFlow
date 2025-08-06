export default function PartnerStatCard({ label, value }) {
  return (
    <div className="card whiteBg w-100 rounded-3">
      <p className="smallSize opacity-75">{label}</p>
      <h5>{value}</h5>
    </div>
  );
}
