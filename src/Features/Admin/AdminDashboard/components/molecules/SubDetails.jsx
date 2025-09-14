export default function SubDetails({labels , ratio , bg}) {
  return  <>
    <div className="whiteBg card">
      <p className='smallSize'>{labels}</p>
      <h3 className='fw-bolder'>{ratio}%</h3>
      <span style={{height: '15px', width: '15px', borderRadius:'50%', margin:'auto', backgroundColor:`${bg}`}}>
      </span>
    </div>
  </>
}
