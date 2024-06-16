import React from 'react';
import '../App.css'
const Statistics = ({ statistics }) => {
    return (
        <div>
            <h3>Statistics</h3>
            <p>Total Sales: {statistics.total_sales}</p>
            <p>Total Sold Items: {statistics.total_sold_items}</p>
            <p>Total Not Sold Items: {statistics.total_not_sold_items}</p>
        </div>
    );
};

export default Statistics;
