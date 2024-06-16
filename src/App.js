import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChartComponent from './components/BarChartComponent';
import PieChartComponent from './components/PieChartComponent';
import { Route, Routes } from 'react-router-dom';
import axiosClient from './axiosClient';

const App = () => {
    const [month, setMonth] = useState('March');
    const [transactions, setTransactions] = useState([]);
    const [statistics, setStatistics] = useState({});
    const [barChart, setBarChart] = useState({});
    const [pieChart, setPieChart] = useState({});

    useEffect(() => {
        fetchCombinedData();
    }, [month]);

    const fetchCombinedData = async () => {
        const response = await axiosClient.get(`/combined?month=${month}`);
        setTransactions(response.data.transactions);
        setStatistics(response.data.statistics);
        setBarChart(response.data.bar_chart);
        setPieChart(response.data.pie_chart);
    };

    return (
        <div className="App">
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
           <Routes>

           {month&& <Route path='/transaction' element={ <TransactionsTable month={month} setMonth={setMonth} />}></Route>}
            <Route path='/statics' element={<Statistics statistics={statistics} />}></Route>
            <Route path='/barchart' element={<BarChartComponent data={barChart} />}></Route>
            <Route path='/piechart' element={<PieChartComponent data={pieChart} />}></Route>
            <Route path='/' element={
               <div className='container'>
                <TransactionsTable month={month} setMonth={setMonth} />
                <BarChartComponent data={barChart} />
                <Statistics statistics={statistics} />
                <PieChartComponent data={pieChart} />
               </div>
            }></Route>
           </Routes>
        </div>
    );
};

export default App;
