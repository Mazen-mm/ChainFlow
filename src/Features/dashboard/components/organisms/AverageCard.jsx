
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS , BarElement , CategoryScale , LinearScale , Tooltip, Legend } from 'chart.js';
import { Plane } from '../../../../assets/Icons/SVG';
ChartJS.register( BarElement , CategoryScale , LinearScale , Tooltip , Legend );

export default function AverageCard({ data }) {
  // Fallback to static if not provided
  const labels = data?.labels || ['10', '11', '12', '13', '14'];
  const values = data?.values || [18, 35, 28, 33, 22];
  const avg = values.length ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2) : 0;
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: values.map((v, i) => i === values.length - 1 ? '#FB923C' : '#3B82F6'),
      borderRadius: 2,
      barThickness: 7,
    }]
  };
  const options = {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        ticks: { callback: val => `$${val}` },
        beginAtZero: false,
        max: Math.max(...values, 60)
      },
    }
  };
  return <>
    <div className="text-center my-4">
      <div className="lightBg rounded-circle p-2 d-inline-flex"><Plane /></div>
      <p className='fw-bolder opacity-75 my-2'>
        Your Weekly average is <span className="text-primary">${avg}</span>
      </p>
    </div>
    <div className='position-relative mt-5'>
      <small className="position-absolute start-50 top-0 translate-middle lightBg opacity-75 p-1 rounded-3">
        <small className='text-primary'>Today:</small>
        <small>High spending</small>
      </small>
      <Bar data={chartData} options={options} />
    </div>
  </>;
}




