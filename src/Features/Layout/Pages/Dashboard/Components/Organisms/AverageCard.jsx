
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS , BarElement , CategoryScale , LinearScale , Tooltip, Legend } from 'chart.js';
import { Plane } from '../../../../../../assets/Icons/SVG';
ChartJS.register( BarElement , CategoryScale , LinearScale , Tooltip , Legend );

export default function AverageCard() {

  const data = {
    labels: ['10', '11', '12', '13', '14'],
    datasets: [{
      data: [18, 35, 28, 33, 22],
      backgroundColor: ['#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6', '#FB923C'], // last bar is orange
      borderRadius: 2,
      barThickness: 7,
    }]
  };

  const options = {
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: {
          callback: val => `$${val}`,
          stepSize: 10
        },
        beginAtZero: false,
        max: 60
      },
    }
  };


return <>
      <div className="text-center my-4">
        <div className="lightBg rounded-circle p-2 d-inline-flex"><Plane/></div>
        <p className='fw-bolder opacity-75 my-2'>Your Weekly average is <span className="text-primary">$100</span></p>
      </div>

      <div className='position-relative mt-5'>
        <div className="position-absolute start-50 top-0 translate-middle lightBg opacity-75 p-2 rounded-3" style={{fontSize:'0.7rem'}}>
          <span className='text-primary'>Today:</span> High spending
        </div>
        <Bar data={data} options={options} />
      </div>
  </>
}
