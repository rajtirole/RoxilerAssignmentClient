import React from 'react';
import '../App.css'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const PieChartComponent = ({ data }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const formattedData = Object.keys(data).map((key, index) => ({
        name: key,
        value: data[key],
        color: COLORS[index % COLORS.length]
    }));

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={formattedData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
            >
                {formattedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
};

export default PieChartComponent;
