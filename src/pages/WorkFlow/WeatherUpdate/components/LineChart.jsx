import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['10:00', '12:00', '14:00', '16:00', '18:00'];

const data = {
  labels,
  datasets: [
    {
      label: 'Humidity',
      data: [20, 30, 60, 30, 20, 30],
      borderColor: '#6366F1',
      backgroundColor: '#6366F1',
    },
  ],
};

function BasicLineChart() {
  return(
    <div className='w-full'>
        <Line data={data} />
    </div>
  );
};

const data1 = {
    labels,
    datasets: [
      {
        label: 'Rainfall',
        data: [300, 200, 700, 400, 200, 300],
        borderColor: '#6366F1',
        backgroundColor: '#6366F1',
      },
    ],
  };
  
  function BasicLineChart1() {
    return(
      <div className='w-full'>
          <Line data={data1} />
      </div>
    );
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: 'Pressure',
        data: [1300, 1900, 1400, 1200, 1300, 1700],
        borderColor: '#6366F1',
        backgroundColor: '#6366F1',
      },
    ],
  };
  
  function BasicLineChart3() {
    return(
      <div className='w-full'>
          <Line data={data2} />
      </div>
    );
  };

export {BasicLineChart, BasicLineChart1, BasicLineChart3};
