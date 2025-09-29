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
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  // Chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 112, 192, 1)',
        backgroundColor: 'rgba(75, 112, 192, 0.2)',
        fill: true,
        tension: 0.5,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
        scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 90,
        ticks: {
          stepSize: 30,
          color: '#6B7280',
          font: {
            size: 12,
            weight: '500',
          },
          callback: function(value) {
            // Custom Y-axis labels
            const labels = {
              0: '$0',
              10: '$10K',
              20: '$20K',
              30: '$30K',
              40: '$40K',
              50: '$50K',
              60: '$60K',
              70: '$70K',
              80: '$80K',
              90: '$90K'
            };
            return labels[value] || '';
          },
        },
        grid: {
          color: 'rgba(107, 114, 128, 0.2)',
          drawBorder: false,
        },
        title: {
          display: true,
          text: 'Sales Amount',
          color: '#6B7280',
          font: {
            size: 12,
            weight: '600',
          },
        },
      },
      x: {
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
            weight: '500',
          },
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        hoverBackgroundColor: '#7C3AED',
        hoverBorderColor: '#fff',
        hoverBorderWidth: 3,
      },
    },
    interaction: {
      intersect: false,
      mode: 'nearest',
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeOutQuart',
      },
    },
  };

  return (
    <div className='bg-white rounded-lg' style={{ padding: '20px', 
    // height: '95%', width: '95%'
    }}>
        <Line data={data} options={options} />
    </div>
  )
  ;
};

export default LineChart;