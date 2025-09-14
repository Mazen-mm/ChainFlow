import React from 'react'
import Chart from '../../../../Dashboard/components/molecules/Chart';
import SubDetails from '../../components/molecules/SubDetails';


export default function SubscriptionPlan() {

  const labels = [ 'Basic' , 'Ordered Value' , 'Enterprise' ];
  const ratio = [ 37.5 , 41.67 , 20.83];
  const colors = [ '#b667f1' , '#0c2d4a' , '#f75c5c' ];



  return <>
    <div className="card h-100 rounded-4">
      <small className='fw-bolder text-dark'>Subscription Plan Distribution</small>
      <hr className='mt-1'/>
      <div className="row align-items-center">
        <div className="col-lg-9 col-sm-12 me-auto">
          <Chart className="mx-auto" data={ratio} colors={colors} labels={labels} />
        </div>
        <div className="col-lg-3 col-sm-12 d-flex flex-column gap-2 text-center">
          <SubDetails ratio={ratio[0]} labels={labels[0]} bg={colors[0]} />
          <SubDetails ratio={ratio[1]} labels={labels[1]} bg={colors[1]} />
          <SubDetails ratio={ratio[2]} labels={labels[2]} bg={colors[2]} />
        </div>
      </div>
    </div>
</>
}
