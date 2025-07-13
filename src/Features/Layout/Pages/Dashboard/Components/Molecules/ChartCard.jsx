
export default function ChartCard({labels , cost}) {
  return  <>
    <div className="card whiteBg">
      <p className='smallSize'>{labels}</p>
      <h3 className='fw-bolder'>${cost}</h3>
    </div>
  </>
}
