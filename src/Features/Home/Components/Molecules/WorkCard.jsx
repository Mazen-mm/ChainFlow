import React from 'react'

export default function WorksItem({Num , h6 , Pargh}) {
  return  <>
  <div className="col-sm-6 p-3">
    <div className="d-flex align-items-center gap-3">
      <span className='primary rounded-circle' style={{fontSize:'28px', width:'45px', height:'45px'}}>{Num}</span>
      <h6>{h6}</h6>
    </div>
    <p className='smallSize text-start mt-2'>{Pargh}</p>
  </div>
  </>
}
