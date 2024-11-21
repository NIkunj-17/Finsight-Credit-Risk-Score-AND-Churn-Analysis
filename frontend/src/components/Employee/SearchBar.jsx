 
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
        <div className="w-9/10 h-16 mx-auto flex items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            {/* Search by Account No */}
            <input
                type="text"
                placeholder="Search by Account No"
                value={accNo}
                onChange={(e) => setAccNo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Status Dropdown */}
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">All</option>
                <option value="pending">pending</option>
                <option value="approved">approved</option>
                <option value="rejected">rejected</option>
            </select>

            {/* Date From */}
            <div className="flex items-center w-full">
                <span className="text-gray-500 mr-2">Date From:</span>
                <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Date To */}
            <div className="flex items-center w-full">
                <span className="text-gray-500 mr-2">Date To:</span>
                <input
                    type="date"
                    value={tilDate}
                    onChange={(e) => setTilDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
