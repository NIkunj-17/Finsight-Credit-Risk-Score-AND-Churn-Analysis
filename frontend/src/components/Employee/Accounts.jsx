import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Accounts = () => {
    const [accountsList, setAccountsList] = useState([]);
    const [loading, setLoading] = useState(true);
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
            } finally {
                setLoading(false);
            }
        };
        
        fetchAccounts();
    }, []);

    if (loading) return <p>Loading...</p>;

    const handleRowClick = (accNumber)=>{
        navigate(`/accounts/${accNumber}`);
    }
    return (
        <div className="p-6 m-6 rounded-lg shadow-md bg-white h-screen overflow-y-scroll box-border">
            <div className="bg-white w-full sticky top-0 z-10 p-4 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Account Details</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="p-3 border-b font-medium text-gray-600 w-1/6">Account Number</th>
                            <th className="p-3 border-b font-medium text-gray-600 w-1/6">Card Number</th>
                            <th className="p-3 border-b font-medium text-gray-600 w-1/6">Cardholder Name</th>
                            <th className="p-3 border-b font-medium text-gray-600 w-1/6">Expiration Date</th>
                            <th className="p-3 border-b font-medium text-gray-600 w-1/6">CVV</th>
                            <th className="p-3 border-b font-medium text-gray-600 w-1/6">Card Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountsList.map((account, index) => (
                            <tr 
                                key={index} 
                                className="border-b hover:bg-gray-100" 
                                onClick={()=>handleRowClick(account['Account Number'])}
                            >
                                
                                <td className="p-3">{account['Account Number']}</td>
                                <td className="p-3">{account['Card Number']}</td>
                                <td className="p-3">{account['Cardholder Name']}</td>
                                <td className="p-3">{account['Expiration Date']}</td>
                                <td className="p-3">***</td>
                                <td className="p-3">{account['Card Type']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Accounts;
