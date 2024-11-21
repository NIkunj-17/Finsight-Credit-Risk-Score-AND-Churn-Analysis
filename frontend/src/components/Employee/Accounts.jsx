import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const Accounts = () => {
    const [accountsList, setAccountsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccounts = async () => {
            const apiUrl = '/api/Users';
            try {
                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setAccountsList(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchAccounts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <TailSpin height={80} width={80} color="#4fa94d" ariaLabel="loading" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <p className="text-lg font-medium text-red-600">Failed to load account details. Please try again later.</p>
            </div>
        );
    }

    const handleRowClick = (accNumber) => {
        navigate(`/accounts/${accNumber}`);
    };

    return (
        <div className="p-6 m-6 bg-white rounded-lg shadow-lg h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 shadow-md">
                <h2 className="text-2xl font-bold text-gray-700 text-center">Account Details</h2>
            </div>

            <div className="overflow-x-auto mt-4">
                <table className="min-w-full border-collapse bg-white shadow-md">
                    <thead>
                        <tr className="bg-gray-800 text-white text-sm leading-normal">
                            <th className="p-4 border-b-2 border-gray-300 font-semibold">Account Number</th>
                            <th className="p-4 border-b-2 border-gray-300 font-semibold">Card Number</th>
                            <th className="p-4 border-b-2 border-gray-300 font-semibold">Cardholder Name</th>
                            <th className="p-4 border-b-2 border-gray-300 font-semibold">Expiration Date</th>
                            <th className="p-4 border-b-2 border-gray-300 font-semibold">CVV</th>
                            <th className="p-4 border-b-2 border-gray-300 font-semibold">Card Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountsList.map((account, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-100 text-gray-700 text-sm cursor-pointer transition duration-200"
                                onClick={() => handleRowClick(account['Account Number'])}
                            >
                                <td className="p-4 border-b border-gray-300">{account['Account Number']}</td>
                                <td className="p-4 border-b border-gray-300">{account['Card Number']}</td>
                                <td className="p-4 border-b border-gray-300">{account['Cardholder Name']}</td>
                                <td className="p-4 border-b border-gray-300">{account['Expiration Date']}</td>
                                <td className="p-4 border-b border-gray-300">***</td>
                                <td className="p-4 border-b border-gray-300">{account['Card Type']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Accounts;