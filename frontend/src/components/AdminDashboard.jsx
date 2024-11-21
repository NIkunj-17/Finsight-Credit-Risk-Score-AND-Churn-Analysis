// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const AdminDashboard = () => {
// //   const [users, setUsers] = useState([]);
// //   const [notifications, setNotifications] = useState([]);
// //   const [newUser, setNewUser] = useState({ name: '', email: '' });
// //   const [showAddForm, setShowAddForm] = useState(false);

// //   useEffect(() => {
// //     // Fetch all employees
// //     axios.get('/api/users', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
// //       .then(res => setUsers(res.data))
// //       .catch(err => console.error(err));

// //     // Fetch notifications
// //     axios.get('/api/notifications', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
// //       .then(res => setNotifications(res.data))
// //       .catch(err => console.error(err));
// //   }, []);

// //   const handleRemoveUser = (id) => {
// //     axios.delete(`/api/users/${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
// //       .then(() => setUsers(users.filter(user => user._id !== id)))
// //       .catch(err => console.error(err));
// //   };

// //   const handleAddUser = (e) => {
// //     e.preventDefault();
// //     axios.post('/api/users', newUser, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
// //       .then(res => {
// //         setUsers([...users, res.data]);
// //         setNewUser({ name: '', email: '' });
// //         setShowAddForm(false);
// //       })
// //       .catch(err => console.error(err));
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
// //       {/* Sidebar */}
// //       <aside className="w-1/5 bg-gray-800 p-5 text-white">
// //         <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
// //         <ul className="space-y-4">
// //           <li className="hover:text-gray-300 cursor-pointer">Manage Employees</li>
// //           <li className="hover:text-gray-300 cursor-pointer">Notifications</li>
// //           <li className="hover:text-gray-300 cursor-pointer">Logout</li>
// //         </ul>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-6">
// //         <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Admin Dashboard</h1>

// //         {/* Employee Management Section */}
// //         <section className="mb-8">
// //           <div className="flex justify-between items-center mb-4">
// //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">All Employees</h2>
// //             <button 
// //               onClick={() => setShowAddForm(!showAddForm)} 
// //               className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
// //             >
// //               {showAddForm ? 'Cancel' : 'Add New Employee'}
// //             </button>
// //           </div>

// //           {/* Add Employee Form */}
// //           {showAddForm && (
// //             <form onSubmit={handleAddUser} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
// //               <div className="mb-3">
// //                 <label className="block text-gray-700 dark:text-gray-300">Name</label>
// //                 <input 
// //                   type="text" 
// //                   value={newUser.name} 
// //                   onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} 
// //                   className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
// //                   required
// //                 />
// //               </div>
// //               <div className="mb-3">
// //                 <label className="block text-gray-700 dark:text-gray-300">Email</label>
// //                 <input 
// //                   type="email" 
// //                   value={newUser.email} 
// //                   onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} 
// //                   className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
// //                   required
// //                 />
// //               </div>
// //               <button 
// //                 type="submit" 
// //                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
// //               >
// //                 Add Employee
// //               </button>
// //             </form>
// //           )}

// //           <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-3">
// //             {users.map(user => (
// //               <li key={user._id} className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
// //                 <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
// //                 <button 
// //                   onClick={() => handleRemoveUser(user._id)} 
// //                   className="text-red-500 hover:text-red-700"
// //                 >
// //                   Remove
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>

// //         {/* Notifications Section */}
// //         <section>
// //           <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Notifications</h2>
// //           <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-3">
// //             {notifications.map((notification, index) => (
// //               <li key={index} className="p-2 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
// //                 {notification.message}
// //               </li>
// //             ))}
// //           </ul>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import ManageEmployees from './ManageEmployees';
// import Notifications from './Notifications';
// import Reports from './Reports';
// import EmployeeList from './EmployeeList';

// const AdminDashboard = () => {
//   const [selectedPage, setSelectedPage] = useState("dashboard");

//   const renderContent = () => {
//     switch (selectedPage) {
//       case "dashboard":
//         return <EmployeeList />;
//       case "notifications":
//         return <Notifications />;
//       case "reports":
//         return <Reports />;
//         case 'manageEmployees':
//               return <ManageEmployees />;
//       default:
//         return <div>Welcome to the Admin Dashboard</div>;
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar onSelect={setSelectedPage} />
//       <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import ManageEmployees from './ManageEmployees';
// import Notifications from './Notifications';
// import Reports from './Reports';
// import EmployeeList from './EmployeeList';

// const AdminDashboard = () => {
//   const [selectedPage, setSelectedPage] = useState("dashboard");

//   const renderContent = () => {
//     switch (selectedPage) {
//       case "dashboard":
//         return <EmployeeList />;
//       case "notifications":
//         return <Notifications />;
//       case "reports":
//         return <Reports />;
//       case "manageEmployees":
//       default:
//         return <ManageEmployees />;
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar onSelect={setSelectedPage} />
//       <main className="ml-1/5 w-4/5 p-6 bg-gray-50 overflow-y-auto">
//         {renderContent()}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from "react";
import Sidebar from "./Admin/Sidebar";
import ManageEmployees from "./Admin/ManageEmployees";
import Notifications from "./Admin/Notifications";
import Reports from "./Admin/Reports";
import EmployeeList from "./Admin/EmployeeList";

const AdminDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const renderContent = () => {
    switch (selectedPage) {
      case "dashboard":
        return <EmployeeList />;
      case "notifications":
        return <Notifications />;
      case "reports":
        return <Reports />;
      case "manageEmployees":
      default:
        return <ManageEmployees />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onSelect={setSelectedPage} />
      <main className="ml-[20%] w-[80%] p-6 bg-gray-50 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;