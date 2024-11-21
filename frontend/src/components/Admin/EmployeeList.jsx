// // frontend/src/components/EmployeeList.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/api/users/employees', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//         });
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <div className="p-6 bg-blue-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Current Employees</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-lg rounded-lg border border-gray-200">
//           <thead>
//             <tr className="bg-blue-500 text-white">
//               <th className="py-4 px-6 text-left text-lg font-semibold uppercase tracking-wider">Name</th>
//               <th className="py-4 px-6 text-left text-lg font-semibold uppercase tracking-wider">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee._id} className="border-t hover:bg-blue-100 transition duration-200">
//                 <td className="py-4 px-6 text-gray-700">{employee.name}</td>
//                 <td className="py-4 px-6 text-gray-700">{employee.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeeList;

// frontend/src/components/EmployeeList.jsx

import React, { useState } from "react";
import data from "../../data/data.json";
import { FaSearch } from "react-icons/fa";

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = data.employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.contact.includes(searchTerm)
  );

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Employee List</h2>
      <div className="mb-4 flex justify-end">
        <div className="relative">
          <FaSearch className="absolute left-3 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 pl-10 rounded-md"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee, index) => (
                <tr key={employee.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                  <td className="p-4">{employee.id}</td>
                  <td className="p-4">{employee.name}</td>
                  <td className="p-4">{employee.email}</td>
                  <td className="p-4">{employee.contact}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;