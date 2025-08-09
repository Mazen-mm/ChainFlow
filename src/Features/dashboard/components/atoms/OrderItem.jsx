import React from 'react'

export default function OrderItem({ Name , Count , bordr , BackG}) {
  return  <>
    <div className="col-lg-2 col-md-5 col-sm-5 d-flex justify-content-between align-items-center p-1 rounded-2 smallSize"
      style={{backgroundColor: `${BackG}` , border: `1px solid ${bordr}`}}
    >
      <p style={{fontSize:'80%'}}>{Name} </p>
      <p className='rounded-2 fw-bolder px-2' style={{backgroundColor:`${bordr}`}}>{Count}</p>
    </div>
  </>
}
