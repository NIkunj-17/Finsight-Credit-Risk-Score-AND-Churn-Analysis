// // frontend/src/components/ManageEmployees.jsx

// import React, { useState, useEffect } from 'react';
// import api from '../api';

// const ManageEmployees = () => {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [newEmployee, setNewEmployee] = useState({ name: '', email: '', password: '' });

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await api.get('users/employees', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//         });
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleAddEmployee = async () => {
//     try {
//       await api.post('users/add', newEmployee, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       alert('Employee added successfully');
//       setNewEmployee({ name: '', email: '', password: '' });
//     } catch (error) {
//       console.error('Error adding employee:', error);
//     }
//   };

//   const handleRemoveEmployee = async (id) => {
//     try {
//       await api.delete(`users/remove/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       alert('Employee removed successfully');
//       setEmployees(employees.filter((employee) => employee._id !== id));
//     } catch (error) {
//       console.error('Error removing employee:', error);
//     }
//   };

//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Manage Employees</h2>

//       {/* Add New Employee Form */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">Add New Employee</h3>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newEmployee.name}
//           onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
//           className="border p-2 mb-2 mr-2"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newEmployee.email}
//           onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
//           className="border p-2 mb-2 mr-2"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={newEmployee.password}
//           onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
//           className="border p-2 mb-2"
//         />
//         <button onClick={handleAddEmployee} className="bg-blue-500 text-white py-2 px-4 rounded">
//           Add Employee
//         </button>
//       </div>

//       {/* Search and Remove Employees */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2 mb-4"
//         />
//       </div>

//       <table className="min-w-full bg-white shadow-md rounded border">
//         <thead>
//           <tr>
//             <th className="py-3 px-6 bg-gray-200 text-left text-gray-700 font-semibold uppercase tracking-wider">Name</th>
//             <th className="py-3 px-6 bg-gray-200 text-left text-gray-700 font-semibold uppercase tracking-wider">Email</th>
//             <th className="py-3 px-6 bg-gray-200 text-left text-gray-700 font-semibold uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredEmployees.map((employee) => (
//             <tr key={employee._id} className="border-t">
//               <td className="py-3 px-6">{employee.name}</td>
//               <td className="py-3 px-6">{employee.email}</td>
//               <td className="py-3 px-6">
//                 <button
//                   onClick={() => handleRemoveEmployee(employee._id)}
//                   className="bg-red-500 text-white py-1 px-3 rounded"
//                 >
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageEmployees;


import React, { useState } from "react";
import data from "../../data/data.json";
import { FaUser , FaEnvelope, FaPhone, FaSearch, FaTrash } from "react-icons/fa";

const ManageEmployees = () => {
  const [employees, setEmployees] = useState(data.employees);
  const [formData, setFormData] = useState({ name: "", email: "", contact: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddEmployee = () => {
    if (!formData.name || !formData.email || !formData.contact) {
      alert("Please fill in all fields.");
      return;
    }
    const newEmployee = {
      id: employees.length + 1,
      ...formData,
    };
    setEmployees([...employees, newEmployee]);
    setFormData({ name: "", email: "", contact: "" });
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.contact.includes(searchTerm)
  );

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Employees</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4 md:mb-0">
          <div className="relative flex-grow">
            <FaUser  className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border p-2 pl-10 rounded-md flex-grow md:w-48"
            />
          </div>
          <div className="relative flex-grow">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border p-2 pl-10 rounded-md flex-grow md:w-48"
            />
          </div>
          <div className="relative flex-grow">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Contact"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="border p-2 pl-10 rounded-md flex-grow md:w-48"
            />
          </div>
          <button
            onClick={handleAddEmployee}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Employee
          </button>
        </div>
        <div className="mt-4 md:mt-0 relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 pl-10 rounded-md"
          />
        </div>
      </div>
      {filteredEmployees.length === 0 ? (
        <div className="text-center text-gray-500">No employees found.</div>
      ) : (
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={employee.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <td className="p-4">{employee.id}</td>
                <td className="p-4">{employee.name}</td>
                <td className="p-4">{employee.email}</td>
                <td className="p-4">{employee.contact}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageEmployees;