export default function LabelWithText({ label, text }) {
  return (
    <div>
      <label className="fw-semibold">{label}</label>
      <p className="PrimaryText smallSize opacity-75 fw-bold">{text}</p>
    </div>
  );
}
