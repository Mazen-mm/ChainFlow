import LabelWithText from '../atoms/LabelWithText';

export default function PreferenceSelector({ label, text, value, options, onChange }) {
  return (
    <div className="d-flex justify-content-between">
      <LabelWithText label={label} text={text} />
      <select className="form-select w-auto" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}
