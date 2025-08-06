export default function CheckboxWithLabel({ id, label, checked, onChange }) {
  return (
    <div className='d-flex gap-2'>
      <input className="form-check-input" type="checkbox" id={id} onChange={onChange} checked={checked} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
