import React from 'react'
import { DoubleQuote, Stars } from '../../../../assets/Icons/SVG'
import CustomerImg from '../Atoms/CustomerImg'

export default function OurCustomersCard({Name , Title , Company , desc , Rate}) {
  return  <>
    <div className="col-sm-12">
      <div className="card h-100 text-start PrimaryText d-flex justify-content-between gap-4">
        <div className='d-flex gap-2'>
          <CustomerImg/>
          <div>
            <h6 className='m-0'>{Name}</h6>
            <p className='m-0'>{Title}</p>
            <p className='smallSize m-0'>{Company}</p>
          </div>
          <span className='bgIcon text-center ms-auto'><DoubleQuote /></span>
        </div>
        <p className='smallSize text-dark'>{desc}</p>
        <span className=''>{Rate}</span>
      </div>
    </div>
  </>
}
