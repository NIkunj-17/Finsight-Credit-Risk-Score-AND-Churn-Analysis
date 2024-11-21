import { useState } from "react";

function SearchBar({ onFilter }) {
    const [accNo, setAccNo] = useState('');
    const [status, setStatus] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [tilDate, setTilDate] = useState('');

    const handleSearch = () => {
        onFilter({
            accNo: accNo.trim(),
            status,
            fromDate,
            tilDate
        });
    };

    return (
        <div className="flex flex-wrap gap-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <input
                type="text"
                placeholder="Search by Account No"
                value={accNo}
                onChange={(e) => setAccNo(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">All</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </select>

            <div className="flex items-center flex-1">
                <span className="text-gray-500 mr-2">Date From:</span>
                <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex items-center flex-1">
                <span className="text-gray-500 mr-2">Date To:</span>
                <input
                    type="date"
                    value={tilDate}
                    onChange={(e) => setTilDate(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;