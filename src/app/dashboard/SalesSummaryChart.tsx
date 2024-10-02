import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesSummaryChart = () => {
    // Sample data for demonstration
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales Summary',
                data: [65, 59, 80, 81, 56, 55, 40], // Sample sales data
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Prevent default aspect ratio
        plugins: {
            legend: {
                position: 'top' as const, // Type assertion to ensure compatibility
            },
            title: {
                display: true,
                text: 'Sales Summary Chart',
            },
        },
    };

    return (
        <div className='row-span-3 xl:row-span-6'>

       
        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '10px', padding: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-lg font-semibold mb-4">Sales Summary</h3>
            <div style={{ flexGrow: 1, position: 'relative' }}> {/* This div takes remaining space */}
                <Bar data={data} options={options} />
            </div>
        </div>
        </div>
    );
};

export default SalesSummaryChart;
