export default function DetailsCard({detailName , detailNum , icon}) {
  return  <>
  <div className="col-md-3 col-sm-6">
  <div className="rounded-2 border d-flex justify-content-around align-items-center py-2">
    <ul className='list-unstyled m-0'>
      <li className='opacity-75 smallSize'>{detailName}</li>
      <li className='fw-bolder h4'>{detailNum}</li>
    </ul>
    <h4 className="d-flex align-middle lightBg rounded-2 p-2 mb-0">{icon}</h4>
  </div>
  </div>
  </>
}
