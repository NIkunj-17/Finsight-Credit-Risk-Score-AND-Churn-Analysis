// import React, { useState, useEffect } from 'react';
// import { FaUser, FaBell, FaFileAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
// import employeeimg from '../assets/image.png'; 
// import axios from 'axios';
// import api from '../api';
// const Sidebar = ({ onSelect }) => {
//     const [adminInfo, setAdminInfo] = useState({ name: '', email: '' });

//     useEffect(() => {
//         const fetchAdminInfo = async () => {
//           try {
//             const token = sessionStorage.getItem('token');
//             if (!token) {
//               console.error('No token found');
//               return; // Handle the absence of token as needed
//             }
    
//             // Use the api instance to make the request
//             const response = await api.get('/users/admin-info');
            
//             // Check if the response data structure matches your state
//             setAdminInfo(response.data);
//           } catch (error) {
//             console.error('Error fetching admin info:', error.response?.data || error.message);
//           }
//         };
    
//         fetchAdminInfo();
//       }, []);
//   return (
//     <aside className="w-1/5 bg-gray-800 p-6 text-white h-screen flex flex-col items-center">
//       <div className="text-center mb-10">
//         <img src={employeeimg} alt="Profile" className="rounded-full w-28 h-28 mx-auto" />
//         <p className="mt-6 text-2xl font-semibold">{adminInfo.name}</p>
//         <p className="text-md text-gray-400 mt-2">{adminInfo.email}</p>
//       </div>
      
//       <ul className="flex-grow space-y-10">
//         <li onClick={() => onSelect("manageEmployees")} className="flex items-center space-x-4 cursor-pointer hover:text-gray-300">
//           <FaUserPlus size={24} />
//           <span className="text-lg">Manage Employees</span>
//         </li>
//         <li onClick={() => onSelect("notifications")} className="flex items-center space-x-4 cursor-pointer hover:text-gray-300">
//           <FaBell size={24} />
//           <span className="text-lg">Notifications</span>
//         </li>
//         <li onClick={() => onSelect("reports")} className="flex items-center space-x-4 cursor-pointer hover:text-gray-300">
//           <FaFileAlt size={24} />
//           <span className="text-lg">Reports</span>
//         </li>
//         <li onClick={() => onSelect("logout")} className="flex items-center space-x-4 cursor-pointer hover:text-gray-300">
//           <FaSignOutAlt size={24} />
//           <span className="text-lg">Logout</span>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

import React from 'react';
import employeeimg from '../assets/image.png';
import { FaUserPlus, FaBell, FaFileAlt, FaSignOutAlt ,FaThLarge } from 'react-icons/fa';

const Sidebar = ({ onSelect }) => {
  return (
    <aside className="fixed w-1/5 h-full bg-gray-900 text-white p-6 flex flex-col items-center shadow-lg">
      <div className="text-center mb-10">
        <img src={employeeimg} alt="Profile" className="rounded-full w-28 h-28 mx-auto border-4 border-gray-700" />
        <p className="mt-4 text-3xl font-bold">Nikunj Sharma</p>
        <p className="text-sm text-gray-400 mt-1">nikunjsharma17rtm@gmail.com</p>
      </div>
      
      <ul className="flex-grow space-y-6 w-full">
        {[
          { name: "Dashboard", icon: <FaThLarge /> },
          { name: "Manage Employees", icon: <FaUserPlus /> },
          { name: "Notifications", icon: <FaBell /> },
          { name: "Reports", icon: <FaFileAlt /> },
          { name: "Logout", icon: <FaSignOutAlt /> },
        ].map((item, index) => (
          <li 
            key={index}
            onClick={() => onSelect(item.name.toLowerCase().replace(" ", ""))}
            className="flex items-center space-x-4 cursor-pointer px-4 py-3 rounded-lg transition duration-200 hover:bg-gray-700 hover:text-gray-200"
          >
            {item.icon && <span className="text-xl">{item.icon}</span>}
            <span className="text-lg font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;