
import React, { useState } from "react";
import HomePage from './Employee/HomePage';
import Accounts from './Employee/Accounts';
import Profile from './Employee/Profile';
import Request from './Employee/Request';
import PageNotFound from './Employee/PageNotFound';
import Sidebar from "./Employee/Sidebar";
const EmployeeDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const renderContent = () => {
    switch (selectedPage) {
      case "dashboard":
        return <HomePage />;
      case "accounts":
        return <Accounts />;
      case "request":
        return <Request />;
      default:
        return <PageNotFound/>;
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

export default EmployeeDashboard;