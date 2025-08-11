import { Line } from 'react-chartjs-2';
import {Chart as ChartJS,LineElement,PointElement,CategoryScale,LinearScale,Tooltip,Filler} from 'chart.js';
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

export default function PerformanceCard({ data }) {
  // Fallback to static if not provided
  const labels = data?.labels || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const values = data?.values || [60, 70, 55, 45, 90, 65];
  const best = Math.max(...values);
  const today = values[values.length - 1];
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: values,
        borderColor: '#3B82F6',
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(3, 98, 250, 0.75)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          return gradient;
        },
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} Low Sale`,
        },
      },
    },
    scales: {
      y: {
        display: false,
        min: 0,
        max: Math.max(...values, 100),
      },
    },
  };
  return <>
    <div>
      <h6 className="text-center fw-bold mb-3">Overall Performance</h6>
      <Line data={chartData} options={options} />
      <div className="d-flex justify-content-between mt-3">
        <small className="text-muted">Best<h6 className="fw-bold text-dark">${best}</h6></small>
        <small className="text-muted">Today<h6 className="fw-bold text-dark">${today}</h6></small>
      </div>
    </div>
  </>;
}
