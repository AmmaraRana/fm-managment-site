import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CardPurchaseSummary = () => {
    // Sample data for demonstration
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Purchase Summary',
                data: [30, 50, 70, 40, 60, 20, 90], // Sample purchase data
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                fill: true, // Fill the area under the line
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
                text: 'Purchase Summary Chart',
            },
        },
    };

    return (
        <div className='row-span-3 xl:row-span-6 '>

       
        <div style={{ width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '10px', padding: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-lg font-semibold mb-4">Purchase Summary</h3>
            <div style={{ flexGrow: 1, position: 'relative', height: '0', paddingBottom: '100%' }}> {/* Set padding-bottom to control aspect ratio */}
                <Line data={data} options={options} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} /> {/* Ensure the chart fills the container */}
            </div>
        </div> </div>
    );
};

export default CardPurchaseSummary;
