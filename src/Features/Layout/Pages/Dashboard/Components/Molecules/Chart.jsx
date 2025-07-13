import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

export default function Chart({ data , colors , labels }) {
ChartJS.register(ArcElement, Tooltip);

  const chartData = {
    labels: labels,
    datasets: [{
      data: data,     // e.g. [40, 30, 30]
      backgroundColor: colors
    }]
  };

  const options = {
    plugins: {
      legend: { display: false }
    }
  };

  return <>
    <Doughnut data={chartData} options={options}/>
  </>
}
