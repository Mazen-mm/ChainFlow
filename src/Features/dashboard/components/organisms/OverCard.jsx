import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS , BarElement , CategoryScale , LinearScale , Tooltip , Legend} from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function OverCard({ data }) {
  // Fallback to static if not provided
  const labels = data?.labels || ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const values = data?.values || [24, 20, 18, 25, 22, 30, 28];
  const percent = data?.percent || 30;
  const chartData = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: '#4e73df',
      barThickness: 12,
    }],
  };
  const chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} Views`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: val => `$${val}`,
          stepSize: 20
        },
        beginAtZero: false,
        max: Math.max(...values, 40)
      },
      x: {
        ticks: {
          callback: false,
        },
      }
    },
  };
  return <>
    <div>
      <h6 className="text-center fw-bold mb-3">Weekly Overview</h6>
      <Bar data={chartData} options={chartOptions} />
      <div className="d-flex align-items-center mt-3 gap-2">
        <span className="fw-bold fs-4">{percent}%</span>{' '}
        <span className="text-muted smallSize">Your sales performance is {percent}% better compare to last month</span>
      </div>
    </div>
  </>;
}

