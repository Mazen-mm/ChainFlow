import React from 'react'
import CompanyDetails from '../molecules/CompanyDetails'

export default function CompanyCard() {
  return <>
    <small className='fw-bolder'>Budget Overview</small>
    <hr className='mt-0'/>
    <div className="row justify-content-evenly">
      <div className="col-lg-4 col-md-12 p-0">
        <div className="d-flex flex-column text-center gap-3 h-100">
          <CompanyDetails labels='Employee Count' count='129' />
          <CompanyDetails labels='Partner Count' count="22" />
          <CompanyDetails labels="Today's Orders" count="12/34" remain="22 Remaining" />
        </div>
      </div>
      <div className="col-lg-7 col-md-12 p-0">
        <div className="d-flex flex-column text-center gap-3 h-100">
          <CompanyDetails labels='Current Plan' count="Professional" CardStyle={{backgroundColor:"#C9D4FF"}} />
          <div className='d-flex w-100 gap-3'>
            <div className="w-50">
              <CompanyDetails labels='Recharge' count="33 days" remain="remaining" h4Style={{fontSize:'20px'}} />
            </div>
            <div className="w-50">
              <CompanyDetails labels="Plan Price" count="$999" h4Style={{fontSize:'20px'}} />
            </div>
          </div>
          <div className='d-flex justify-content-between gap-3'>
            <button className='btn primary w-50'>Recharge</button>
            <button className='btn btn-danger w-50'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </>
}


