// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
// import { Chart } from 'react-chartjs-2';
// ChartJS.register(BarElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

// export default function WeeklyOverview() {
//   const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   const barData = [25, 35, 20, 15, 40, 30, 18];
//   const lineData = [30, 28, 22, 25, 35, 32, 20];

//   const data = {
//     labels,
//     datasets: [
//       {
//         type: 'bar',
//         data: barData,
//         backgroundColor: (ctx) =>
//           ctx.dataIndex === 4 ? '#3B82F6' : '#E5E7EB', // Highlight Friday
//         borderRadius: 6,
//         barThickness: 18,
//       },
//       {
//         type: 'line',
//         data: lineData,
//         borderColor: '#3B82F6',
//         backgroundColor: '#3B82F6',
//         tension: 0.4,
//         pointRadius: 4,
//         pointHoverRadius: 5,
//         pointBackgroundColor: '#3B82F6',
//         pointBorderColor: '#fff',
//         fill: false,
//       }
//     ]
//   };

//   const options = {
//     plugins: {
//       // legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: (context) => `$${context.raw}`,
//         }
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 50,
//         ticks: {
//           callback: (val) => `$${val}`,
//         },
//         grid: {
//           drawBorder: false,
//           color: '#eee',
//         }
//       },
//       x: {
//         grid: { display: false }
//       }
//     }
//   };

//   return  <>
//       <h5 className="fw-bold mb-3">Weekly Overview</h5>

//       <div style={{ position: 'relative' }}>
//         <Chart type='bar' data={data} options={options} height={180} />

//         {/* <div className="position-absolute top-50 start-50 translate-middle bg-light px-3 py-2 rounded-3 shadow-sm d-flex align-items-center gap-2 border" style={{ fontSize: '0.75rem' }}> */}
//           {/* <div> */}
//             {/* <div className="fw-bold">20 views</div> */}
//             {/* <small className="text-muted">Monday, April 22nd</small> */}
//           {/* </div> */}
//         {/* </div> */}
//       </div>

//       <div className="mt-4">
//         <span className="fw-bold fs-5">30%</span>{' '}
//         <span className="text-muted">Your sales performance is 30% better compare to last month</span>
//       </div>
//   </>
// }


import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS , BarElement , CategoryScale , LinearScale , Tooltip , Legend} from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function WeeklyOverview () {

  const chartData = {
    labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
      data: [24, 20, 18, 25, 22, 30, 28],
      backgroundColor: '#4e73df',
      barThickness: 15,
    }],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} Views`,
          data: val => `${val} opt`
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
        max: 40
      },
      x: {
        ticks: {
          callback: false,
        },
      }
    },
  };

  return <>
    <div className="container my-4 p-0">
      <h4 className="mb-4 text-center">Weekly Overview</h4>
      <Bar data={chartData} options={chartOptions} height={250} />
      <div className="d-flex align-items-center mt-3 gap-2">
        <span className="fw-bold fs-4">30%</span>{' '}
        <span className="text-muted smallSize">Your sales performance is 30% better compare to last month</span>
      </div>
    </div>
  </>
};

