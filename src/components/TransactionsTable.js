import React ,{useEffect,useState} from 'react';
import axios from 'axios'
import '../App.css'
import axiosClient from '../axiosClient';
const TransactionsTable = ({ month,setMonth }) => {
    console.log(month);
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axiosClient.get('/transactions', {
                    params: { month, search, page, per_page: perPage }
                });
                setTransactions(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTransactions();
    }, [month, search, page, perPage]);
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);  // Reset to first page on new search
    };

    return (
        <div className='transactionTableContainer'>
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search transactions"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        {/* <th>Date of Sale</th> */}
                        <th>Category</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction._id}>
                            <td>{transaction._id}</td>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.price}</td>
                            {/* <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td> */}
                            <td>{transaction.category}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <span>Page {page}</span>
                <button onClick={() => setPage(page + 1)}>Next</button>
                <select value={perPage} onChange={(e) => setPerPage(e.target.value)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </select>
            </div>
        </div>
    );
};

export default TransactionsTable;
