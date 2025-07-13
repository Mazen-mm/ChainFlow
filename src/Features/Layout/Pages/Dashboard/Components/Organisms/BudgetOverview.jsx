
import Chart from '../Molecules/Chart';
import ChartCard from '../Molecules/ChartCard';
import 'swiper/css';

export default function BudgetOverview() {

const labels = [ 'Inventory Sale' , 'Ordered Value' , 'Remaining Budget' ];
const cost = [ 10231 , 20041 , 5443];
const colors = [ '#b667f1' , '#0c2d4a' , '#f75c5c' ];


  
  return  <>
      <small className='fw-bolder'>Budget Overview</small>
      <hr/>
      <div className="row align-items-center">
        <div className="col-md-7 col-sm-12 text-center">
          <Chart data={cost} colors={colors} labels={labels} />
          <button className='btn primary my-3'>Details</button>
        </div>
        <div className="col-md-5 col-sm-12 row gap-2 text-center">
          <ChartCard cost={cost[0].toLocaleString()} labels={labels[0]} />
          <ChartCard cost={cost[1].toLocaleString()} labels={labels[1]} />
          <ChartCard cost={cost[2].toLocaleString()} labels={labels[2]} />
        </div>
      </div>
  </>
}
