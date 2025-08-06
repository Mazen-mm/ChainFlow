import React from 'react';


function FormInputs({ type = "", name = "", value = "", placeholder = "", onChange }) {
  return (
    <div className='mb-3'>
      <input
        type={type}
        name={name}
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInputs;