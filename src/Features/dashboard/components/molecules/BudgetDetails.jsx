
export default function BudgetDetails({labels , cost , bg}) {
  return  <>
    <div className="whiteBg card">
      <p className='smallSize'>{labels}</p>
      <h3 className='fw-bolder'>${cost}</h3>
      <span style={{height: '15px', width: '15px', borderRadius:'50%', margin:'auto', backgroundColor:`${bg}`}}>
      </span>
    </div>
  </>
}
