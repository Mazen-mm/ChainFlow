
import Chart from '../Molecules/Chart';
import BudgetDetails from '../molecules/BudgetDetails';
import 'swiper/css';

export default function BudgetCard({ data }) {
  if (!data) return <div className="text-muted">No budget data</div>;
  const { labels = [], cost = [], colors = [] } = data;
  return (
    <>
      <small className='fw-bolder'>Budget Overview</small>
      <hr className='mt-0' />
      <div className="row align-items-center">
        <div className="col-7 text-center">
          <Chart data={cost} colors={colors} labels={labels} />
          <button className='btn primary'>Details</button>
        </div>
        <div className="col-5 d-flex flex-column gap-2 text-center">
          {labels.map((label, i) => (
            <BudgetDetails key={label} cost={cost[i]?.toLocaleString()} labels={label} bg={colors[i]} />
          ))}
        </div>
      </div>
    </>
  );
}


