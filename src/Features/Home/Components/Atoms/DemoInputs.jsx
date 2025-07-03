import React from 'react'

export default function DemoInputs({labelFor, labelName, inputType, inputId, inputHolder}) {
  return  <>
  <div className="mb-3">
    <label htmlFor={labelFor}>{labelName}</label>
    <input type={inputType} className="form-control opacity-75" id={inputId} placeholder={inputHolder}/>
  </div>
  </>
}
