
export default function CompanyDetails({labels , count , remain , CardStyle , h4Style}) {
  return  <>
    <div className='card whiteBg p-0 h-100 rounded-4' style={CardStyle}>
      <div className="card-body d-flex flex-column justify-content-center text-center">
        <small className='text-muted'>{labels}</small>
        <h3 className="fw-bolder my-1" style={h4Style}>{count}</h3>
        <small className='text-muted'>{remain}</small>
      </div>
    </div>
  </>
}

