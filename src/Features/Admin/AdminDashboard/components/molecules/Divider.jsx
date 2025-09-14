import React from 'react'

export default function Divider({text}) {
  return (
  <div className="row my-2 PrimaryText">
    <div className="d-flex p-0 align-items-center">
      <hr style={{ width: '4%' }} />
      <p className="px-3 fw-semibold">{text}</p>
      <hr className="flex-grow-1" />
    </div>
  </div>
  )
}
