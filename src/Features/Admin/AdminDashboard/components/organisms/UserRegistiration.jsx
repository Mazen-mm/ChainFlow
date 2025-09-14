

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js';

ChartJS.register(Tooltip, Legend);

export default function UserRegistration() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Employees',
        data: [170, 60, 55, 130, 210, 140, 110],
        backgroundColor: '#0F345C', // dark navy
        barThickness: 12,
      },
      {
        label: 'Managers',
        data: [90, 120, 75, 70, 60, 75, 30],
        backgroundColor: '#4e73df', // light blue
        barThickness: 12,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom' ,
        labels: {
          usePointStyle: true,
          boxWidth: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 210,
        ticks: {
          stepSize: 70,
          callback: (val) => val, // just numbers
        },
        grid: {
          drawTicks: false,
        },
      },
      x: {
        stacked: false,
        ticks: {
          font: { weight: 'bold' },
        }
      },
    },
  };

  return (
    <div className="card h-100 rounded-4">
      <h6 className="text-center fw-bold my-3">User Registration Trend</h6>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
