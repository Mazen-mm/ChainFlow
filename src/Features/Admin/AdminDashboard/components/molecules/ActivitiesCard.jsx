import React from 'react'
import { ClockIcon } from '../../../../../assets/Icons/SVG'

export default function ActivitiesCard() {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 p-1'>
      <div className="card">
        <div className='d-flex align-items-center gap-2'>
          <div><ClockIcon /></div>
          <div style={{width:'44px', height:'44px', borderRadius:'50%', border:'2px solid #5C8DFF'}}></div>
          <div className='d-flex flex-column'>
            <small className='fw-bold'>Activity Description</small>
            <small className='opacity-75'>Activity Description</small>
            <small className='opacity-50'>Activity Description</small>
          </div>
        </div>
      </div>
    </div>
  )
}
