export default function IntegrationToggle({ id, checked, onChange }) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id={`switch-${id}`}
        style={{ width: '3rem', height: '1.8rem' }}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
}
