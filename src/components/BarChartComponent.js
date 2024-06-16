import React from 'react';
import '../App.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const BarChartComponent = ({ data }) => {
    const formattedData = Object.keys(data).map(key => ({
        range: key,
        count: data[key]
    }));

    return (
        <>
        <h3>
            Barchart
        </h3>
        <BarChart width={600} height={300} data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
        </>
    );
};

export default BarChartComponent;
