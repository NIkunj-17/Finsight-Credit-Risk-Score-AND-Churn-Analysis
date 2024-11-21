import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {accountNo} = useParams();
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            const apiUrl = `/api/Users/${accountNo}`;
            try {
                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setProfileData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [accountNo]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-6 m-6 bg-white rounded-lg shadow-md">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Customer Profile</h2>
            </div>

            {profileData && (
                <div>
                    {/* Profile Summary */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <h3 className="text-lg font-medium text-gray-600">Account Number</h3>
                            <p className="text-gray-700">{profileData['Account Number']}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-600">Cardholder Name</h3>
                            <p className="text-gray-700">{profileData['Cardholder Name']}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-600">Current Balance</h3>
                            <p className="text-gray-700">${profileData['Current Balance'].toLocaleString()}</p>
                        </div>
                    </div>

                    {/* Recent Transactions Table */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-3 border-b font-medium text-gray-600">Type</th>
                                        <th className="p-3 border-b font-medium text-gray-600">Amount</th>
                                        <th className="p-3 border-b font-medium text-gray-600">Date</th>
                                        <th className="p-3 border-b font-medium text-gray-600">Target Account</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profileData['Last 100 Transactions']
                                        .slice(0, 10)
                                        .map((transaction, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="p-3 capitalize">
                                                    {transaction.Type}
                                                </td>
                                                <td className="p-3">
                                                {"\u20B9"}{transaction.Amount.toLocaleString()}
                                                </td>
                                                <td className="p-3">{transaction.Date}</td>
                                                <td className="p-3">{transaction['Target Account']}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
