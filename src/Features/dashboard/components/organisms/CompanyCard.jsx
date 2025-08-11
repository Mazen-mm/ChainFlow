import CompanyDetails from '../molecules/CompanyDetails'

export default function CompanyCard({ data }) {
  if (!data) return <div className="text-muted">No company data</div>;
  return (
    <>
      <small className='fw-bolder'>Budget Overview</small>
      <hr className='mt-0' />
      <div className="row justify-content-evenly">
        <div className="col-lg-4 col-md-12 p-0">
          <div className="d-flex flex-column text-center gap-3 h-100">
            <CompanyDetails labels='Employee Count' count={data.employeeCount} />
            <CompanyDetails labels='Partner Count' count={data.partnerCount} />
            <CompanyDetails labels="Today's Orders" count={data.todaysOrders} remain={data.ordersRemaining} />
          </div>
        </div>
        <div className="col-lg-7 col-md-12 p-0">
          <div className="d-flex flex-column text-center gap-3 h-100">
            <CompanyDetails labels='Current Plan' count={data.currentPlan} CardStyle={{ backgroundColor: "#C9D4FF" }} />
            <div className='d-flex w-100 gap-3'>
              <div className="w-50">
                <CompanyDetails labels='Recharge' count={data.rechargeDays} remain="remaining" h4Style={{ fontSize: '20px' }} />
              </div>
              <div className="w-50">
                <CompanyDetails labels="Plan Price" count={data.planPrice} h4Style={{ fontSize: '20px' }} />
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
  );
}


