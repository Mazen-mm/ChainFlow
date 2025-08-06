import { PenIcon } from '../../../../../assets/Icons/SVG';

export default function EditableField ( { label , field , value , tempValue , isEditing , onChange , col ,
    onEditToggle , type } )  {
  return (
    <div className={col}>
      <label>{label}</label>
      <div className="d-flex gap-2">
        <input className="form-control bg-transparent w-100" type={type} readOnly={!isEditing} 
          onChange={(e) => onChange(field, e.target.value)} 
          value={isEditing ? (tempValue || '') : value}  />
        <button className="btn bg-transparent border" onClick={() => onEditToggle(field)}>
          {isEditing ? <mark className='bg-transparent h5'>✓</mark> : <PenIcon />}
        </button>
      </div>
    </div>
  );
}
