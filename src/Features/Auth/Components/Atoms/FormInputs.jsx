import React from 'react';

  function FormInputs({ type = "", placeholder = "", onChange }) {
  return (
    <div className='mb-3'>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInputs;