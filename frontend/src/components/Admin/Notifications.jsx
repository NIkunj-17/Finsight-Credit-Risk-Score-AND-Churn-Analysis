// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     axios.get('/api/notifications')
//       .then(res => setNotifications(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
//       <ul>
//         {notifications.map((notification, index) => (
//           <li key={index} className="p-2 border-b">
//             {notification.message}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notifications;


import React from "react";
import notificationsData from "../../data/data.json";

const Notifications = () => {
  // Create a mapping of employee IDs to names for easy lookup
  const employeeMap = notificationsData.employees.reduce((map, employee) => {
    map[employee.id] = employee.name;
    return map;
  }, {});

  return (
    <div className="bg-gray-900 text-white p-6 rounded-md shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Notifications</h2>
      <div className="divide-y divide-gray-700">
        {notificationsData.notifications.length > 0 ? (
          notificationsData.notifications.map((notification) => (
            <div
              key={notification.id}
              className="py-4 flex items-start space-x-4 hover:bg-gray-800 transition duration-200 rounded-lg p-4"
            >
              <div className="bg-blue-600 h-12 w-12 flex items-center justify-center rounded-full text-lg font-semibold">
                {notification.employeeId}
              </div>
              <div className="flex-grow">
                <p className="text-sm font-medium text-gray-300">
                  Employee: {employeeMap[notification.employeeId] || "Unknown"}
                </p>
                <p className="text-lg">{notification.message}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
