import React from 'react'

export default function DetailsThreeCards({name , count , icon}) {
  return  <>
  <div className="col-6 col-lg-4 p-1">
    <div className="card px-4 d-flex flex-row justify-content-between align-items-center">
      <div className="py-2">
        <p className='opacity-75 smallSize'>{name}</p>
        <p className='fw-bolder h4'>{count}</p>
      </div>
      <div>
        <div className="d-flex align-middle lightBg rounded-2 p-2">{icon}</div>
      </div>
    </div>
  </div>
  </>
}
