import React from 'react'

export default function FormInputs({type ="" , placeholder=""}) {
  return <>
    <div className='mb-3'>
      <input type={type} className="form-control" placeholder={placeholder}/>
    </div>
  </>
}
