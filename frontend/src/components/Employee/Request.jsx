
// import React, { useState, useEffect } from 'react';
// import SearchBar from './Dashboard/test/SearchBar';

// const Request = () => {
//   const [requestList, setRequestList] = useState([]);
//   const [filteredRequests,setfilteredRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRequest = async () => {
//       const apiUrl = '/api/request';
//       try {
//         const res = await fetch(apiUrl);
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         const data = await res.json();
//         setRequestList(data);
//         setfilteredRequests(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRequest();
//   }, []);

//   // update Request list acc to the filter 
//   const handleFilter = ({ accNo, status, fromDate, tilDate }) => {
//     let filteredData = requestList;

//     if (accNo) {
//         filteredData = filteredData.filter(request =>
//             request['Account Number'].toString().includes(accNo)
//         );
//     }
//     if (status) {
//         filteredData = filteredData.filter(request =>
//             request.Status.toLowerCase() === status.toLowerCase()
//         );
//     }
//     if (fromDate) {
//         filteredData = filteredData.filter(request =>
//             new Date(request['Application Date']) >= new Date(fromDate)
//         );
//     }
//     if (tilDate) {
//         filteredData = filteredData.filter(request =>
//             new Date(request['Application Date']) <= new Date(tilDate)
//         );
//     }

//     setFilteredRequests(filteredData);
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className=" p-6 m-6 rounded-lg shadow-md bg-white h-screen overflow-y-scroll box-border ">
//       <div className="bg-white w-full sticky top-0 z-10 p-4 shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Loan Requests</h2>
//         <SearchBar />
//       </div>
           
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr>
//               <th className="p-3 border-b font-medium text-gray-600 w-1/6">Account Number</th>
//               <th className="p-3 border-b font-medium text-gray-600 w-1/6">Loan Type</th>
//               <th className="p-3 border-b font-medium text-gray-600 w-1/6">Requested Amount</th>
//               <th className="p-3 border-b font-medium text-gray-600 w-1/6">Interest Rate (%)</th>
//               <th className="p-3 border-b font-medium text-gray-600 w-1/6">Application Date</th>
//               <th className="p-3 border-b font-medium text-gray-600 w-1/6">Approval Date</th>
//               <th className="p-3 border-b font-medium text-gray-600 w-1/6">Status</th>
//             </tr>
//           </thead>
//           <tbody> 
//             {requestList.map((request, index) => (
//               <tr key={index} className="border-b">
//                 <td className="p-3">{request['Account Number']}</td>
//                 <td className="p-3">{request['Loan Type']}</td>
//                 <td className="p-3">{request['Requested Amount'].toLocaleString()}</td>
//                 <td className="p-3">{request['Interest Rate']}%</td>
//                 <td className="p-3">{request['Application Date']}</td>
//                 <td className="p-3">{request['Approval Date']}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-2 py-1 rounded-md text-sm ${
//                       request.Status === "approved"
//                         ? "bg-green-100 text-green-600"
//                         : request.Status === "pending"
//                         ? "bg-yellow-100 text-yellow-600"
//                         : "bg-red-100 text-red-600"
//                     }`}
//                   >
//                     {request.Status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Request;
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { TailSpin } from 'react-loader-spinner';

const Request = () => {
    const [requestList, setRequestList] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRequest = async () => {
            const apiUrl = '/api/request';
            try {
                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setRequestList(data);
                setFilteredRequests(data); // Initially set filtered requests as the full list
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRequest();
    }, []);

    const handleFilter = ({ accNo, status, fromDate, tilDate }) => {
        let filteredData = requestList;

        if (accNo) {
            filteredData = filteredData.filter(request =>
                request['Account Number'].toString().includes(accNo)
            );
        }
        if (status) {
            filteredData = filteredData.filter(request =>
                request.Status.toLowerCase() === status.toLowerCase()
            );
        }
        if (fromDate) {
            filteredData = filteredData.filter(request =>
                new Date(request['Application Date']) >= new Date(fromDate)
            );
        }
        if (tilDate) {
            filteredData = filteredData.filter(request =>
                new Date(request['Application Date']) <= new Date(tilDate)
            );
        }

        setFilteredRequests(filteredData);
    };

    if (loading) return (
        <div className="flex items-center justify-center h-screen">
            <TailSpin height={80} width={80} color="#4fa94d" ariaLabel="loading" />
        </div>
    );

    return (
        <div className="p-6 m-6 rounded-lg shadow-md bg-white h-screen overflow-y-auto">
            <div className="bg-white w-full top-0 z-10 p-4 shadow-md flex flex-col items-center">
    <h3 className="text-2xl font-bold mb-4 text-center">Loan Requests</h3>
    <SearchBar onFilter={handleFilter} />
</div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="p-3 border-b font-medium">Account Number</th>
                            <th className="p-3 border-b font-medium">Loan Type</th>
                            <th className="p-3 border-b font-medium">Requested Amount</th>
                            <th className="p-3 border-b font-medium">Interest Rate (%)</th>
                            <th className="p-3 border-b font-medium">Application Date</th>
                            <th className="p-3 border-b font-medium">Approval Date</th>
                            <th className="p-3 border-b font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRequests.map((request, index) => (
                            <tr key={index} className="border-b hover:bg-gray-100 transition duration-200">
                                <td className="p-3">{request['Account Number']}</td>
                                <td className="p-3">{request['Loan Type']}</td>
                                <td className="p-3">{"\u20B9"}{request['Requested Amount'].toLocaleString()}</td>
                                <td className="p-3">{request['Interest Rate']}%</td>
                                <td className="p-3">{request['Application Date']}</td>
                                <td className="p-3">{request['Approval Date']}</td>
                                <td class Name="p-3">
                                    <span
                                        className={`px-3 py-1 rounded-md text-sm ${
                                            request.Status === "approved"
                                                ? "bg-green-200 text-green-800"
                                                : request.Status === "pending"
                                                ? "bg-yellow-200 text-yellow-800"
                                                : "bg-red-200 text-red-800"
                                        }`}
                                    >
                                        {request.Status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Request;