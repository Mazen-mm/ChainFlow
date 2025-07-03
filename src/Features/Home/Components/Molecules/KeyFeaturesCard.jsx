
export default function KeyFeaturesCard({Icon , h6 , Paragraph}) {
  return <>
    <div className="col-sm-6 col-md-4">
      <div className="card h-100">
        <span className='bgIcon mb-2 text-center'>{Icon}</span>
        <h6 className='text-dark fw-bold mb-4'>{h6}</h6>
        <p className='smallSize'>{Paragraph}</p>
      </div>
    </div>
  </>
}
