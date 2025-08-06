
import { PenIcon } from '../../../../../assets/Icons/SVG';

export default function UserInput({ label, value, editable, onChange, onToggle }) {
  return (
    <div className="mb-3">
      <label>{label}</label>
      <div className="d-flex gap-2">
        <input type="text" className="form-control bg-transparent" value={value} 
          onChange={onChange} readOnly={!editable} />
        <button className="btn bg-transparent border" onClick={onToggle}>
          {editable ? <mark className="bg-transparent h5">✓</mark> : <PenIcon />}
        </button>
      </div>
    </div>
  );
}